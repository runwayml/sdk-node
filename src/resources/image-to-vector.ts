// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class ImageToVector extends APIResource {
  /**
   * Convert a source image into a scalable SVG.
   *
   * @example
   * ```ts
   * const imageToVector = await client.imageToVector.create({
   *   imageUri: 'https://example.com/image.jpg',
   *   model: 'ideogram_vector',
   * });
   * ```
   */
  create(
    body: ImageToVectorCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<ImageToVectorCreateResponse> {
    return wrapAsWaitableResource<ImageToVectorCreateResponse>(this._client)(
      this._client.post('/v1/image_to_vector', { body, ...options }),
    );
  }
}

export interface ImageToVectorCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: ImageToVectorCreateResponse.EstimatedCost;
}

export namespace ImageToVectorCreateResponse {
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

export interface ImageToVectorCreateParams {
  /**
   * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
   * [our docs](/assets/inputs#images) on image inputs for more information.
   */
  imageUri: string;

  model: 'ideogram_vector';

  /**
   * Use simple for fewer shapes, or default to retain more detail.
   */
  vectorizationMode?: 'simple' | 'default';
}

export declare namespace ImageToVector {
  export {
    type ImageToVectorCreateResponse as ImageToVectorCreateResponse,
    type ImageToVectorCreateParams as ImageToVectorCreateParams,
  };
}
