// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource imageToVideo', () => {
  test('create: only required params', async () => {
    const responsePromise = client.imageToVideo.create({
      duration: 2,
      model: 'gen4.5',
      promptImage: 'https://example.com/file',
      promptText: 'x',
      ratio: '1280:720',
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
      duration: 2,
      model: 'gen4.5',
      promptImage: 'https://example.com/file',
      promptText: 'x',
      ratio: '1280:720',
      contentModeration: { publicFigureThreshold: 'auto' },
      seed: 0,
    });
  });
});
