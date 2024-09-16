// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';
import { Response } from 'node-fetch';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource imageToVideo', () => {
  test('create: only required params', async () => {
    const responsePromise = client.imageToVideo.create({
      model: 'gen3a_turbo',
      promptImage: 'https://example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.imageToVideo.create({
      model: 'gen3a_turbo',
      promptImage: 'https://example.com',
      promptText: 'promptText',
      seed: 0,
      watermark: true,
    });
  });
});
