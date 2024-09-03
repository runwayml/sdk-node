// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ImageToVideoAPI from './image-to-video';

export class ImageToVideo extends APIResource {
  /**
   * This endpoint will start a new task to generate a video from an image prompt.
   */
  create(
    params: ImageToVideoCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageToVideoCreateResponse> {
    const {
      'X-Runway-On-Behalf-Of': xRunwayOnBehalfOf,
      'X-Runway-Version': xRunwayVersion,
      ...body
    } = params;
    return this._client.post('/v1/image_to_video', {
      body,
      ...options,
      headers: {
        'X-Runway-On-Behalf-Of': xRunwayOnBehalfOf,
        'X-Runway-Version': xRunwayVersion.toString(),
        ...options?.headers,
      },
    });
  }
}

export interface ImageToVideoCreateResponse {
  /**
   * The ID of the newly created task.
   */
  id: string;
}

export interface ImageToVideoCreateParams {
  /**
   * Body param: The model variant to use.
   */
  model: 'gen3a_turbo';

  /**
   * Body param: A URL pointing to an image. See documentation on input URLs.
   */
  promptImage: string;

  /**
   * Header param: This string should be a stable identifier for the end user
   * interacting (indirectly) with the API. This should not be a static value used
   * for every request your organization sends—this will result in unexpected
   * behavior.
   *
   * **We expect this identifier to not contain user PII (like name or email).** Only
   * use stable, non-identifying strings. If you do not have a stable identifier
   * (like a numeric ID for the user), you can either generate a UUID per user or
   * strongly hash the stable identifier that you use in your system (like a username
   * or email).
   */
  'X-Runway-On-Behalf-Of': string;

  /**
   * Header param:
   */
  'X-Runway-Version': '2023-09-06';

  /**
   * Body param: A non-empty string up to 512 UTF-16 code points in length (that is,
   * `promptText.length === 512` in JavaScript). This should describe in detail what
   * should appear in the output.
   */
  promptText?: string;

  /**
   * Body param: If unspecified, a random number is chosen. Varying the seed integer
   * is a way to get different results for the same other request parameters. Using
   * the same seed integer for an identical request will produce similar results.
   */
  seed?: number;

  /**
   * Body param: A boolean indicating whether or not the output video will contain a
   * Runway watermark.
   */
  watermark?: boolean;
}

export namespace ImageToVideo {
  export import ImageToVideoCreateResponse = ImageToVideoAPI.ImageToVideoCreateResponse;
  export import ImageToVideoCreateParams = ImageToVideoAPI.ImageToVideoCreateParams;
}
