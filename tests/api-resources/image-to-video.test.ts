// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Runwayml from 'runwayml';
import { Response } from 'node-fetch';

const client = new Runwayml({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource imageToVideo', () => {
  test('create: only required params', async () => {
    const responsePromise = client.imageToVideo.create({
      model: 'gen3a_turbo',
      promptImage: 'https://example.com',
      'X-Runway-On-Behalf-Of': 'mfsBGp24IE',
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

  test('create: required and optional params', async () => {
    const response = await client.imageToVideo.create({
      model: 'gen3a_turbo',
      promptImage: 'https://example.com',
      'X-Runway-On-Behalf-Of': 'mfsBGp24IE',
      'X-Runway-Version': '2023-09-06',
      promptText: 'promptText',
      seed: 0,
      watermark: true,
    });
  });
});
