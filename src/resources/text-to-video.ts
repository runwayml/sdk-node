// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class TextToVideo extends APIResource {
  /**
   * This endpoint will start a new task to generate a video from a text prompt.
   */
  create(body: TextToVideoCreateParams, options?: RequestOptions): APIPromise<TextToVideoCreateResponse> {
    return this._client.post('/v1/text_to_video', { body, ...options });
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
  | TextToVideoCreateParams.Hailuo3
  | TextToVideoCreateParams.Happyhorse1_0
  | TextToVideoCreateParams.Seedance2
  | TextToVideoCreateParams.Seedance2Fast
  | TextToVideoCreateParams.Seedance2Mini
  | TextToVideoCreateParams.GeminiOmniFlash
  | TextToVideoCreateParams.Seedance2_5
  | TextToVideoCreateParams.GrokImagine1_5;

export declare namespace TextToVideoCreateParams {
  export interface Gen4_5 {
    /**
     * The number of seconds of duration for the output video. Must be an integer from
     * 2 to 10.
     */
    duration: number;

    model: 'gen4.5';

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * The resolution of the output video.
     */
    ratio: '1280:720' | '720:1280';

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
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText: string;

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
  }

  export interface Veo3_1Fast {
    model: 'veo3.1_fast';

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText: string;

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
  }

  export interface Hailuo3 {
    model: 'hailuo3';

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

  export interface Happyhorse1_0 {
    model: 'happyhorse_1_0';

    /**
     * A non-empty string up to 2500 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * The resolution of the output video.
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
  }

  export interface Seedance2 {
    model: 'seedance2';

    /**
     * A non-empty text prompt up to 3500 characters describing what should appear in
     * the output.
     */
    promptText: string;

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

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
     * A non-empty text prompt up to 3500 characters describing what should appear in
     * the output.
     */
    promptText: string;

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

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
     * A non-empty text prompt up to 3500 characters describing what should appear in
     * the output.
     */
    promptText: string;

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

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
     * A non-empty text prompt describing the video to generate.
     */
    promptText: string;

    /**
     * The duration of the output video in seconds, as a whole number from 3 to 10.
     */
    duration?: number;

    /**
     * The aspect ratio of the output video: `1280:720` (landscape) or `720:1280`
     * (portrait).
     */
    ratio?: '1280:720' | '720:1280';
  }

  export interface Seedance2_5 {
    model: 'seedance2_5';

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

  export interface GrokImagine1_5 {
    model: 'grok_imagine_1_5';

    /**
     * A non-empty text prompt describing what should appear in the output.
     */
    promptText: string;

    /**
     * The number of seconds of duration for the output video.
     */
    duration?: number;

    /**
     * The aspect ratio of the output video.
     */
    ratio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '3:2' | '2:3';

    /**
     * An optional array of audio references. Audio references require at least one
     * image reference, and each clip must be between 3 and 15 seconds.
     */
    referenceAudio?: Array<GrokImagine1_5.ReferenceAudio>;

    /**
     * An optional array of image references. Referenced images can be addressed in the
     * prompt as [Image 1], [Image 2], and so on. See [our docs](/assets/inputs#images)
     * on image inputs for more information.
     */
    references?: Array<GrokImagine1_5.Reference>;

    /**
     * The output resolution. Requests with image references are capped at 720p.
     */
    resolution?: '480p' | '720p' | '1080p';
  }

  export namespace GrokImagine1_5 {
    /**
     * An audio reference allows the model to drive the output with the supplied audio.
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
  }
}

export declare namespace TextToVideo {
  export {
    type TextToVideoCreateResponse as TextToVideoCreateResponse,
    type TextToVideoCreateParams as TextToVideoCreateParams,
  };
}
