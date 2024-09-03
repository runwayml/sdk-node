// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ImageToVideoAPI from './image-to-video';

export class ImageToVideo extends APIResource {
  /**
   * This endpoint will start a new task to generate a video from an image prompt.
   */
  create(
    body: ImageToVideoCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageToVideoCreateResponse> {
    return this._client.post('/v1/image_to_video', { body, ...options });
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
   * The model variant to use.
   */
  model: 'gen3a_turbo';

  /**
   * A URL pointing to an image. See documentation on input URLs.
   */
  promptImage: string;

  /**
   * A non-empty string up to 512 UTF-16 code points in length (that is,
   * `promptText.length === 512` in JavaScript). This should describe in detail what
   * should appear in the output.
   */
  promptText?: string;

  /**
   * If unspecified, a random number is chosen. Varying the seed integer is a way to
   * get different results for the same other request parameters. Using the same seed
   * integer for an identical request will produce similar results.
   */
  seed?: number;

  /**
   * A boolean indicating whether or not the output video will contain a Runway
   * watermark.
   */
  watermark?: boolean;
}

export namespace ImageToVideo {
  export import ImageToVideoCreateResponse = ImageToVideoAPI.ImageToVideoCreateResponse;
  export import ImageToVideoCreateParams = ImageToVideoAPI.ImageToVideoCreateParams;
}
