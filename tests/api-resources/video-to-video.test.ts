// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource videoToVideo', () => {
  test('create: only required params', async () => {
    const responsePromise = client.videoToVideo.create({
      model: 'aleph2',
      videoUri: 'https://example.com/video.mp4',
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
    const response = await client.videoToVideo.create({
      model: 'aleph2',
      videoUri: 'https://example.com/video.mp4',
      contentModeration: { publicFigureThreshold: 'auto' },
      keyframes: [
        {
          seconds: 0,
          uri: 'https://example.com/file',
          range: { end_seconds: 1, start_seconds: 0 },
        },
      ],
      promptText: 'x',
      ratio: 'ratio',
      seed: 0,
      targetAspectRatio: '16:9',
    });
  });
});
