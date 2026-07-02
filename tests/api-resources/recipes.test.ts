// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recipes', () => {
  test('marketingStockImage: only required params', async () => {
    const responsePromise = client.recipes.marketingStockImage({ prompt: 'x', version: '2026-06' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('marketingStockImage: required and optional params', async () => {
    const response = await client.recipes.marketingStockImage({
      prompt: 'x',
      version: '2026-06',
      outputCount: 1,
      quality: 'low',
      referenceImage: { uri: 'https://example.com/file' },
    });
  });

  test('multiShotVideo: only required params', async () => {
    const responsePromise = client.recipes.multiShotVideo({
      mode: 'auto',
      prompt: 'x',
      version: '2026-06',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('multiShotVideo: required and optional params', async () => {
    const response = await client.recipes.multiShotVideo({
      mode: 'auto',
      prompt: 'x',
      version: '2026-06',
      audio: true,
      duration: 5,
      firstFrame: { uri: 'https://example.com/file' },
      ratio: '1280:720',
    });
  });

  test('productAd: only required params', async () => {
    const responsePromise = client.recipes.productAd({
      productImages: [{ uri: 'https://example.com/file' }],
      version: '2026-06',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('productAd: required and optional params', async () => {
    const response = await client.recipes.productAd({
      productImages: [{ uri: 'https://example.com/file' }],
      version: '2026-06',
      audio: true,
      duration: 4,
      productInfo: 'productInfo',
      ratio: '1280:720',
      styleImages: [{ uri: 'https://example.com/file' }],
      userConcept: 'userConcept',
    });
  });

  test('productCampaignImage: only required params', async () => {
    const responsePromise = client.recipes.productCampaignImage({
      image: { uri: 'https://example.com/file' },
      prompt: 'x',
      version: '2026-06',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('productCampaignImage: required and optional params', async () => {
    const response = await client.recipes.productCampaignImage({
      image: { uri: 'https://example.com/file' },
      prompt: 'x',
      version: '2026-06',
    });
  });

  test('productSwap: only required params', async () => {
    const responsePromise = client.recipes.productSwap({
      newProductImages: [{ uri: 'https://example.com/file' }],
      originalProductImage: { uri: 'https://example.com/file' },
      referenceVideo: { uri: 'https://example.com/file' },
      version: '2026-06',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('productSwap: required and optional params', async () => {
    const response = await client.recipes.productSwap({
      newProductImages: [{ uri: 'https://example.com/file', view: 'front' }],
      originalProductImage: { uri: 'https://example.com/file' },
      referenceVideo: { uri: 'https://example.com/file' },
      version: '2026-06',
      audio: true,
      duration: 4,
      resolution: '720p',
    });
  });

  test('productUgc: only required params', async () => {
    const responsePromise = client.recipes.productUgc({
      characterImage: { uri: 'https://example.com/file' },
      productImage: { uri: 'https://example.com/file' },
      version: '2026-06',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('productUgc: required and optional params', async () => {
    const response = await client.recipes.productUgc({
      characterImage: { uri: 'https://example.com/file' },
      productImage: { uri: 'https://example.com/file' },
      version: '2026-06',
      audio: true,
      duration: 4,
      productInfo: 'productInfo',
      ratio: '720:1280',
      userConcept: 'userConcept',
    });
  });
});
