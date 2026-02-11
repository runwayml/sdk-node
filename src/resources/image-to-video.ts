// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class ImageToVideo extends APIResource {
  /**
   * This endpoint will start a new task to generate a video from an image.
   *
   * @example
   * ```ts
   * const imageToVideo = await client.imageToVideo.create({
   *   model: 'gen3a_turbo',
   *   promptImage: 'https://example.com/file',
   *   promptText: 'A beautiful sunset over a calm ocean.',
   * });
   * ```
   */
  create(
    body: ImageToVideoCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<ImageToVideoCreateResponse> {
    return wrapAsWaitableResource<ImageToVideoCreateResponse>(this._client)(
      this._client.post('/v1/image_to_video', { body, ...options }),
    );
  }
}

export interface ImageToVideoCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export type ImageToVideoCreateParams =
  | ImageToVideoCreateParams.Gen4_5
  | ImageToVideoCreateParams.Gen4Turbo
  | ImageToVideoCreateParams.Veo3_1
  | ImageToVideoCreateParams.Gen3aTurbo
  | ImageToVideoCreateParams.Veo3_1Fast
  | ImageToVideoCreateParams.Veo3;

export declare namespace ImageToVideoCreateParams {
  export interface Gen4_5 {
    /**
     * The number of seconds of duration for the output video. Must be an integer from
     * 2 to 10.
     */
    duration: number;

    model: 'gen4.5';

    /**
     * A HTTPS URL.
     */
    promptImage: string | Array<Gen4_5.PromptImage>;

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280' | '1104:832' | '960:960' | '832:1104' | '1584:672' | '672:1584';

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Gen4_5.ContentModeration;

    /**
     * If unspecified, a random number is chosen. Varying the seed integer is a way to
     * get different results for the same other request parameters. Using the same seed
     * integer for an identical request will produce similar results.
     */
    seed?: number;
  }

  export namespace Gen4_5 {
    export interface PromptImage {
      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame of the video.
       */
      position: 'first';

      /**
       * A HTTPS URL.
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

  export interface Gen4Turbo {
    model: 'gen4_turbo';

    /**
     * A HTTPS URL.
     */
    promptImage: string | Array<Gen4Turbo.PromptImage>;

    /**
     * The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280' | '1104:832' | '832:1104' | '960:960' | '1584:672';

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Gen4Turbo.ContentModeration;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

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

  export namespace Gen4Turbo {
    export interface PromptImage {
      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame of the video.
       */
      position: 'first';

      /**
       * A HTTPS URL.
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

  export interface Veo3_1 {
    model: 'veo3.1';

    /**
     * You may specify an image to use as the first frame of the output video, or an
     * array with a first frame and optionally a last frame. This model does not
     * support generating with only a last frame.
     */
    promptImage: string | Array<Veo3_1.PromptImage>;

    /**
     * The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280' | '1080:1920' | '1920:1080';

    /**
     * Whether to generate audio for the video. Audio inclusion affects pricing.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: 4 | 6 | 8;

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText?: string;
  }

  export namespace Veo3_1 {
    export interface PromptImage {
      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame of the video, "last" will use the image as the last frame of the
       * video.
       */
      position: 'first' | 'last';

      /**
       * A HTTPS URL.
       */
      uri: string;
    }
  }

  export interface Gen3aTurbo {
    model: 'gen3a_turbo';

    /**
     * A HTTPS URL.
     */
    promptImage: string | Array<Gen3aTurbo.PromptImage>;

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Gen3aTurbo.ContentModeration;

    /**
     * The duration of the output video in seconds.
     */
    duration?: 5 | 10;

    /**
     * The resolution of the output video.
     */
    ratio?: '768:1280' | '1280:768';

    /**
     * If unspecified, a random number is chosen. Varying the seed integer is a way to
     * get different results for the same other request parameters. Using the same seed
     * integer for an identical request will produce similar results.
     */
    seed?: number;
  }

  export namespace Gen3aTurbo {
    export interface PromptImage {
      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame of the video, "last" will use the image as the last frame of the
       * video.
       */
      position: 'first' | 'last';

      /**
       * A HTTPS URL.
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

  export interface Veo3_1Fast {
    model: 'veo3.1_fast';

    /**
     * You may specify an image to use as the first frame of the output video, or an
     * array with a first frame and optionally a last frame. This model does not
     * support generating with only a last frame.
     */
    promptImage: string | Array<Veo3_1Fast.PromptImage>;

    /**
     * The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280' | '1080:1920' | '1920:1080';

    /**
     * Whether to generate audio for the video. Audio inclusion affects pricing.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: 4 | 6 | 8;

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText?: string;
  }

  export namespace Veo3_1Fast {
    export interface PromptImage {
      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame of the video, "last" will use the image as the last frame of the
       * video.
       */
      position: 'first' | 'last';

      /**
       * A HTTPS URL.
       */
      uri: string;
    }
  }

  export interface Veo3 {
    /**
     * The number of seconds of duration for the output video.
     */
    duration: 8;

    model: 'veo3';

    /**
     * A HTTPS URL.
     */
    promptImage: string | Array<Veo3.PromptImage>;

    /**
     * The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280' | '1080:1920' | '1920:1080';

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText?: string;
  }

  export namespace Veo3 {
    export interface PromptImage {
      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame of the video.
       */
      position: 'first';

      /**
       * A HTTPS URL.
       */
      uri: string;
    }
  }
}

export declare namespace ImageToVideo {
  export {
    type ImageToVideoCreateResponse as ImageToVideoCreateResponse,
    type ImageToVideoCreateParams as ImageToVideoCreateParams,
  };
}
