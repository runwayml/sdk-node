// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.routers.create({ slug: 'slug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.routers.create({
      slug: 'slug',
      description: 'description',
      name: 'x',
      settings: {
        maxCreditsPerGeneration: {
          audio: 1,
          image: 1,
          video: 1,
        },
        models: { ids: ['string'], mode: 'allow_new_except' },
        optimizeFor: 'cost',
        schemaVersion: 1,
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.routers.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.routers.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.routers.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          description: 'description',
          name: 'x',
          settings: {
            maxCreditsPerGeneration: {
              audio: 1,
              image: 1,
              video: 1,
            },
            models: { ids: ['string'], mode: 'allow_new_except' },
            optimizeFor: 'cost',
            schemaVersion: 1,
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RunwayML.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.routers.list({ limit: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.routers.list({ limit: 1, cursor: 'x' });
  });

  test('delete', async () => {
    const responsePromise = client.routers.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
