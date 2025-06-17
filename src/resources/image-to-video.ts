// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class ImageToVideo extends APIResource {
  /**
   * This endpoint will start a new task to generate a video from an image prompt.
   */
  create(
    body: ImageToVideoCreateParams,
    options?: Core.RequestOptions,
  ): APIPromiseWithAwaitableTask<ImageToVideoCreateResponse> {
    return wrapAsWaitableResource<ImageToVideoCreateResponse>(this._client)(
      this._client.post('/v1/image_to_video', { body, ...options }),
    );
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
  model: 'gen3a_turbo' | 'gen4_turbo';

  /**
   * A HTTPS URL or data URI containing an encoded image to be used as the first
   * frame of the generated video. See [our docs](/assets/inputs#images) on image
   * inputs for more information.
   */
  promptImage: string | Array<ImageToVideoCreateParams.PromptImage>;

  /**
   * The resolution of the output video.
   *
   * `gen4_turbo` supports the following values:
   *
   * - `1280:720`
   * - `720:1280`
   * - `1104:832`
   * - `832:1104`
   * - `960:960`
   * - `1584:672`
   *
   * `gen3a_turbo` supports the following values:
   *
   * - `1280:768`
   * - `768:1280`
   */
  ratio: '1280:720' | '720:1280' | '1104:832' | '832:1104' | '960:960' | '1584:672' | '1280:768' | '768:1280';

  /**
   * Settings that affect the behavior of the content moderation system.
   */
  contentModeration?: ImageToVideoCreateParams.ContentModeration;

  /**
   * The number of seconds of duration for the output video.
   */
  duration?: 5 | 10;

  /**
   * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
   * should describe in detail what should appear in the output.
   */
  promptText?: string;

  /**
   * If unspecified, a random number is chosen. Varying the seed integer is a way to
   * get different results for the same other request parameters. Using the same seed
   * integer for an identical request will produce similar results.
   */
  seed?: number;
}

export namespace ImageToVideoCreateParams {
  export interface PromptImage {
    /**
     * The position of the image in the output video. "first" will use the image as the
     * first frame of the video, "last" will use the image as the last frame of the
     * video.
     *
     * "last" is currently supported for `gen3a_turbo` only.
     */
    position: 'first' | 'last';

    /**
     * A HTTPS URL or data URI containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }

  /**
   * Settings that affect the behavior of the content moderation system.
   */
  export interface ContentModeration {
    /**
     * When set to `low`, the content moderation system will be less strict about
     * preventing generations that include recognizable public figures.
     */
    publicFigureThreshold?: 'auto' | 'low';
  }
}

export declare namespace ImageToVideo {
  export {
    type ImageToVideoCreateResponse as ImageToVideoCreateResponse,
    type ImageToVideoCreateParams as ImageToVideoCreateParams,
  };
}
