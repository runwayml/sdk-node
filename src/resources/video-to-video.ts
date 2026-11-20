// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

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
  create(
    params: VideoToVideoCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VideoToVideoCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<VideoToVideoCreateResponse>(this._client)(
      this._client.post('/v1/video_to_video', {
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
  | VideoToVideoCreateParams.KlingO3_4k
  | VideoToVideoCreateParams.Hailuo3
  | VideoToVideoCreateParams.KlingO3Pro
  | VideoToVideoCreateParams.KlingO3Standard
  | VideoToVideoCreateParams.Seedance2
  | VideoToVideoCreateParams.Seedance2Fast
  | VideoToVideoCreateParams.Seedance2Mini
  | VideoToVideoCreateParams.GeminiOmniFlash
  | VideoToVideoCreateParams.GeminiOmniFlash1_1
  | VideoToVideoCreateParams.Seedance2_5
  | VideoToVideoCreateParams.Kling4
  | VideoToVideoCreateParams.GeminiOmniFlash1_2
  | VideoToVideoCreateParams.Kling4Flash
  | VideoToVideoCreateParams.Hailuo3Highspeed
  | VideoToVideoCreateParams.Hailuo3Lite
  | VideoToVideoCreateParams.Seedance2_5Flash;

export declare namespace VideoToVideoCreateParams {
  export interface Variant0 {
    /**
     * Body param
     */
    model: 'aleph2';

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

    /**
     * Body param: Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Variant0.ContentModeration;

    /**
     * Body param: Timed guidance images placed at specific points in the input video.
     * Up to 5 keyframes.
     */
    keyframes?: Array<Variant0.UnionMember0 | Variant0.UnionMember1>;

    /**
     * Body param: The container/encoding of the output. `mp4` (default) returns an
     * H.264 .mp4. `prores` returns a ProRes .mov. `png_sequence` returns a .zip of PNG
     * frames. `sdr_rec709_10bit` returns a 10-bit Rec.709 HEVC .mp4 for SDR grading
     * pipelines. Non-mp4 formats incur an additional surcharge: 5 credits per second
     * for `prores` and `png_sequence`, and 20 credits per second for
     * `sdr_rec709_10bit` — 40 credits per second when the output is larger than 4
     * megapixels — includes anything larger than 1440p, up through 4K.
     */
    outputFormat?: 'mp4' | 'prores' | 'png_sequence' | 'sdr_rec709_10bit';

    /**
     * Body param: A non-empty and optional string describing what should appear in the
     * output.
     */
    promptText?: string;

    /**
     * Body param: The ProRes profile to use. Only valid when `outputFormat` is
     * `prores`. Defaults to `4444`. Note: generated content contains no transparency —
     * the alpha channel in `4444` / `4444 XQ` outputs is present but fully opaque;
     * choose these tiers for 12-bit 4:4:4 color fidelity, not for mattes.
     */
    proresProfile?: '422' | '4444' | '422 Proxy' | '422 LT' | '422 HQ' | '4444 XQ';

    /**
     * @deprecated Body param
     */
    ratio?: string;

    /**
     * Body param: If unspecified, a random number is chosen. Varying the seed integer
     * is a way to get different results for the same other request parameters. Using
     * the same seed integer for an identical request will produce similar results.
     */
    seed?: number;

    /**
     * Body param: Target aspect ratio for expand/outpaint. Letterboxes the input video
     * and keyframes before generation.
     */
    targetAspectRatio?: '16:9' | '4:3' | '3:2' | '1:1' | '2:3' | '3:4' | '9:16' | '21:9';

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

  export interface KlingO3_4k {
    /**
     * Body param
     */
    model: 'klingO3_4k';

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param: Provider-specific settings for multishot video generation and video
     * editing.
     */
    providerSettings?: KlingO3_4k.ProviderSettings;

    /**
     * Body param: An optional array of reference images (up to 4). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: string | Array<KlingO3_4k.PromptImage>;

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

  export namespace KlingO3_4k {
    /**
     * Provider-specific settings for multishot video generation and video editing.
     */
    export interface ProviderSettings {
      /**
       * Whether to preserve the original audio when editing a video. Only applicable for
       * video-to-video. Defaults to true.
       */
      keepOriginalSound?: boolean;

      /**
       * An array of prompt segments for multishot video generation. Each segment has its
       * own prompt and duration. Total duration across all segments must be between 3
       * and 15 seconds. `promptText` is still required when `shotType` is
       * `"intelligence"`.
       */
      multiPrompt?: Array<ProviderSettings.MultiPrompt>;

      /**
       * Shot transition type for multishot videos. Defaults to "customize" when
       * multiPrompt is provided.
       */
      shotType?: 'intelligence' | 'customize';
    }

    export namespace ProviderSettings {
      export interface MultiPrompt {
        /**
         * Duration in seconds for this segment.
         */
        duration: number;

        /**
         * The text prompt for this segment.
         */
        prompt: string;
      }
    }

    export interface PromptImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame, "last" as the last frame. Omit for a reference image.
       */
      position?: 'first' | 'last';
    }
  }

  export interface Hailuo3 {
    /**
     * Body param
     */
    model: 'hailuo3';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: The aspect ratio of the output video. Use adaptive only when image
     * or video references are provided; text-only requests require a concrete ratio.
     */
    ratio?: 'adaptive' | '21:9' | '16:9' | '4:3' | '1:1' | '3:4' | '9:16';

    /**
     * Body param: An optional array of audio references. Audio references require a
     * text prompt, and the total combined duration must not exceed 15 seconds.
     */
    referenceAudio?: Array<Hailuo3.ReferenceAudio>;

    /**
     * Body param: An optional array of image references (up to 9). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Hailuo3.Reference>;

    /**
     * Body param: An optional array of video references. The combined duration across
     * all video references must not exceed 15 seconds. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    referenceVideos?: Array<Hailuo3.ReferenceVideo>;

    /**
     * Body param: The output resolution. Hailuo 3.0 supports 768p and 2k.
     *
     * - `768P` - Deprecated: Use "768p" instead.
     * - `2K` - Deprecated: Use "2k" instead.
     */
    resolution?: '768p' | '2k' | '768P' | '2K';

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

  export namespace Hailuo3 {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
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
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface KlingO3Pro {
    /**
     * Body param
     */
    model: 'klingO3_pro';

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param: Provider-specific settings for multishot video generation and video
     * editing.
     */
    providerSettings?: KlingO3Pro.ProviderSettings;

    /**
     * Body param: An optional array of reference images (up to 4). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: string | Array<KlingO3Pro.PromptImage>;

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

  export namespace KlingO3Pro {
    /**
     * Provider-specific settings for multishot video generation and video editing.
     */
    export interface ProviderSettings {
      /**
       * Whether to preserve the original audio when editing a video. Only applicable for
       * video-to-video. Defaults to true.
       */
      keepOriginalSound?: boolean;

      /**
       * An array of prompt segments for multishot video generation. Each segment has its
       * own prompt and duration. Total duration across all segments must be between 3
       * and 15 seconds. `promptText` is still required when `shotType` is
       * `"intelligence"`.
       */
      multiPrompt?: Array<ProviderSettings.MultiPrompt>;

      /**
       * Shot transition type for multishot videos. Defaults to "customize" when
       * multiPrompt is provided.
       */
      shotType?: 'intelligence' | 'customize';
    }

    export namespace ProviderSettings {
      export interface MultiPrompt {
        /**
         * Duration in seconds for this segment.
         */
        duration: number;

        /**
         * The text prompt for this segment.
         */
        prompt: string;
      }
    }

    export interface PromptImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame, "last" as the last frame. Omit for a reference image.
       */
      position?: 'first' | 'last';
    }
  }

  export interface KlingO3Standard {
    /**
     * Body param
     */
    model: 'klingO3_standard';

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param: Provider-specific settings for multishot video generation and video
     * editing.
     */
    providerSettings?: KlingO3Standard.ProviderSettings;

    /**
     * Body param: An optional array of reference images (up to 4). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: string | Array<KlingO3Standard.PromptImage>;

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

  export namespace KlingO3Standard {
    /**
     * Provider-specific settings for multishot video generation and video editing.
     */
    export interface ProviderSettings {
      /**
       * Whether to preserve the original audio when editing a video. Only applicable for
       * video-to-video. Defaults to true.
       */
      keepOriginalSound?: boolean;

      /**
       * An array of prompt segments for multishot video generation. Each segment has its
       * own prompt and duration. Total duration across all segments must be between 3
       * and 15 seconds. `promptText` is still required when `shotType` is
       * `"intelligence"`.
       */
      multiPrompt?: Array<ProviderSettings.MultiPrompt>;

      /**
       * Shot transition type for multishot videos. Defaults to "customize" when
       * multiPrompt is provided.
       */
      shotType?: 'intelligence' | 'customize';
    }

    export namespace ProviderSettings {
      export interface MultiPrompt {
        /**
         * Duration in seconds for this segment.
         */
        duration: number;

        /**
         * The text prompt for this segment.
         */
        prompt: string;
      }
    }

    export interface PromptImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame, "last" as the last frame. Omit for a reference image.
       */
      position?: 'first' | 'last';
    }
  }

  export interface Seedance2 {
    /**
     * Body param
     */
    model: 'seedance2';

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Bitrate of the output video. `high` keeps more detail with fewer
     * compression artifacts, at a larger file size. Defaults to `standard`.
     */
    bitrate?: 'standard' | 'high';

    /**
     * Body param: Seconds of video to generate, or `auto` to let the model choose.
     * `auto` is billed at the variant maximum up front; unused credits are refunded
     * after the generation finishes.
     */
    duration?: number | 'auto';

    /**
     * Body param: An optional text prompt up to 10000 characters describing what
     * should appear in the output.
     */
    promptText?: string;

    /**
     * Body param: The resolution of the output video.
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
     * Body param: An optional array of audio references. The total combined duration
     * must not exceed 15 seconds.
     */
    referenceAudio?: Array<Seedance2.ReferenceAudio>;

    /**
     * Body param: An optional array of image references (up to 9). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Seedance2.Reference>;

    /**
     * Body param: An optional array of video references. The combined duration across
     * all video references must not exceed 15 seconds. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    referenceVideos?: Array<Seedance2.ReferenceVideo>;

    /**
     * Body param: If unspecified, a random number is chosen. Varying the seed integer
     * is a way to get different results for the same other request parameters. Using
     * the same seed integer for an identical request will produce similar results.
     */
    seed?: number;

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

  export namespace Seedance2 {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
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
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedance2Fast {
    /**
     * Body param
     */
    model: 'seedance2_fast';

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Bitrate of the output video. `high` keeps more detail with fewer
     * compression artifacts, at a larger file size. Defaults to `standard`.
     */
    bitrate?: 'standard' | 'high';

    /**
     * Body param: Seconds of video to generate, or `auto` to let the model choose.
     * `auto` is billed at the variant maximum up front; unused credits are refunded
     * after the generation finishes.
     */
    duration?: number | 'auto';

    /**
     * Body param: An optional text prompt up to 10000 characters describing what
     * should appear in the output.
     */
    promptText?: string;

    /**
     * Body param: The resolution of the output video. Seedance 2.0 Fast supports 480p
     * and 720p only.
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
     * Body param: An optional array of audio references. The total combined duration
     * must not exceed 15 seconds.
     */
    referenceAudio?: Array<Seedance2Fast.ReferenceAudio>;

    /**
     * Body param: An optional array of image references (up to 9). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Seedance2Fast.Reference>;

    /**
     * Body param: An optional array of video references. The combined duration across
     * all video references must not exceed 15 seconds. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    referenceVideos?: Array<Seedance2Fast.ReferenceVideo>;

    /**
     * Body param: If unspecified, a random number is chosen. Varying the seed integer
     * is a way to get different results for the same other request parameters. Using
     * the same seed integer for an identical request will produce similar results.
     */
    seed?: number;

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

  export namespace Seedance2Fast {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
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
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedance2Mini {
    /**
     * Body param
     */
    model: 'seedance2_mini';

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Bitrate of the output video. `high` keeps more detail with fewer
     * compression artifacts, at a larger file size. Defaults to `standard`.
     */
    bitrate?: 'standard' | 'high';

    /**
     * Body param: Seconds of video to generate, or `auto` to let the model choose.
     * `auto` is billed at the variant maximum up front; unused credits are refunded
     * after the generation finishes.
     */
    duration?: number | 'auto';

    /**
     * Body param: An optional text prompt up to 10000 characters describing what
     * should appear in the output.
     */
    promptText?: string;

    /**
     * Body param: The resolution of the output video. Seedance 2.0 Mini supports 480p
     * and 720p only.
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
     * Body param: An optional array of audio references. The total combined duration
     * must not exceed 15 seconds.
     */
    referenceAudio?: Array<Seedance2Mini.ReferenceAudio>;

    /**
     * Body param: An optional array of image references (up to 9). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Seedance2Mini.Reference>;

    /**
     * Body param: An optional array of video references. The combined duration across
     * all video references must not exceed 15 seconds. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    referenceVideos?: Array<Seedance2Mini.ReferenceVideo>;

    /**
     * Body param: If unspecified, a random number is chosen. Varying the seed integer
     * is a way to get different results for the same other request parameters. Using
     * the same seed integer for an identical request will produce similar results.
     */
    seed?: number;

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

  export namespace Seedance2Mini {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
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
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface GeminiOmniFlash {
    /**
     * Body param
     */
    model: 'gemini_omni_flash';

    /**
     * Body param: A non-empty instruction describing the edit to apply.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

    /**
     * Body param: An optional array of image references to guide the edit.
     */
    references?: Array<GeminiOmniFlash.Reference>;

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

  export interface GeminiOmniFlash1_1 {
    /**
     * Body param
     */
    model: 'gemini_omni_flash_1.1';

    /**
     * Body param: A non-empty prompt describing the output or extension.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

    /**
     * Body param: The duration in seconds. In reference mode, this is the output video
     * length. In extend mode, this is the amount of footage added to the input video.
     * Use "auto" to let the model choose a duration.
     */
    duration?: 'auto' | number;

    /**
     * Body param: How the input video is used. `reference` generates a new video
     * guided by the input, `extend` continues it, and `edit` transforms it according
     * to the prompt.
     */
    mode?: 'reference' | 'extend' | 'edit';

    /**
     * Body param: The resolution and aspect ratio of the output video.
     */
    ratio?:
      | '640:360'
      | '360:640'
      | '1280:720'
      | '720:1280'
      | '1920:1080'
      | '1080:1920'
      | '3840:2160'
      | '2160:3840';

    /**
     * Body param: An optional array of image references to guide the output.
     */
    references?: Array<GeminiOmniFlash1_1.Reference>;

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

  export namespace GeminiOmniFlash1_1 {
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
    /**
     * Body param
     */
    model: 'seedance2_5';

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Generate a cheap 480p preview instead of a full-quality video. The
     * returned task ID can later be enhanced to a 1080p video with the same content by
     * passing it as `draftTaskId` to `text_to_video`. Drafts can be enhanced within 7
     * days of creation. Defaults to false.
     */
    draft?: boolean;

    /**
     * Body param: Seconds of video to generate, or `auto` to let the model choose.
     * `auto` is billed at the variant maximum up front; unused credits are refunded
     * after the generation finishes. Defaults to 5.
     */
    duration?: number | 'auto';

    /**
     * Body param: How the input video is used. `reference` (the default) generates a
     * new video conditioned on the input video and accepts `duration` and `ratio`.
     * `extend` continues the input video, requires `promptText`, and matches the input
     * aspect ratio, so `ratio` may not be provided. `edit` modifies the input video in
     * place, requires `promptText`, requires `duration: "auto"`, and does not accept
     * `ratio`.
     */
    mode?: 'reference' | 'extend' | 'edit';

    /**
     * Body param: Container for the output video. `mov` keeps high colour precision
     * for grading and compositing. Defaults to `mp4`. Draft mode only supports `mp4`.
     */
    outputFormat?: 'mp4' | 'mov';

    /**
     * Body param: An optional text prompt up to 15000 characters describing what
     * should appear in the output.
     */
    promptText?: string;

    /**
     * Body param: The resolution of the output video. Seedance 2.5 supports 480p,
     * 720p, 1080p, and 4K.
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
      | '1080:1920'
      | '3840:1646'
      | '3840:2160'
      | '3840:2880'
      | '3840:3840'
      | '2880:3840'
      | '2160:3840';

    /**
     * Body param: An optional array of audio references. The total combined duration
     * must be less than 30 seconds.
     */
    referenceAudio?: Array<Seedance2_5.ReferenceAudio>;

    /**
     * Body param: An optional array of image references (up to 30). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Seedance2_5.Reference>;

    /**
     * Body param: An optional array of video references. The combined duration across
     * all video references must not exceed 30 seconds. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    referenceVideos?: Array<Seedance2_5.ReferenceVideo>;

    /**
     * Body param: If unspecified, a random number is chosen. Varying the seed integer
     * is a way to get different results for the same other request parameters. Using
     * the same seed integer for an identical request will produce similar results.
     */
    seed?: number;

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

  export namespace Seedance2_5 {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
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
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Kling4 {
    /**
     * Body param
     */
    model: 'kling_4';

    /**
     * Body param: A text prompt describing how to edit the video.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

    /**
     * Body param: The duration of the edited video in seconds.
     */
    duration?: number;

    /**
     * Body param: Optional first, middle, and last frames guiding the edit. Middle or
     * last frames can be provided without a first frame.
     */
    promptImage?: string | Array<unknown>;

    /**
     * Body param: The target output size. Use a pixel ratio such as `1280:720` or
     * `auto_720p` / `auto_1080p` for adaptive framing.
     */
    ratio?:
      | '1280:720'
      | '720:1280'
      | '940:940'
      | '1460:624'
      | '1920:1080'
      | '1080:1920'
      | '1440:1440'
      | '2200:940'
      | 'auto_720p'
      | 'auto_1080p';

    /**
     * Body param: Images of characters, objects or styles to use in the video. Up to
     * 10 images in total, frames included.
     */
    references?: Array<Kling4.Reference>;

    /**
     * Body param: Up to 4 videos whose style, motion or camera work should guide the
     * output, together at most 30 seconds long.
     */
    referenceVideos?: Array<unknown>;

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

  export namespace Kling4 {
    export interface Reference {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface GeminiOmniFlash1_2 {
    /**
     * Body param
     */
    model: 'gemini_omni_flash_1.2';

    /**
     * Body param: A non-empty prompt describing the output or extension.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

    /**
     * Body param: The duration in seconds. In reference mode, this is the output video
     * length. In extend mode, this is the amount of footage added to the input video.
     * Use "auto" to let the model choose a duration.
     */
    duration?: 'auto' | number;

    /**
     * Body param: How the input video is used. `reference` generates a new video
     * guided by the input, `extend` continues it, and `edit` transforms it according
     * to the prompt.
     */
    mode?: 'reference' | 'extend' | 'edit';

    /**
     * Body param: The resolution and aspect ratio of the output video.
     */
    ratio?:
      | '640:360'
      | '360:640'
      | '1280:720'
      | '720:1280'
      | '1920:1080'
      | '1080:1920'
      | '3840:2160'
      | '2160:3840';

    /**
     * Body param: An optional array of image references to guide the output.
     */
    references?: Array<GeminiOmniFlash1_2.Reference>;

    /**
     * Body param: The output resolution when editing or extending a video. In
     * reference mode, use ratio instead.
     */
    resolution?: '360p' | '720p' | '1080p' | '4k';

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

  export namespace GeminiOmniFlash1_2 {
    export interface Reference {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Kling4Flash {
    /**
     * Body param
     */
    model: 'kling_4_flash';

    /**
     * Body param: A text prompt describing what should happen in the video.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

    /**
     * Body param: The duration of the output video in seconds.
     */
    duration?: number;

    /**
     * Body param: The output size, or auto_720p for adaptive framing. Legacy values
     * 940:940 and 1460:624 are accepted as aliases for 960:960 and 1464:628,
     * respectively.
     */
    ratio?: '1280:720' | '720:1280' | '960:960' | '1464:628' | 'auto_720p' | '940:940' | '1460:624';

    /**
     * Body param
     */
    references?: Array<Kling4Flash.Reference>;

    /**
     * Body param
     */
    referenceVideos?: Array<Kling4Flash.ReferenceVideo>;

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

  export namespace Kling4Flash {
    export interface Reference {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }

    export interface ReferenceVideo {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Hailuo3Highspeed {
    /**
     * Body param
     */
    model: 'hailuo3_highspeed';

    /**
     * Body param: The text prompt describing the output video.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param
     */
    duration?: number;

    /**
     * Body param
     */
    ratio?: 'adaptive' | '21:9' | '16:9' | '4:3' | '1:1' | '3:4' | '9:16';

    /**
     * Body param
     */
    referenceAudio?: Array<Hailuo3Highspeed.ReferenceAudio>;

    /**
     * Body param
     */
    references?: Array<Hailuo3Highspeed.Reference>;

    /**
     * Body param
     */
    referenceVideos?: Array<Hailuo3Highspeed.ReferenceVideo>;

    /**
     * Body param: The output video resolution.
     */
    resolution?: '480p' | '768p';

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

  export namespace Hailuo3Highspeed {
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
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

    export interface ReferenceVideo {
      type: 'video';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Hailuo3Lite {
    /**
     * Body param
     */
    model: 'hailuo3_lite';

    /**
     * Body param: The text prompt describing the output video.
     */
    promptText: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param
     */
    duration?: number;

    /**
     * Body param
     */
    ratio?: '21:9' | '16:9' | '4:3' | '1:1' | '3:4' | '9:16';

    /**
     * Body param
     */
    referenceAudio?: Array<Hailuo3Lite.ReferenceAudio>;

    /**
     * Body param
     */
    references?: Array<Hailuo3Lite.Reference>;

    /**
     * Body param
     */
    referenceVideos?: Array<Hailuo3Lite.ReferenceVideo>;

    /**
     * Body param: The output video resolution.
     */
    resolution?: '480p' | '768p';

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

  export namespace Hailuo3Lite {
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
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

    export interface ReferenceVideo {
      type: 'video';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedance2_5Flash {
    /**
     * Body param
     */
    model: 'seedance2_5_flash';

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    promptVideo: string;

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Seconds of video to generate, or `auto` to let the model choose.
     * `auto` is billed at the variant maximum up front; unused credits are refunded
     * after the generation finishes. Defaults to 5.
     */
    duration?: number | 'auto';

    /**
     * Body param: How the input video is used. `reference` (the default) generates a
     * new video conditioned on the input video and accepts `duration` and `ratio`.
     * `extend` continues the input video, requires `promptText`, and matches the input
     * aspect ratio, so `ratio` may not be provided. `edit` modifies the input video in
     * place, requires `promptText`, requires `duration: "auto"`, and does not accept
     * `ratio`.
     */
    mode?: 'reference' | 'extend' | 'edit';

    /**
     * Body param: Container for the output video. `mov` keeps high colour precision
     * for grading and compositing. Defaults to `mp4`.
     */
    outputFormat?: 'mp4' | 'mov';

    /**
     * Body param: An optional text prompt up to 15000 characters describing what
     * should appear in the output.
     */
    promptText?: string;

    /**
     * Body param: The resolution of the output video. Seedance 2.5 Flash supports 480p
     * and 720p.
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
      | '720:1280';

    /**
     * Body param: An optional array of audio references. The total combined duration
     * must be less than 30 seconds.
     */
    referenceAudio?: Array<Seedance2_5Flash.ReferenceAudio>;

    /**
     * Body param: An optional array of image references (up to 10). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Seedance2_5Flash.Reference>;

    /**
     * Body param: An optional array of video references. The combined duration across
     * all video references must not exceed 30 seconds. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    referenceVideos?: Array<Seedance2_5Flash.ReferenceVideo>;

    /**
     * Body param: If unspecified, a random number is chosen. Varying the seed integer
     * is a way to get different results for the same other request parameters. Using
     * the same seed integer for an identical request will produce similar results.
     */
    seed?: number;

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

  export namespace Seedance2_5Flash {
    /**
     * An audio reference allows the model to use the audio as additional context for
     * the output.
     */
    export interface ReferenceAudio {
      type: 'audio';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
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
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
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
