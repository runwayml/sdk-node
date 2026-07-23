// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource image', () => {
  test('create: only required params', async () => {
    const responsePromise = client.generate.image.create({
      configId: 'n6_',
      input: { promptText: 'x' },
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
    const response = await client.generate.image.create({
      configId: 'n6_',
      input: {
        promptText: 'x',
        aspectRatio: '16:9',
        contentModeration: { publicFigureThreshold: 'auto' },
        outputCount: 1,
        referenceImages: [{ uri: 'https://example.com/file' }],
        resolution: '1k',
        seed: 0,
      },
    });
  });
});
