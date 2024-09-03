// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Runwayml from 'runwayml';
import { Response } from 'node-fetch';

const client = new Runwayml({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tasks', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'X-Runway-Version': '2023-09-06',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'X-Runway-Version': '2023-09-06',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.tasks.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'X-Runway-Version': '2023-09-06',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.tasks.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'X-Runway-Version': '2023-09-06',
    });
  });
});
