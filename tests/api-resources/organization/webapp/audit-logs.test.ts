// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auditLogs', () => {
  test('retrieve', async () => {
    const responsePromise = client.organization.webapp.auditLogs.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organization.webapp.auditLogs.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RunwayML.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.organization.webapp.auditLogs.list({ limit: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.organization.webapp.auditLogs.list({
      limit: 1,
      actions: 'actions',
      actorEmails: 'actorEmails',
      cursor: 'x',
      from: '2019-12-27T18:11:19.117Z',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      to: '2019-12-27T18:11:19.117Z',
      workspaceIds: 'workspaceIds',
    });
  });
});
