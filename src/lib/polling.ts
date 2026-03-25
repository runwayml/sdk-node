import type { RunwayML } from '../client';
import { APIPromise } from '../core/api-promise';
import { TaskRetrieveResponse } from '../resources/tasks';
import { WorkflowInvocationRetrieveResponse } from '../resources/workflow-invocations';

const POLL_TIME = 6000; // 6 seconds
const POLL_JITTER = 3000; // 3 seconds

export class TaskFailedError extends Error {
  taskDetails: TaskRetrieveResponse;
  constructor(taskDetails: TaskRetrieveResponse.Failed | TaskRetrieveResponse.Cancelled) {
    super('failure' in taskDetails ? taskDetails.failure : 'Task cancelled');
    this.taskDetails = taskDetails;
    this.name = 'TaskFailedError';
  }
}

export class TaskTimedOutError extends Error {
  taskDetails: TaskRetrieveResponse;
  constructor(taskDetails: TaskRetrieveResponse) {
    super('Task timed out');
    this.taskDetails = taskDetails;
    this.name = 'TaskTimedOutError';
  }
}

export interface WaitForTaskOutputOptions {
  /**
   * The maximum amount of time to wait for the task to complete in milliseconds. If not
   * specified, the default timeout is 10 minutes. Will raise a `TaskTimeoutError` if the
   * task does not complete within the timeout. Setting this to `null` will wait
   * indefinitely (disabling the timeout). Disabling the timeout is not recommended.
   * as it may cause your server to experience issues if your Runway API organization
   * reaches its concurrency limit or if Runway experiences an outage.
   */
  timeout?: number | null;

  /**
   * Passing an `AbortSignal` allows you to stop waiting for the task to complete.
   * If you are using `waitForTaskOutput` in the handler for an incoming request,
   * `waitForTaskOutput` will not stop polling if the client connection is closed.
   * Passing an `AbortSignal` safely stops polling, preventing memory leaks and
   * ensuring you do not create too many requests to the Runway API.
   */
  abortSignal?: AbortSignal;
}

export class AbortError extends Error {
  code = 22;
  constructor() {
    super('Polling aborted');
    this.name = 'AbortError';
  }
}

export class WorkflowInvocationFailedError extends Error {
  invocationDetails: WorkflowInvocationRetrieveResponse;
  constructor(
    invocationDetails:
      | WorkflowInvocationRetrieveResponse.Failed
      | WorkflowInvocationRetrieveResponse.Cancelled,
  ) {
    super('failure' in invocationDetails ? invocationDetails.failure : 'Workflow invocation cancelled');
    this.invocationDetails = invocationDetails;
    this.name = 'WorkflowInvocationFailedError';
  }
}

export class WorkflowInvocationTimedOutError extends Error {
  invocationDetails: WorkflowInvocationRetrieveResponse;
  constructor(invocationDetails: WorkflowInvocationRetrieveResponse) {
    super('Workflow invocation timed out');
    this.invocationDetails = invocationDetails;
    this.name = 'WorkflowInvocationTimedOutError';
  }
}

export type APIPromiseWithAwaitableTask<T extends { id: string }> = APIPromise<T> & {
  /**
   * When called, this will wait until the task is complete.
   *
   * If the task fails or is cancelled, a `TaskFailedError` will be thrown.
   */
  waitForTaskOutput: (options?: WaitForTaskOutputOptions) => Promise<TaskRetrieveResponse.Succeeded>;
};

export function wrapAsWaitableResource<T extends { id: string }>(client: RunwayML) {
  return (
    responsePromise: APIPromise<T>,
    skipInitialWait: boolean = false,
  ): APIPromiseWithAwaitableTask<T> => {
    return Object.defineProperty(responsePromise, 'waitForTaskOutput', {
      value: async (options?: WaitForTaskOutputOptions) => {
        const wait = () =>
          new Promise<void>((resolve) =>
            setTimeout(resolve, POLL_TIME + Math.random() * POLL_JITTER - POLL_JITTER / 2),
          );

        if (!skipInitialWait) {
          await wait();
        }

        const { timeout = 60 * 10 * 1000 } = options ?? {};
        const output = await responsePromise;
        const startTime = Date.now();
        let taskDetails: TaskRetrieveResponse;
        do {
          if (options?.abortSignal?.aborted) {
            throw new AbortError();
          }
          taskDetails = await client.tasks.retrieve(output.id);
          if (taskDetails.status === 'SUCCEEDED') {
            return taskDetails;
          }
          if (taskDetails.status === 'FAILED' || taskDetails.status === 'CANCELLED') {
            throw new TaskFailedError(taskDetails);
          }
          await wait();
          if (timeout != null && Date.now() - startTime > timeout && !options?.abortSignal?.aborted) {
            throw new TaskTimedOutError(taskDetails);
          }
        } while (['THROTTLED', 'PENDING', 'RUNNING'].includes(taskDetails.status));
        throw new TaskTimedOutError(taskDetails);
      },
      writable: false,
      enumerable: false,
      configurable: false,
    }) as APIPromise<T> & {
      waitForTaskOutput: () => Promise<TaskRetrieveResponse.Succeeded>;
    };
  };
}

export type APIPromiseWithAwaitableWorkflowInvocation<T extends { id: string }> = APIPromise<T> & {
  /**
   * When called, this will wait until the workflow invocation is complete.
   *
   * If the invocation fails or is cancelled, a `WorkflowInvocationFailedError` will be thrown.
   */
  waitForTaskOutput: (
    options?: WaitForTaskOutputOptions,
  ) => Promise<WorkflowInvocationRetrieveResponse.Succeeded>;
};

export function wrapAsWaitableWorkflowInvocation<T extends { id: string }>(client: RunwayML) {
  return (
    responsePromise: APIPromise<T>,
    skipInitialWait: boolean = false,
  ): APIPromiseWithAwaitableWorkflowInvocation<T> => {
    return Object.defineProperty(responsePromise, 'waitForTaskOutput', {
      value: async (options?: WaitForTaskOutputOptions) => {
        const wait = () =>
          new Promise<void>((resolve) =>
            setTimeout(resolve, POLL_TIME + Math.random() * POLL_JITTER - POLL_JITTER / 2),
          );

        if (!skipInitialWait) {
          await wait();
        }

        const { timeout = 60 * 10 * 1000 } = options ?? {};
        const output = await responsePromise;
        const startTime = Date.now();
        let details: WorkflowInvocationRetrieveResponse;
        do {
          if (options?.abortSignal?.aborted) {
            throw new AbortError();
          }
          details = await client.workflowInvocations.retrieve(output.id);
          if (details.status === 'SUCCEEDED') {
            return details;
          }
          if (details.status === 'FAILED' || details.status === 'CANCELLED') {
            throw new WorkflowInvocationFailedError(details);
          }
          await wait();
          if (timeout != null && Date.now() - startTime > timeout && !options?.abortSignal?.aborted) {
            throw new WorkflowInvocationTimedOutError(details);
          }
        } while (['THROTTLED', 'PENDING', 'RUNNING'].includes(details.status));
        throw new WorkflowInvocationTimedOutError(details);
      },
      writable: false,
      enumerable: false,
      configurable: false,
    }) as APIPromise<T> & {
      waitForTaskOutput: () => Promise<WorkflowInvocationRetrieveResponse.Succeeded>;
    };
  };
}
