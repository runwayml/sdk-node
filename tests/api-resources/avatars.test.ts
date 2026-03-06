// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource avatars', () => {
  test('create: only required params', async () => {
    const responsePromise = client.avatars.create({
      name: 'x',
      personality:
        'You are a helpful support agent assisting users with their account questions. Be friendly, patient, and provide clear step-by-step guidance.',
      referenceImage: 'https://example.com/reference.jpg',
      voice: { presetId: 'adrian', type: 'runway-live-preset' },
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
    const response = await client.avatars.create({
      name: 'x',
      personality:
        'You are a helpful support agent assisting users with their account questions. Be friendly, patient, and provide clear step-by-step guidance.',
      referenceImage: 'https://example.com/reference.jpg',
      voice: { presetId: 'adrian', type: 'runway-live-preset' },
      documentIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      imageProcessing: 'optimize',
      startScript: 'Hello! How can I help you today?',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.avatars.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.avatars.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.avatars.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          documentIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          imageProcessing: 'optimize',
          name: 'x',
          personality:
            'You are a helpful support agent assisting users with their account questions. Be friendly, patient, and provide clear step-by-step guidance.',
          referenceImage: 'https://example.com/reference.jpg',
          startScript: 'Hello! How can I help you today?',
          voice: { presetId: 'adrian', type: 'runway-live-preset' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RunwayML.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.avatars.list({ limit: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.avatars.list({ limit: 1, cursor: 'x' });
  });

  test('delete', async () => {
    const responsePromise = client.avatars.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
