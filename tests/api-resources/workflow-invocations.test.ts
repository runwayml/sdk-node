// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML, { TaskFailedError, TaskTimedOutError } from '@runwayml/sdk';
import { WorkflowInvocationRetrieveResponse } from '@runwayml/sdk/resources/workflow-invocations';
import { wrapAsWaitableWorkflowInvocation } from '@runwayml/sdk/lib/polling';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflowInvocations', () => {
  test('retrieve', async () => {
    const responsePromise = client.workflowInvocations.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve returns a promise with waitForTaskOutput method', async () => {
    const responsePromise = client.workflowInvocations.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    expect(typeof responsePromise.waitForTaskOutput).toBe('function');
  });
});

describe('workflowInvocations polling', () => {
  const succeededResponse: WorkflowInvocationRetrieveResponse.Succeeded = {
    id: 'inv-1',
    createdAt: '2024-01-01T00:00:00Z',
    status: 'SUCCEEDED',
    output: { 'node-1': ['https://example.com/output.mp4'] },
  };

  const failedResponse: WorkflowInvocationRetrieveResponse.Failed = {
    id: 'inv-1',
    createdAt: '2024-01-01T00:00:00Z',
    status: 'FAILED',
    failure: 'Workflow execution failed',
  };

  const cancelledResponse: WorkflowInvocationRetrieveResponse.Cancelled = {
    id: 'inv-1',
    createdAt: '2024-01-01T00:00:00Z',
    status: 'CANCELLED',
  };

  const pendingResponse: WorkflowInvocationRetrieveResponse.Pending = {
    id: 'inv-1',
    createdAt: '2024-01-01T00:00:00Z',
    status: 'PENDING',
  };

  function mockRetrieveSequence(responses: WorkflowInvocationRetrieveResponse[]) {
    let callIndex = 0;
    return jest.spyOn(client.workflowInvocations, 'retrieve').mockImplementation((() => {
      const response = responses[callIndex] ?? responses[responses.length - 1]!;
      callIndex++;
      return wrapAsWaitableWorkflowInvocation<WorkflowInvocationRetrieveResponse>(client)(
        Promise.resolve(response) as any,
        true,
      );
    }) as any);
  }

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('waitForTaskOutput resolves on SUCCEEDED', async () => {
    const spy = mockRetrieveSequence([succeededResponse]);

    const result = await client.workflowInvocations.retrieve('inv-1').waitForTaskOutput({ timeout: 5000 });

    expect(result.status).toBe('SUCCEEDED');
    expect(result.output).toEqual({ 'node-1': ['https://example.com/output.mp4'] });
    expect(spy).toHaveBeenCalledTimes(2);
  });

  test('waitForTaskOutput throws TaskFailedError on FAILED', async () => {
    mockRetrieveSequence([failedResponse]);

    await expect(
      client.workflowInvocations.retrieve('inv-1').waitForTaskOutput({ timeout: 5000 }),
    ).rejects.toThrow(TaskFailedError);
  });

  test('waitForTaskOutput throws TaskFailedError on CANCELLED', async () => {
    mockRetrieveSequence([cancelledResponse]);

    await expect(
      client.workflowInvocations.retrieve('inv-1').waitForTaskOutput({ timeout: 5000 }),
    ).rejects.toThrow(TaskFailedError);
  });

  test('waitForTaskOutput polls until SUCCEEDED', async () => {
    const spy = mockRetrieveSequence([pendingResponse, pendingResponse, succeededResponse]);

    const resultPromise = client.workflowInvocations.retrieve('inv-1').waitForTaskOutput({ timeout: 60000 });
    await jest.advanceTimersByTimeAsync(30000);
    const result = await resultPromise;

    expect(result.status).toBe('SUCCEEDED');
    expect(spy).toHaveBeenCalledTimes(3);
  });

  test('waitForTaskOutput throws TaskTimedOutError on timeout', async () => {
    mockRetrieveSequence([pendingResponse]);

    const resultPromise = client.workflowInvocations.retrieve('inv-1').waitForTaskOutput({ timeout: 0 });
    const expectation = expect(resultPromise).rejects.toThrow(TaskTimedOutError);
    await jest.advanceTimersByTimeAsync(10000);
    await expectation;
  });
});
