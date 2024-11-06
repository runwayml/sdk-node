// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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
   * The ID of the newly created task. Use this ID to query the task status and
   * retrieve the generated video.
   */
  id: string;
}

export interface ImageToVideoCreateParams {
  /**
   * The model variant to use.
   */
  model: 'gen3a_turbo';

  /**
   * A HTTPS URL or data URI containing an encoded image to be used as the first
   * frame of the generated video. See [our docs](/assets/inputs#images) on image
   * inputs for more information.
   */
  promptImage: string | Array<ImageToVideoCreateParams.PromptImage>;

  /**
   * The number of seconds of duration for the output video.
   */
  duration?: 5 | 10;

  promptText?: string;

  ratio?: '1280:768' | '768:1280';

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

export namespace ImageToVideoCreateParams {
  export interface PromptImage {
    /**
     * The position of the image in the output video. "first" will use the image as the
     * first frame of the video, "last" will use the image as the last frame of the
     * video.
     */
    position: 'first' | 'last';

    /**
     * A HTTPS URL or data URI containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }
}

export declare namespace ImageToVideo {
  export {
    type ImageToVideoCreateResponse as ImageToVideoCreateResponse,
    type ImageToVideoCreateParams as ImageToVideoCreateParams,
  };
}
