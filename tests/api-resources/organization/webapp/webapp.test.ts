// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webapp', () => {
  test('listUsage: only required params', async () => {
    const responsePromise = client.organization.webapp.listUsage({
      from: '2019-12-27T18:11:19.117Z',
      limit: 1,
      to: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listUsage: required and optional params', async () => {
    const response = await client.organization.webapp.listUsage({
      from: '2019-12-27T18:11:19.117Z',
      limit: 1,
      to: '2019-12-27T18:11:19.117Z',
      cursor: 'x',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      workspaceIds: 'workspaceIds',
    });
  });
});
