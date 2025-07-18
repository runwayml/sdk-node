// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';
import { Response } from 'node-fetch';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organization', () => {
  test('retrieve', async () => {
    const responsePromise = client.organization.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.organization.retrieve({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      RunwayML.NotFoundError,
    );
  });

  test('retrieveUsage', async () => {
    const responsePromise = client.organization.retrieveUsage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveUsage: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.organization.retrieveUsage({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      RunwayML.NotFoundError,
    );
  });

  test('retrieveUsage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organization.retrieveUsage(
        { beforeDate: '2019-12-27', startDate: '2019-12-27' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RunwayML.NotFoundError);
  });
});
