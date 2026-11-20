// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class ImageUpscale extends APIResource {
  /**
   * Upscale an image with Magnific precision upscaling. Each input dimension must be
   * between 300px and 8000px. Output width and height are the input dimensions
   * multiplied by `scaleFactor` (default 2). Output width times height cannot exceed
   * 25,300,000 pixels (~25.3 million).
   *
   * @example
   * ```ts
   * const imageUpscale = await client.imageUpscale.create({
   *   imageUri: 'https://example.com/image.jpg',
   *   model: 'magnific_precision_upscaler_v2',
   * });
   * ```
   */
  create(
    params: ImageUpscaleCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<ImageUpscaleCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<ImageUpscaleCreateResponse>(this._client)(
      this._client.post('/v1/image_upscale', {
        body,
        ...options,
        headers: buildHeaders([
          { ...(xRunwayTags != null ? { 'X-Runway-Tags': xRunwayTags } : undefined) },
          options?.headers,
        ]),
      }),
    );
  }
}

export interface ImageUpscaleCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: ImageUpscaleCreateResponse.EstimatedCost;
}

export namespace ImageUpscaleCreateResponse {
  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  export interface EstimatedCost {
    /**
     * Estimated cost of the generation in credits.
     */
    credits: number;
  }
}

export interface ImageUpscaleCreateParams {
  /**
   * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
   * [our docs](/assets/inputs#images) on image inputs for more information.
   */
  imageUri: string;

  /**
   * Body param
   */
  model: 'magnific_precision_upscaler_v2';

  /**
   * Body param: Optimization preset: `sublime` (illustration), `photo`
   * (photographic), or `photo_denoiser` (noisy photos).
   */
  flavor?: 'sublime' | 'photo' | 'photo_denoiser';

  /**
   * Body param: Multiplies each input dimension to produce output width and height.
   * Defaults to 2.
   */
  scaleFactor?: 2 | 4 | 8 | 16;

  /**
   * Body param: Sharpness intensity from 0 (none) to 100.
   */
  sharpen?: number;

  /**
   * Body param: Grain and texture enhancement from 0 to 100.
   */
  smartGrain?: number;

  /**
   * Body param: Fine detail enhancement from 0 to 100.
   */
  ultraDetail?: number;

  /**
   * Header param: Comma-separated tags to attribute this generation's credit usage
   * to, so you can filter and break down usage with `POST /v1/organization/usage`.
   * Each tag is a plain label (`campaign-q4`) or a `key:value` pair (`team:growth`),
   * split at the first colon. Tags are case-insensitive and stored lowercase. Up to
   * 10 tags, each up to 64 characters of letters, numbers, and `_ - . / :`. An
   * invalid tag rejects the request with a 400. Workflow runs pass their tags on to
   * every generation they start.
   *
   * **Tags appear in usage reports. Do not put end-user PII (like names or emails)
   * in them.**
   */
  'X-Runway-Tags'?: string;
}

export declare namespace ImageUpscale {
  export {
    type ImageUpscaleCreateResponse as ImageUpscaleCreateResponse,
    type ImageUpscaleCreateParams as ImageUpscaleCreateParams,
  };
}
