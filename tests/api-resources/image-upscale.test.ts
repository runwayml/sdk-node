// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource imageUpscale', () => {
  test('create: only required params', async () => {
    const responsePromise = client.imageUpscale.create({
      imageUri: 'https://example.com/image.jpg',
      model: 'magnific_precision_upscaler_v2',
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
    const response = await client.imageUpscale.create({
      imageUri: 'https://example.com/image.jpg',
      model: 'magnific_precision_upscaler_v2',
      flavor: 'sublime',
      scaleFactor: 2,
      sharpen: 0,
      smartGrain: 0,
      ultraDetail: 0,
    });
  });
});
