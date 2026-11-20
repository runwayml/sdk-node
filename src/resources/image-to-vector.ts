// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
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
    params: ImageToVectorCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<ImageToVectorCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<ImageToVectorCreateResponse>(this._client)(
      this._client.post('/v1/image_to_vector', {
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
   * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
   * [our docs](/assets/inputs#images) on image inputs for more information.
   */
  imageUri: string;

  /**
   * Body param
   */
  model: 'ideogram_vector';

  /**
   * Body param: Use simple for fewer shapes, or default to retain more detail.
   */
  vectorizationMode?: 'simple' | 'default';

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

export declare namespace ImageToVector {
  export {
    type ImageToVectorCreateResponse as ImageToVectorCreateResponse,
    type ImageToVectorCreateParams as ImageToVectorCreateParams,
  };
}
