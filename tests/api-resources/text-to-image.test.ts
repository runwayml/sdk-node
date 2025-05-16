// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';
import { Response } from 'node-fetch';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource textToImage', () => {
  test('create: only required params', async () => {
    const responsePromise = client.textToImage.create({
      model: 'gen4_image',
      promptText: 'promptText',
      ratio: '1920:1080',
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
    const response = await client.textToImage.create({
      model: 'gen4_image',
      promptText: 'promptText',
      ratio: '1920:1080',
      contentModeration: { publicFigureThreshold: 'auto' },
      referenceImages: [{ uri: 'https://example.com', tag: 'tag' }],
      seed: 0,
    });
  });
});
