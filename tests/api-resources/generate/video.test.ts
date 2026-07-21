// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource video', () => {
  test('create: only required params', async () => {
    const responsePromise = client.generate.video.create({
      configId: 'n6_',
      input: {},
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
    const response = await client.generate.video.create({
      configId: 'n6_',
      input: {
        aspectRatio: '16:9',
        audio: true,
        contentModeration: { publicFigureThreshold: 'auto' },
        duration: 2,
        keyframes: [
          {
            seconds: 0,
            uri: 'https://example.com/file',
            range: { end_seconds: 1, start_seconds: 0 },
          },
        ],
        negativePrompt: 'negativePrompt',
        promptText: 'x',
        referenceAudio: [{ uri: 'https://example.com/file' }],
        referenceImages: [{ role: 'first', uri: 'https://example.com/file' }],
        referenceVideos: [{ role: 'source', uri: 'https://example.com/file' }],
        resolution: '480p',
        seed: 0,
      },
    });
  });

  test('preview: only required params', async () => {
    const responsePromise = client.generate.video.preview({
      configId: 'n6_',
      input: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
