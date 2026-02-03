// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class VideoToVideo extends APIResource {
  /**
   * This endpoint will start a new task to generate a video from a video.
   *
   * @example
   * ```ts
   * const videoToVideo = await client.videoToVideo.create({
   *   model: 'gen4_aleph',
   *   promptText: 'x',
   *   videoUri: 'https://example.com/video.mp4',
   * });
   * ```
   */
  create(
    body: VideoToVideoCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VideoToVideoCreateResponse> {
    return wrapAsWaitableResource<VideoToVideoCreateResponse>(this._client)(
      this._client.post('/v1/video_to_video', { body, ...options }),
    );
  }
}

export interface VideoToVideoCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export interface VideoToVideoCreateParams {
  model: 'gen4_aleph';

  /**
   * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
   * should describe in detail what should appear in the output.
   */
  promptText: string;

  /**
   * A HTTPS URL.
   */
  videoUri: string;

  /**
   * Settings that affect the behavior of the content moderation system.
   */
  contentModeration?: VideoToVideoCreateParams.ContentModeration;

  /**
   * @deprecated Deprecated. This field is ignored. The resolution of the output
   * video is determined by the input video.
   */
  ratio?: '1280:720' | '720:1280' | '1104:832' | '960:960' | '832:1104' | '1584:672' | '848:480' | '640:480';

  /**
   * An array of references. Currently up to one reference is supported. See
   * [our docs](/assets/inputs#images) on image inputs for more information.
   */
  references?: Array<VideoToVideoCreateParams.Reference>;

  /**
   * If unspecified, a random number is chosen. Varying the seed integer is a way to
   * get different results for the same other request parameters. Using the same seed
   * integer for an identical request will produce similar results.
   */
  seed?: number;
}

export namespace VideoToVideoCreateParams {
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

  /**
   * Passing an image reference allows the model to emulate the style or content of
   * the reference in the output.
   */
  export interface Reference {
    type: 'image';

    /**
     * A HTTPS URL.
     */
    uri: string;
  }
}

export declare namespace VideoToVideo {
  export {
    type VideoToVideoCreateResponse as VideoToVideoCreateResponse,
    type VideoToVideoCreateParams as VideoToVideoCreateParams,
  };
}
