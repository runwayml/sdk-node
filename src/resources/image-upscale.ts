// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
    body: ImageUpscaleCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<ImageUpscaleCreateResponse> {
    return wrapAsWaitableResource<ImageUpscaleCreateResponse>(this._client)(
      this._client.post('/v1/image_upscale', { body, ...options }),
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
   * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
   * [our docs](/assets/inputs#images) on image inputs for more information.
   */
  imageUri: string;

  model: 'magnific_precision_upscaler_v2';

  /**
   * Optimization preset: `sublime` (illustration), `photo` (photographic), or
   * `photo_denoiser` (noisy photos).
   */
  flavor?: 'sublime' | 'photo' | 'photo_denoiser';

  /**
   * Multiplies each input dimension to produce output width and height. Defaults
   * to 2.
   */
  scaleFactor?: 2 | 4 | 8 | 16;

  /**
   * Sharpness intensity from 0 (none) to 100.
   */
  sharpen?: number;

  /**
   * Grain and texture enhancement from 0 to 100.
   */
  smartGrain?: number;

  /**
   * Fine detail enhancement from 0 to 100.
   */
  ultraDetail?: number;
}

export declare namespace ImageUpscale {
  export {
    type ImageUpscaleCreateResponse as ImageUpscaleCreateResponse,
    type ImageUpscaleCreateParams as ImageUpscaleCreateParams,
  };
}
