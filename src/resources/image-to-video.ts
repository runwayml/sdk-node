// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class ImageToVideo extends APIResource {
  /**
   * This endpoint will start a new task to generate a video from an image.
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

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: ImageToVideoCreateResponse.EstimatedCost;
}

export namespace ImageToVideoCreateResponse {
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

export type ImageToVideoCreateParams =
  | ImageToVideoCreateParams.Gen4_5
  | ImageToVideoCreateParams.Gen4Turbo
  | ImageToVideoCreateParams.Veo3_1
  | ImageToVideoCreateParams.Veo3_1Fast
  | ImageToVideoCreateParams.Hailuo3
  | ImageToVideoCreateParams.Happyhorse1_0
  | ImageToVideoCreateParams.Seedance2
  | ImageToVideoCreateParams.Seedance2Fast
  | ImageToVideoCreateParams.Seedance2Mini
  | ImageToVideoCreateParams.GeminiOmniFlash
  | ImageToVideoCreateParams.Seedance2_5
  | ImageToVideoCreateParams.GrokImagine1_5
  | ImageToVideoCreateParams.Wan3;

export declare namespace ImageToVideoCreateParams {
  export interface Gen4_5 {
    /**
     * The number of seconds of duration for the output video. Must be an integer from
     * 2 to 10.
     */
    duration: number;

    model: 'gen4.5';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
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
    ratio: '1280:720' | '720:1280' | '1104:832' | '960:960' | '832:1104' | '1584:672';

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Gen4_5.ContentModeration;

    /**
     * The container/encoding of the output. `mp4` (default) returns an H.264 .mp4.
     * `prores` returns a ProRes .mov. `png_sequence` returns a .zip of PNG frames
     * (plus a separate .wav artifact when the output has audio). `hdr10` (HEVC Main
     * 10, BT.2020 + PQ) and `hlg` (HEVC Main 10, BT.2020 + HLG) return true-HDR 10-bit
     * .mp4s; `sdr_rec709_10bit` returns a 10-bit Rec.709 HEVC .mp4 for SDR grading
     * pipelines; `hdr_pq_12bit_master` returns a 12-bit 4:4:4 BT.2020 + PQ HEVC .mov
     * with measured HDR10 content-light metadata for mastering; `hdr_prores` returns a
     * BT.2020 + PQ ProRes .mov editorial mezzanine, whose tier is selectable with
     * `proresProfile` (`422`, `422 HQ`, or `4444`; defaults to `422 HQ`);
     * `hdr_png_sequence` returns a .zip of 16-bit PNG frames carrying the PQ signal
     * losslessly (plus a colorimetry.json sidecar and a separate .wav when the output
     * has audio); `hdr_exr_sequence` returns a .zip of half-float OpenEXR frames
     * carrying the HDR signal as linear BT.2020 display light, 1.0 = 100 nits (plus a
     * colorimetry.json sidecar and a separate .wav when the output has audio). Non-mp4
     * formats incur an additional per-second credit surcharge: 5 credits per second
     * for `prores` and `png_sequence`, and 20 credits per second for every 10-bit and
     * deeper profile (including the 12-bit, 16-bit, and EXR ones), rising to 40
     * credits per second when the output is larger than 4 megapixels (roughly 4K).
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
      | 'hdr_exr_sequence';

    /**
     * The ProRes profile to use. Only valid when `outputFormat` is `prores` or
     * `hdr_prores`. For `prores`, any profile is accepted and the default is `4444`.
     * For `hdr_prores`, only `422`, `422 HQ` and `4444` are available and the default
     * is `422 HQ` — `422 Proxy` and `422 LT` quantize too heavily to hold the HDR
     * gradients, and 12-bit output is served by `hdr_pq_12bit_master` instead of
     * `4444 XQ`.
     */
    proresProfile?: '422' | '4444' | '422 Proxy' | '422 LT' | '422 HQ' | '4444 XQ';

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
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
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

  export interface Gen4Turbo {
    model: 'gen4_turbo';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
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
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
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
     * Text describing what should not appear in the output video.
     */
    negativePrompt?: string;

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
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
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
     * Text describing what should not appear in the output video.
     */
    negativePrompt?: string;

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
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Hailuo3 {
    model: 'hailuo3';

    /**
     * An image or array of images. Use position `first`/`last` for keyframe mode, or
     * omit position for reference images. The two modes cannot be mixed.
     */
    promptImage: string | Array<unknown>;

    /**
     * A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

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
       * `data:audio/mp3;base64,...`) containing an encoded audio. See
       * [our docs](/assets/inputs#audio) on audio inputs for more information.
       */
      uri: string;
    }
  }

  export interface Happyhorse1_0 {
    model: 'happyhorse_1_0';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    promptImage: string | Array<Happyhorse1_0.PromptImage>;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * A string up to 2500 characters (measured in UTF-16 code units) describing motion
     * or changes in the output video.
     */
    promptText?: string;

    /**
     * Output quality tier. Output aspect ratio follows the input image.
     */
    resolution?: '720P' | '1080P';
  }

  export namespace Happyhorse1_0 {
    export interface PromptImage {
      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame of the video.
       */
      position: 'first';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedance2 {
    model: 'seedance2';

    /**
     * An image or array of images. Use position `first`/`last` for keyframe mode, or
     * omit position for reference images. The two modes cannot be mixed.
     */
    promptImage: string | Array<Seedance2.PromptImage>;

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
  }

  export namespace Seedance2 {
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
  }

  export interface Seedance2Fast {
    model: 'seedance2_fast';

    /**
     * An image or array of images. Use position `first`/`last` for keyframe mode, or
     * omit position for reference images. The two modes cannot be mixed.
     */
    promptImage: string | Array<Seedance2Fast.PromptImage>;

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
  }

  export namespace Seedance2Fast {
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
  }

  export interface Seedance2Mini {
    model: 'seedance2_mini';

    /**
     * An image or array of images. Use position `first`/`last` for keyframe mode, or
     * omit position for reference images. The two modes cannot be mixed.
     */
    promptImage: string | Array<Seedance2Mini.PromptImage>;

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
  }

  export namespace Seedance2Mini {
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
  }

  export interface GeminiOmniFlash {
    model: 'gemini_omni_flash';

    /**
     * An image to use as the first frame of the output video. Gemini Omni Flash only
     * supports a first frame.
     */
    promptImage: string | Array<GeminiOmniFlash.PromptImage>;

    /**
     * The duration of the output video in seconds, as a whole number from 3 to 10.
     */
    duration?: number;

    /**
     * An optional text prompt describing how the video should evolve from the first
     * frame.
     */
    promptText?: string;

    /**
     * The aspect ratio of the output video: `1280:720` (landscape) or `720:1280`
     * (portrait).
     */
    ratio?: '1280:720' | '720:1280';
  }

  export namespace GeminiOmniFlash {
    export interface PromptImage {
      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame of the video.
       */
      position: 'first';

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
     * An image or array of images. Use position `first`/`last` for keyframe mode, or
     * omit position for reference images. The two modes cannot be mixed.
     */
    promptImage: string | Array<Seedance2_5.PromptImage>;

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

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
     * An optional array of audio references. The total combined duration must not
     * exceed 30 seconds.
     */
    referenceAudio?: Array<Seedance2_5.ReferenceAudio>;
  }

  export namespace Seedance2_5 {
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
  }

  export interface GrokImagine1_5 {
    model: 'grok_imagine_1_5';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    promptImage: string | Array<GrokImagine1_5.PromptImage>;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * An optional text prompt describing motion or changes in the output video.
     */
    promptText?: string;

    /**
     * The output resolution. Output aspect ratio follows the input image.
     */
    resolution?: '480p' | '720p' | '1080p';
  }

  export namespace GrokImagine1_5 {
    export interface PromptImage {
      /**
       * The position of the image in the output video. "first" will use the image as the
       * first frame of the video.
       */
      position: 'first';

      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Wan3 {
    model: 'wan3';

    /**
     * An image or array of images. Use position `first`/`last` for keyframe mode, or
     * omit position for reference images. The two modes cannot be mixed.
     */
    promptImage: string | Array<unknown>;

    /**
     * A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

    /**
     * Whether to generate audio with the video.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * The resolution of the output video, as `<width>:<height>`. Use `auto_480p`,
     * `auto_720p`, or `auto_1080p` to let the model pick framing at that quality tier.
     */
    ratio?:
      | '832:480'
      | '640:480'
      | '480:480'
      | '480:640'
      | '480:832'
      | '1280:720'
      | '960:720'
      | '720:720'
      | '720:960'
      | '720:1280'
      | '1920:1080'
      | '1440:1080'
      | '1080:1080'
      | '1080:1440'
      | '1080:1920'
      | 'auto_480p'
      | 'auto_720p'
      | 'auto_1080p';

    /**
     * An optional array of audio references. The total combined duration must not
     * exceed 15 seconds.
     */
    referenceAudio?: Array<Wan3.ReferenceAudio>;

    /**
     * An optional array of video references. The combined duration across all video
     * references must not exceed 15 seconds. See [our docs](/assets/inputs#videos) on
     * video inputs for more information.
     */
    referenceVideos?: Array<Wan3.ReferenceVideo>;
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

export declare namespace ImageToVideo {
  export {
    type ImageToVideoCreateResponse as ImageToVideoCreateResponse,
    type ImageToVideoCreateParams as ImageToVideoCreateParams,
  };
}
