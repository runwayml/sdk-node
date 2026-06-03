// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * These endpoints all kick off tasks to create generations.
 */
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
  create(body: VideoToVideoCreateParams, options?: RequestOptions): APIPromise<VideoToVideoCreateResponse> {
    return this._client.post('/v1/video_to_video', { body, ...options });
  }
}

export interface VideoToVideoCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export type VideoToVideoCreateParams =
  | VideoToVideoCreateParams.Gen4Aleph
  | VideoToVideoCreateParams.Aleph2
  | VideoToVideoCreateParams.Seedance2;

export declare namespace VideoToVideoCreateParams {
  export interface Gen4Aleph {
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
    contentModeration?: Gen4Aleph.ContentModeration;

    /**
     * @deprecated Deprecated. This field is ignored. The resolution of the output
     * video is determined by the input video.
     */
    ratio?:
      | '1280:720'
      | '720:1280'
      | '1104:832'
      | '960:960'
      | '832:1104'
      | '1584:672'
      | '848:480'
      | '640:480';

    /**
     * An array of references. Currently up to one reference is supported. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Gen4Aleph.Reference>;

    /**
     * If unspecified, a random number is chosen. Varying the seed integer is a way to
     * get different results for the same other request parameters. Using the same seed
     * integer for an identical request will produce similar results.
     */
    seed?: number;
  }

  export namespace Gen4Aleph {
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

  export interface Aleph2 {
    model: 'aleph2';

    /**
     * A non-empty string up to 1000 characters describing what should appear in the
     * output.
     */
    promptText: string;

    /**
     * A HTTPS URL.
     */
    videoUri: string;

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Aleph2.ContentModeration;

    /**
     * Timed guidance images placed at specific points in the input video. Up to 5
     * keyframes.
     */
    keyframes?: Array<Aleph2.UnionMember0 | Aleph2.UnionMember1>;

    /**
     * A list of up to 5 image keyframes for guiding the edit at specific points in the
     * video.
     */
    promptImage?: Array<Aleph2.PromptImage>;

    /**
     * If unspecified, a random number is chosen. Varying the seed integer is a way to
     * get different results for the same other request parameters. Using the same seed
     * integer for an identical request will produce similar results.
     */
    seed?: number;
  }

  export namespace Aleph2 {
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

    export interface UnionMember0 {
      /**
       * Absolute timestamp in seconds from the start of the input video when this
       * guidance image should apply.
       */
      seconds: number;

      /**
       * A HTTPS URL.
       */
      uri: string;
    }

    export interface UnionMember1 {
      /**
       * Position as a fraction [0.0, 1.0] of the input video duration when this guidance
       * image should apply.
       */
      at: number;

      /**
       * A HTTPS URL.
       */
      uri: string;
    }

    export interface PromptImage {
      /**
       * - `first` - Places the image at the start of the output video (timestamp 0).
       * - `last` - Places the image at the end of the output video (timestamp =
       *   duration).
       */
      position: 'first' | 'last' | PromptImage.TimestampPosition | PromptImage.RelativePosition;

      /**
       * A HTTPS URL.
       */
      uri: string;
    }

    export namespace PromptImage {
      export interface TimestampPosition {
        /**
         * Absolute timestamp in seconds from the start of the output video.
         */
        timestampSeconds: number;

        type: 'timestamp';
      }

      export interface RelativePosition {
        /**
         * Position as a fraction [0.0, 1.0] of the total video duration.
         */
        positionPercentage: number;

        type: 'position';
      }
    }
  }

  export interface Seedance2 {
    model: 'seedance2';

    /**
     * A HTTPS URL.
     */
    promptVideo: string;

    /**
     * Whether to generate audio for the video. Audio inclusion affects pricing.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * An optional text prompt up to 3500 characters describing what should appear in
     * the output video.
     */
    promptText?: string;

    /**
     * The resolution of the output video.
     */
    ratio?:
      | '992:432'
      | '864:496'
      | '752:560'
      | '640:640'
      | '560:752'
      | '496:864'
      | '1470:630'
      | '1280:720'
      | '1112:834'
      | '960:960'
      | '834:1112'
      | '720:1280'
      | '2206:946'
      | '1920:1080'
      | '1664:1248'
      | '1440:1440'
      | '1248:1664'
      | '1080:1920';

    /**
     * An optional array of audio references. Audio references require a text prompt,
     * and the total combined duration must not exceed 15 seconds.
     */
    referenceAudio?: Array<Seedance2.ReferenceAudio>;

    /**
     * An optional array of image references (up to 9). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Seedance2.Reference>;

    /**
     * An optional array of video references. The combined duration across all video
     * references must not exceed 15 seconds. See [our docs](/assets/inputs#videos) on
     * video inputs for more information.
     */
    referenceVideos?: Array<Seedance2.ReferenceVideo>;
  }

  export namespace Seedance2 {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL.
       */
      uri: string;
    }

    export interface Reference {
      /**
       * A HTTPS URL.
       */
      uri: string;

      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame, "last" as the last frame. Omit for a reference image.
       */
      position?: 'first' | 'last';
    }

    /**
     * A video reference allows the model to use the video as additional context for
     * the output.
     */
    export interface ReferenceVideo {
      type: 'video';

      /**
       * A HTTPS URL.
       */
      uri: string;
    }
  }
}

export declare namespace VideoToVideo {
  export {
    type VideoToVideoCreateResponse as VideoToVideoCreateResponse,
    type VideoToVideoCreateParams as VideoToVideoCreateParams,
  };
}
