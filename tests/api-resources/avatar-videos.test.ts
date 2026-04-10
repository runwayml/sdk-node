// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource avatarVideos', () => {
  test('create: only required params', async () => {
    const responsePromise = client.avatarVideos.create({
      avatar: { presetId: 'game-character', type: 'runway-preset' },
      model: 'gwm1_avatars',
      speech: { audio: 'https://example.com/file', type: 'audio' },
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
    const response = await client.avatarVideos.create({
      avatar: { presetId: 'game-character', type: 'runway-preset' },
      model: 'gwm1_avatars',
      speech: { audio: 'https://example.com/file', type: 'audio' },
    });
  });
});
