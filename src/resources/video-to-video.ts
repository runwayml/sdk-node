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
   *   model: 'aleph2',
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

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: VideoToVideoCreateResponse.EstimatedCost;
}

export namespace VideoToVideoCreateResponse {
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

export type VideoToVideoCreateParams =
  | VideoToVideoCreateParams.Variant0
  | VideoToVideoCreateParams.Hailuo3
  | VideoToVideoCreateParams.Seedance2
  | VideoToVideoCreateParams.Seedance2Fast
  | VideoToVideoCreateParams.Seedance2Mini
  | VideoToVideoCreateParams.GeminiOmniFlash
  | VideoToVideoCreateParams.Seedance2_5;

export declare namespace VideoToVideoCreateParams {
  export interface Variant0 {
    model: 'aleph2';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Variant0.ContentModeration;

    /**
     * Timed guidance images placed at specific points in the input video. Up to 5
     * keyframes.
     */
    keyframes?: Array<Variant0.UnionMember0 | Variant0.UnionMember1>;

    /**
     * The container/encoding of the output. `mp4` (default) returns an H.264 .mp4.
     * `prores` returns a ProRes .mov. `png_sequence` returns a .zip of PNG frames.
     * `sdr_rec709_10bit` returns a 10-bit Rec.709 HEVC .mp4 for SDR grading pipelines.
     * Non-mp4 formats incur an additional surcharge: 5 credits per second for `prores`
     * and `png_sequence`, and 20 credits per second for `sdr_rec709_10bit` — 40
     * credits per second when the output is larger than 4 megapixels (roughly 4K).
     */
    outputFormat?: 'mp4' | 'prores' | 'png_sequence' | 'sdr_rec709_10bit';

    /**
     * A non-empty and optional string describing what should appear in the output.
     */
    promptText?: string;

    /**
     * The ProRes profile to use. Only valid when `outputFormat` is `prores`. Defaults
     * to `4444`.
     */
    proresProfile?: '422' | '4444' | '422 Proxy' | '422 LT' | '422 HQ' | '4444 XQ';

    /**
     * @deprecated
     */
    ratio?: string;

    /**
     * If unspecified, a random number is chosen. Varying the seed integer is a way to
     * get different results for the same other request parameters. Using the same seed
     * integer for an identical request will produce similar results.
     */
    seed?: number;

    /**
     * Target aspect ratio for expand/outpaint. Letterboxes the input video and
     * keyframes before generation.
     */
    targetAspectRatio?: '16:9' | '4:3' | '3:2' | '1:1' | '2:3' | '3:4' | '9:16' | '21:9';
  }

  export namespace Variant0 {
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
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * Optional edit window. When set, the edit applies only to this time range and the
       * keyframe timestamp must fall within it. All keyframes must either set a range or
       * none may.
       */
      range?: UnionMember0.Range;
    }

    export namespace UnionMember0 {
      /**
       * Optional edit window. When set, the edit applies only to this time range and the
       * keyframe timestamp must fall within it. All keyframes must either set a range or
       * none may.
       */
      export interface Range {
        /**
         * End of the edit window (exclusive) in whole seconds from the start of the input
         * video.
         */
        end_seconds: number;

        /**
         * Start of the edit window in whole seconds from the start of the input video.
         */
        start_seconds: number;
      }
    }

    export interface UnionMember1 {
      /**
       * Position as a fraction [0.0, 1.0] of the input video duration when this guidance
       * image should apply.
       */
      at: number;

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * Optional edit window. When set, the edit applies only to this time range and the
       * keyframe timestamp must fall within it. All keyframes must either set a range or
       * none may.
       */
      range?: UnionMember1.Range;
    }

    export namespace UnionMember1 {
      /**
       * Optional edit window. When set, the edit applies only to this time range and the
       * keyframe timestamp must fall within it. All keyframes must either set a range or
       * none may.
       */
      export interface Range {
        /**
         * End of the edit window (exclusive) in whole seconds from the start of the input
         * video.
         */
        end_seconds: number;

        /**
         * Start of the edit window in whole seconds from the start of the input video.
         */
        start_seconds: number;
      }
    }
  }

  export interface Hailuo3 {
    model: 'hailuo3';

    /**
     * A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * The aspect ratio of the output video. Use adaptive only when image or video
     * references are provided; text-only requests require a concrete ratio.
     */
    ratio?: 'adaptive' | '21:9' | '16:9' | '4:3' | '1:1' | '3:4' | '9:16';

    /**
     * An optional array of audio references. Audio references require a text prompt,
     * and the total combined duration must not exceed 15 seconds.
     */
    referenceAudio?: Array<Hailuo3.ReferenceAudio>;

    /**
     * An optional array of image references (up to 9). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Hailuo3.Reference>;

    /**
     * An optional array of video references. The combined duration across all video
     * references must not exceed 15 seconds. See [our docs](/assets/inputs#videos) on
     * video inputs for more information.
     */
    referenceVideos?: Array<Hailuo3.ReferenceVideo>;

    /**
     * The output resolution. MiniMax H3 supports 768P and 2K.
     */
    resolution?: '2K' | '768P';
  }

  export namespace Hailuo3 {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 16MB) containing an encoded audio. See
       * [our docs](/assets/inputs#audio) on audio inputs for more information.
       */
      uri: string;
    }

    export interface Reference {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }

    /**
     * A video reference allows the model to use the video as additional context for
     * the output.
     */
    export interface ReferenceVideo {
      type: 'video';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedance2 {
    model: 'seedance2';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * An optional text prompt up to 3500 characters describing what should appear in
     * the output.
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
      | '1080:1920'
      | '3840:1646'
      | '3840:2160'
      | '3840:2880'
      | '3840:3840'
      | '2880:3840'
      | '2160:3840';

    /**
     * An optional array of audio references. The total combined duration must not
     * exceed 15 seconds.
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
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 16MB) containing an encoded audio. See
       * [our docs](/assets/inputs#audio) on audio inputs for more information.
       */
      uri: string;
    }

    export interface Reference {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }

    /**
     * A video reference allows the model to use the video as additional context for
     * the output.
     */
    export interface ReferenceVideo {
      type: 'video';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedance2Fast {
    model: 'seedance2_fast';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * An optional text prompt up to 3500 characters describing what should appear in
     * the output.
     */
    promptText?: string;

    /**
     * The resolution of the output video. Seedance 2.0 Fast supports 480p and 720p
     * only.
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
      | '720:1280';

    /**
     * An optional array of audio references. The total combined duration must not
     * exceed 15 seconds.
     */
    referenceAudio?: Array<Seedance2Fast.ReferenceAudio>;

    /**
     * An optional array of image references (up to 9). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Seedance2Fast.Reference>;

    /**
     * An optional array of video references. The combined duration across all video
     * references must not exceed 15 seconds. See [our docs](/assets/inputs#videos) on
     * video inputs for more information.
     */
    referenceVideos?: Array<Seedance2Fast.ReferenceVideo>;
  }

  export namespace Seedance2Fast {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 16MB) containing an encoded audio. See
       * [our docs](/assets/inputs#audio) on audio inputs for more information.
       */
      uri: string;
    }

    export interface Reference {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }

    /**
     * A video reference allows the model to use the video as additional context for
     * the output.
     */
    export interface ReferenceVideo {
      type: 'video';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedance2Mini {
    model: 'seedance2_mini';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * An optional text prompt up to 3500 characters describing what should appear in
     * the output.
     */
    promptText?: string;

    /**
     * The resolution of the output video. Seedance 2.0 Mini supports 480p and 720p
     * only.
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
      | '720:1280';

    /**
     * An optional array of audio references. The total combined duration must not
     * exceed 15 seconds.
     */
    referenceAudio?: Array<Seedance2Mini.ReferenceAudio>;

    /**
     * An optional array of image references (up to 9). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Seedance2Mini.Reference>;

    /**
     * An optional array of video references. The combined duration across all video
     * references must not exceed 15 seconds. See [our docs](/assets/inputs#videos) on
     * video inputs for more information.
     */
    referenceVideos?: Array<Seedance2Mini.ReferenceVideo>;
  }

  export namespace Seedance2Mini {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 16MB) containing an encoded audio. See
       * [our docs](/assets/inputs#audio) on audio inputs for more information.
       */
      uri: string;
    }

    export interface Reference {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }

    /**
     * A video reference allows the model to use the video as additional context for
     * the output.
     */
    export interface ReferenceVideo {
      type: 'video';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface GeminiOmniFlash {
    model: 'gemini_omni_flash';

    /**
     * A non-empty instruction describing the edit to apply.
     */
    promptText: string;

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

    /**
     * An optional array of image references to guide the edit.
     */
    references?: Array<GeminiOmniFlash.Reference>;
  }

  export namespace GeminiOmniFlash {
    export interface Reference {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedance2_5 {
    model: 'seedance2_5';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video. Defaults to 5.
     */
    duration?: number;

    /**
     * How the input video is used. `reference` (the default) generates a new video
     * conditioned on the input video and accepts `duration` and `ratio`. `extend`
     * continues the input video, requires `promptText`, and matches the input aspect
     * ratio, so `ratio` may not be provided.
     */
    mode?: 'reference' | 'extend';

    /**
     * An optional text prompt up to 15000 characters describing what should appear in
     * the output.
     */
    promptText?: string;

    /**
     * The resolution of the output video. Seedance 2.5 supports 480p, 720p, and 1080p.
     */
    ratio?:
      | '992:432'
      | '854:480'
      | '752:560'
      | '640:640'
      | '560:752'
      | '480:854'
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
     * An optional array of audio references. The total combined duration must be less
     * than 30 seconds.
     */
    referenceAudio?: Array<Seedance2_5.ReferenceAudio>;

    /**
     * An optional array of image references (up to 30). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Seedance2_5.Reference>;

    /**
     * An optional array of video references. The combined duration across all video
     * references must not exceed 30 seconds. See [our docs](/assets/inputs#videos) on
     * video inputs for more information.
     */
    referenceVideos?: Array<Seedance2_5.ReferenceVideo>;
  }

  export namespace Seedance2_5 {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 16MB) containing an encoded audio. See
       * [our docs](/assets/inputs#audio) on audio inputs for more information.
       */
      uri: string;
    }

    export interface Reference {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }

    /**
     * A video reference allows the model to use the video as additional context for
     * the output.
     */
    export interface ReferenceVideo {
      type: 'video';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
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
