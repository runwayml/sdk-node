// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource textToVideo', () => {
  test('create: only required params', async () => {
    const responsePromise = client.textToVideo.create({
      model: 'veo3.1',
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
    const response = await client.textToVideo.create({
      model: 'veo3.1',
      promptText: 'x',
      ratio: '1280:720',
      duration: 4,
    });
  });
});
