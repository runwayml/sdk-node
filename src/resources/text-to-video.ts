// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class TextToVideo extends APIResource {
  /**
   * This endpoint will start a new task to generate a video from a text prompt.
   *
   * @example
   * ```ts
   * const textToVideo = await client.textToVideo.create({
   *   model: 'hailuo3',
   *   promptText: 'x',
   * });
   * ```
   */
  create(
    params: TextToVideoCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<TextToVideoCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<TextToVideoCreateResponse>(this._client)(
      this._client.post('/v1/text_to_video', {
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

export interface TextToVideoCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: TextToVideoCreateResponse.EstimatedCost;
}

export namespace TextToVideoCreateResponse {
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

export type TextToVideoCreateParams =
  | TextToVideoCreateParams.Gen4_5
  | TextToVideoCreateParams.Veo3_1
  | TextToVideoCreateParams.Veo3_1Fast
  | TextToVideoCreateParams.KlingO3_4k
  | TextToVideoCreateParams.Hailuo3
  | TextToVideoCreateParams.Kling3_0_4k
  | TextToVideoCreateParams.Happyhorse1_0
  | TextToVideoCreateParams.Kling2_5TurboPro
  | TextToVideoCreateParams.Kling3_0Pro
  | TextToVideoCreateParams.Kling3_0Standard
  | TextToVideoCreateParams.KlingO3Pro
  | TextToVideoCreateParams.KlingO3Standard
  | TextToVideoCreateParams.Seedance2
  | TextToVideoCreateParams.Seedance2Fast
  | TextToVideoCreateParams.Seedance2Mini
  | TextToVideoCreateParams.GeminiOmniFlash
  | TextToVideoCreateParams.GrokImagine1_5
  | TextToVideoCreateParams.Wan3
  | TextToVideoCreateParams.GeminiOmniFlash1_1
  | TextToVideoCreateParams.Wan3Prime
  | TextToVideoCreateParams.H3Max
  | TextToVideoCreateParams.Seedance2_5
  | TextToVideoCreateParams.GrokImagine1_5Lite
  | TextToVideoCreateParams.Kling4
  | TextToVideoCreateParams.GeminiOmniFlash1_2
  | TextToVideoCreateParams.Kling4Flash
  | TextToVideoCreateParams.Hailuo3Highspeed
  | TextToVideoCreateParams.Hailuo3Lite
  | TextToVideoCreateParams.Seedance2_5Flash;

export declare namespace TextToVideoCreateParams {
  export interface Gen4_5 {
    /**
     * Body param: The number of seconds of duration for the output video. Must be an
     * integer from 2 to 10.
     */
    duration: number;

    /**
     * Body param
     */
    model: 'gen4.5';

    /**
     * Body param: A non-empty string up to 1000 characters (measured in UTF-16 code
     * units). This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280';

    /**
     * Body param: Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Gen4_5.ContentModeration;

    /**
     * Body param: The container/encoding of the output. `mp4` (default) returns an
     * H.264 .mp4. `prores` returns a ProRes .mov. `png_sequence` returns a .zip of PNG
     * frames (plus a separate .wav artifact when the output has audio). `hdr10` (HEVC
     * Main 10, BT.2020 + PQ) and `hlg` (HEVC Main 10, BT.2020 + HLG) return true-HDR
     * 10-bit .mp4s; `sdr_rec709_10bit` returns a 10-bit Rec.709 HEVC .mp4 for SDR
     * grading pipelines; `hdr_pq_12bit_master` returns a 12-bit 4:4:4 BT.2020 + PQ
     * HEVC .mov with measured HDR10 content-light metadata for mastering; `hdr_prores`
     * returns a BT.2020 + PQ ProRes .mov editorial mezzanine, whose tier is selectable
     * with `proresProfile` (`422`, `422 HQ`, or `4444`; defaults to `422 HQ`);
     * `hdr_png_sequence` returns a .zip of 16-bit PNG frames carrying the PQ signal
     * losslessly (plus a colorimetry.json sidecar and a separate .wav when the output
     * has audio); `hdr_exr_sequence` returns a .zip of half-float OpenEXR frames
     * carrying the HDR signal as linear BT.2020 display light, 1.0 = 100 nits (plus a
     * colorimetry.json sidecar and a separate .wav when the output has audio);
     * `hdr_exr_acescg_sequence_1_3` returns the same delivery as scene-referred ACEScg
     * (inverted through the ACES 1.3 Output Transform), reading correctly with the
     * stock `ACES - ACEScg` input transform in ACES-configured pipelines, with VFX
     * sequence frame naming (frame.0001.exr). Non-mp4 formats incur an additional
     * per-second credit surcharge: 5 credits per second for `prores` and
     * `png_sequence`, and 20 credits per second for every 10-bit and deeper profile
     * (including the 12-bit, 16-bit, and EXR ones), rising to 40 credits per second
     * when the output is larger than 4 megapixels — that includes 1440p (2560x1440 is
     * under the line, but anything larger crosses it) up through 4K.
     */
    outputFormat?:
      | 'mp4'
      | 'prores'
      | 'png_sequence'
      | 'hdr10'
      | 'hlg'
      | 'sdr_rec709_10bit'
      | 'hdr_pq_12bit_master'
      | 'hdr_prores'
      | 'hdr_png_sequence'
      | 'hdr_exr_sequence'
      | 'hdr_exr_acescg_sequence_1_3'
      | 'hdr_exr_acescg_sequence_2_0';

    /**
     * Body param: The ProRes profile to use. Only valid when `outputFormat` is
     * `prores` or `hdr_prores`. For `prores`, any profile is accepted and the default
     * is `4444`. For `hdr_prores`, only `422`, `422 HQ` and `4444` are available and
     * the default is `422 HQ` — `422 Proxy` and `422 LT` quantize too heavily to hold
     * the HDR gradients, and 12-bit output is served by `hdr_pq_12bit_master` instead
     * of `4444 XQ`.
     */
    proresProfile?: '422' | '4444' | '422 Proxy' | '422 LT' | '422 HQ' | '4444 XQ';

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

  export namespace Gen4_5 {
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
    /**
     * Body param
     */
    model: 'veo3.1';

    /**
     * Body param: A non-empty string up to 1000 characters (measured in UTF-16 code
     * units). This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280' | '1080:1920' | '1920:1080';

    /**
     * Body param: Whether to generate audio for the video. Audio inclusion affects
     * pricing.
     */
    audio?: boolean;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: 4 | 6 | 8;

    /**
     * Body param: Text describing what should not appear in the output video.
     */
    negativePrompt?: string;

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

  export interface Veo3_1Fast {
    /**
     * Body param
     */
    model: 'veo3.1_fast';

    /**
     * Body param: A non-empty string up to 1000 characters (measured in UTF-16 code
     * units). This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280' | '1080:1920' | '1920:1080';

    /**
     * Body param: Whether to generate audio for the video. Audio inclusion affects
     * pricing.
     */
    audio?: boolean;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: 4 | 6 | 8;

    /**
     * Body param: Text describing what should not appear in the output video.
     */
    negativePrompt?: string;

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

  export interface KlingO3_4k {
    /**
     * Body param
     */
    model: 'klingO3_4k';

    /**
     * Body param: The resolution of the output video.
     */
    ratio: '3840:2160' | '2160:3840' | '2880:2880';

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText?: string;

    /**
     * Body param: Provider-specific settings for multishot video generation.
     */
    providerSettings?: KlingO3_4k.ProviderSettings;

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
     * Provider-specific settings for multishot video generation.
     */
    export interface ProviderSettings {
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

  export interface Kling3_0_4k {
    /**
     * Body param
     */
    model: 'kling3.0_4k';

    /**
     * Body param: The resolution of the output video.
     */
    ratio: '3840:2160' | '2160:3840' | '2880:2880';

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Creativity/freedom scale for generation. 0 gives the model maximum
     * creative freedom, 1 makes it follow the prompt most strictly. Defaults to 0.5.
     */
    cfgScale?: number;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText?: string;

    /**
     * Body param: Provider-specific settings for multishot video generation.
     */
    providerSettings?: Kling3_0_4k.ProviderSettings;

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

  export namespace Kling3_0_4k {
    /**
     * Provider-specific settings for multishot video generation.
     */
    export interface ProviderSettings {
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
  }

  export interface Happyhorse1_0 {
    /**
     * Body param
     */
    model: 'happyhorse_1_0';

    /**
     * Body param: A non-empty string up to 2500 characters (measured in UTF-16 code
     * units). This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: The resolution of the output video.
     */
    ratio?:
      | '1280:720'
      | '720:1280'
      | '960:960'
      | '1108:832'
      | '832:1108'
      | '1920:1080'
      | '1080:1920'
      | '1440:1440'
      | '1662:1248'
      | '1248:1662';

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

  export interface Kling2_5TurboPro {
    /**
     * Body param
     */
    model: 'kling2.5_turbo_pro';

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText: string;

    /**
     * Body param: Creativity/freedom scale for generation. 0 gives the model maximum
     * creative freedom, 1 makes it follow the prompt most strictly. Defaults to 0.5.
     */
    cfgScale?: number;

    /**
     * Body param: The duration of the output video in seconds. Defaults to 5.
     */
    duration?: 5 | 10;

    /**
     * Body param
     */
    ratio?: '1920:1080' | '1440:1440' | '1080:1920' | '1280:720' | '720:720' | '720:1280';

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

  export interface Kling3_0Pro {
    /**
     * Body param
     */
    model: 'kling3.0_pro';

    /**
     * Body param: The resolution of the output video.
     */
    ratio: '1920:1080' | '1080:1920' | '1440:1440';

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Creativity/freedom scale for generation. 0 gives the model maximum
     * creative freedom, 1 makes it follow the prompt most strictly. Defaults to 0.5.
     */
    cfgScale?: number;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText?: string;

    /**
     * Body param: Provider-specific settings for multishot video generation.
     */
    providerSettings?: Kling3_0Pro.ProviderSettings;

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

  export namespace Kling3_0Pro {
    /**
     * Provider-specific settings for multishot video generation.
     */
    export interface ProviderSettings {
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
  }

  export interface Kling3_0Standard {
    /**
     * Body param
     */
    model: 'kling3.0_standard';

    /**
     * Body param: The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280' | '960:960';

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Creativity/freedom scale for generation. 0 gives the model maximum
     * creative freedom, 1 makes it follow the prompt most strictly. Defaults to 0.5.
     */
    cfgScale?: number;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText?: string;

    /**
     * Body param: Provider-specific settings for multishot video generation.
     */
    providerSettings?: Kling3_0Standard.ProviderSettings;

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

  export namespace Kling3_0Standard {
    /**
     * Provider-specific settings for multishot video generation.
     */
    export interface ProviderSettings {
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
  }

  export interface KlingO3Pro {
    /**
     * Body param
     */
    model: 'klingO3_pro';

    /**
     * Body param: The resolution of the output video.
     */
    ratio: '1920:1080' | '1080:1920' | '1440:1440';

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText?: string;

    /**
     * Body param: Provider-specific settings for multishot video generation.
     */
    providerSettings?: KlingO3Pro.ProviderSettings;

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
     * Provider-specific settings for multishot video generation.
     */
    export interface ProviderSettings {
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
  }

  export interface KlingO3Standard {
    /**
     * Body param
     */
    model: 'klingO3_standard';

    /**
     * Body param: The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280' | '960:960';

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: A text prompt describing what should appear in the output video.
     */
    promptText?: string;

    /**
     * Body param: Provider-specific settings for multishot video generation.
     */
    providerSettings?: KlingO3Standard.ProviderSettings;

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
     * Provider-specific settings for multishot video generation.
     */
    export interface ProviderSettings {
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
  }

  export interface Seedance2 {
    /**
     * Body param
     */
    model: 'seedance2';

    /**
     * Body param: A non-empty text prompt up to 10000 characters describing what
     * should appear in the output.
     */
    promptText: string;

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
     * Body param: A non-empty text prompt up to 10000 characters describing what
     * should appear in the output.
     */
    promptText: string;

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
     * Body param: A non-empty text prompt up to 10000 characters describing what
     * should appear in the output.
     */
    promptText: string;

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
     * Body param: A non-empty text prompt describing the video to generate.
     */
    promptText: string;

    /**
     * Body param: The duration of the output video in seconds, as a whole number from
     * 3 to 10.
     */
    duration?: number;

    /**
     * Body param: The aspect ratio of the output video: `1280:720` (landscape) or
     * `720:1280` (portrait).
     */
    ratio?: '1280:720' | '720:1280';

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

  export interface GrokImagine1_5 {
    /**
     * Body param
     */
    model: 'grok_imagine_1_5';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: The aspect ratio of the output video.
     */
    ratio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '3:2' | '2:3';

    /**
     * Body param: An optional array of audio references. Audio references require at
     * least one image reference, and each clip must be between 3 and 15 seconds.
     */
    referenceAudio?: Array<GrokImagine1_5.ReferenceAudio>;

    /**
     * Body param: An optional array of image references. Referenced images can be
     * addressed in the prompt as [Image 1], [Image 2], and so on. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<GrokImagine1_5.Reference>;

    /**
     * Body param: The output resolution. Requests with image references are capped at
     * 720p.
     */
    resolution?: '480p' | '720p' | '1080p';

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

  export namespace GrokImagine1_5 {
    /**
     * An audio reference allows the model to drive the output with the supplied audio.
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
  }

  export interface Wan3 {
    /**
     * Body param
     */
    model: 'wan3';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: Whether to generate audio with the video.
     */
    audio?: boolean;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: The resolution of the output video, as `<width>:<height>`. Keyframe
     * image-to-video requests must use `auto_480p`, `auto_720p`, or `auto_1080p`
     * because their aspect ratio follows the first frame.
     */
    ratio?:
      | '832:480'
      | '720:544'
      | '624:624'
      | '544:720'
      | '480:832'
      | '1280:720'
      | '1104:832'
      | '960:960'
      | '832:1104'
      | '720:1280'
      | '1920:1080'
      | '1648:1248'
      | '1440:1440'
      | '1248:1648'
      | '1080:1920'
      | 'auto_480p'
      | 'auto_720p'
      | 'auto_1080p';

    /**
     * Body param: An optional array of audio references. The total combined duration
     * must not exceed 15 seconds.
     */
    referenceAudio?: Array<Wan3.ReferenceAudio>;

    /**
     * Body param: An optional array of image references (up to 10). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Wan3.Reference>;

    /**
     * Body param: An optional array of video references. The combined duration across
     * all video references must not exceed 15 seconds. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    referenceVideos?: Array<Wan3.ReferenceVideo>;

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

  export namespace Wan3 {
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

  export interface GeminiOmniFlash1_1 {
    /**
     * Body param
     */
    model: 'gemini_omni_flash_1.1';

    /**
     * Body param: A non-empty text prompt describing the video to generate.
     */
    promptText: string;

    /**
     * Body param: The duration of the output video in seconds. Use "auto" to let the
     * model choose a duration. Numeric durations must be between 3 and 10 seconds.
     */
    duration?: 'auto' | number;

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
     * Body param
     */
    references?: Array<GeminiOmniFlash1_1.Reference>;

    /**
     * Body param
     */
    referenceVideos?: Array<GeminiOmniFlash1_1.ReferenceVideo>;

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

    export interface ReferenceVideo {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
       */
      uri: string;
    }
  }

  export interface Wan3Prime {
    /**
     * Body param
     */
    model: 'wan3_prime';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: Whether to generate audio with the video.
     */
    audio?: boolean;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: The resolution of the output video, as `<width>:<height>`. Keyframe
     * image-to-video requests must use `auto_480p`, `auto_720p`, or `auto_1080p`
     * because their aspect ratio follows the first frame.
     */
    ratio?:
      | '832:480'
      | '720:544'
      | '624:624'
      | '544:720'
      | '480:832'
      | '1280:720'
      | '1104:832'
      | '960:960'
      | '832:1104'
      | '720:1280'
      | '1920:1080'
      | '1648:1248'
      | '1440:1440'
      | '1248:1648'
      | '1080:1920'
      | 'auto_480p'
      | 'auto_720p'
      | 'auto_1080p';

    /**
     * Body param: An optional array of audio references. The total combined duration
     * must not exceed 15 seconds.
     */
    referenceAudio?: Array<Wan3Prime.ReferenceAudio>;

    /**
     * Body param: An optional array of image references (up to 10). See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    references?: Array<Wan3Prime.Reference>;

    /**
     * Body param: An optional array of video references. The combined duration across
     * all video references must not exceed 15 seconds. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    referenceVideos?: Array<Wan3Prime.ReferenceVideo>;

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

  export namespace Wan3Prime {
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

  export interface H3Max {
    /**
     * Body param
     */
    model: 'h3_max';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: How the model rewrites the prompt before generating. disabled keeps
     * the prompt as written. balanced (the default) does a short rewrite. quality
     * spends extra time rewriting for a stronger result.
     */
    promptExpansionMode?: 'disabled' | 'balanced' | 'quality';

    /**
     * Body param: The output resolution. MiniMax H3 Max supports 480p and 768p.
     */
    resolution?: '480p' | '768p';

    /**
     * Body param: If unspecified, a random number is chosen. Identical results also
     * need promptExpansionMode set to disabled; balanced and quality rewrite the
     * prompt and will not repeat.
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

  export interface Seedance2_5 {
    /**
     * Body param
     */
    model: 'seedance2_5';

    /**
     * Body param: Whether to generate audio for the video. Defaults to `true`.
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
     * Body param: The ID of a succeeded draft task to enhance to 1080p. The draft is
     * regenerated with its original prompt, references, and settings, so no other
     * generation fields may be provided.
     */
    draftTaskId?: string;

    /**
     * Body param: Seconds of video to generate, or `auto` to let the model choose.
     * `auto` is billed at the variant maximum up front; unused credits are refunded
     * after the generation finishes. Defaults to 5.
     */
    duration?: number | 'auto';

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
     * 720p, 1080p, and 4K. Defaults to `1280:720`.
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

  export interface GrokImagine1_5Lite {
    /**
     * Body param
     */
    model: 'grok_imagine_1_5_lite';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * Body param: The resolution of the output video. The 1080p sizes are rendered at
     * 720p and upscaled.
     */
    ratio?:
      | '848:480'
      | '480:848'
      | '480:480'
      | '640:480'
      | '480:640'
      | '720:480'
      | '480:720'
      | '1280:720'
      | '720:1280'
      | '720:720'
      | '960:720'
      | '720:960'
      | '1088:720'
      | '720:1088'
      | '1904:1072'
      | '1072:1904'
      | '1424:1424'
      | '1648:1232'
      | '1232:1648'
      | '1744:1152'
      | '1152:1744';

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

  export interface Kling4 {
    /**
     * Body param
     */
    model: 'kling_4';

    /**
     * Body param: A text prompt describing what should happen in the video.
     */
    promptText: string;

    /**
     * Body param: The duration of the output video in seconds.
     */
    duration?: number;

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
     * Body param: Up to 5 videos whose style, motion or camera work should guide the
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
     * Body param: A non-empty text prompt describing the video to generate.
     */
    promptText: string;

    /**
     * Body param: The duration of the output video in seconds. Use "auto" to let the
     * model choose a duration. Numeric durations must be between 3 and 15 seconds.
     */
    duration?: 'auto' | number;

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
     * Body param
     */
    references?: Array<GeminiOmniFlash1_2.Reference>;

    /**
     * Body param
     */
    referenceVideos?: Array<GeminiOmniFlash1_2.ReferenceVideo>;

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

    export interface ReferenceVideo {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
       * [our docs](/assets/inputs#videos) on video inputs for more information.
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
     * Body param: Whether to generate audio for the video. Defaults to `true`.
     */
    audio?: boolean;

    /**
     * Body param: Seconds of video to generate, or `auto` to let the model choose.
     * `auto` is billed at the variant maximum up front; unused credits are refunded
     * after the generation finishes. Defaults to 5.
     */
    duration?: number | 'auto';

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
     * and 720p. Defaults to `1280:720`.
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

export declare namespace TextToVideo {
  export {
    type TextToVideoCreateResponse as TextToVideoCreateResponse,
    type TextToVideoCreateParams as TextToVideoCreateParams,
  };
}
