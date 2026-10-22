// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class TextToImage extends APIResource {
  /**
   * This endpoint will start a new task to generate images from text and/or image(s)
   *
   * @example
   * ```ts
   * const textToImage = await client.textToImage.create({
   *   model: 'ideogram_4_5',
   *   promptText: 'x',
   * });
   * ```
   */
  create(
    body: TextToImageCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<TextToImageCreateResponse> {
    return wrapAsWaitableResource<TextToImageCreateResponse>(this._client)(
      this._client.post('/v1/text_to_image', { body, ...options }),
    );
  }
}

export interface TextToImageCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: TextToImageCreateResponse.EstimatedCost;
}

export namespace TextToImageCreateResponse {
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

export type TextToImageCreateParams =
  | TextToImageCreateParams.Gen4ImageTurbo
  | TextToImageCreateParams.Gen4Image
  | TextToImageCreateParams.GptImage2
  | TextToImageCreateParams.GeminiImage3_1Flash
  | TextToImageCreateParams.MuseImage
  | TextToImageCreateParams.Seedream5Pro
  | TextToImageCreateParams.Seedream5Lite
  | TextToImageCreateParams.GrokImagineImage2
  | TextToImageCreateParams.GeminiImage3_1FlashLite
  | TextToImageCreateParams.GeminiImage3Pro
  | TextToImageCreateParams.GptImage2_5Flare
  | TextToImageCreateParams.GptImage2_5Sunburst
  | TextToImageCreateParams.BriaFibo1_5
  | TextToImageCreateParams.BriaFiboEdit1_5
  | TextToImageCreateParams.Ideogram4_0
  | TextToImageCreateParams.Ideogram4_5
  | TextToImageCreateParams.Seedream5Flash
  | TextToImageCreateParams.NanoBanana2_1
  | TextToImageCreateParams.Gemini2_5Flash;

export declare namespace TextToImageCreateParams {
  export interface Gen4ImageTurbo {
    model: 'gen4_image_turbo';

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * The resolution of the output image.
     */
    ratio:
      | '1024:1024'
      | '1080:1080'
      | '1168:880'
      | '1360:768'
      | '1440:1080'
      | '1080:1440'
      | '1808:768'
      | '1920:1080'
      | '1080:1920'
      | '2112:912'
      | '1280:720'
      | '720:1280'
      | '720:720'
      | '960:720'
      | '720:960'
      | '1680:720';

    /**
     * An array of one to three images to be used as references for the generated image
     * output.
     */
    referenceImages: Array<Gen4ImageTurbo.ReferenceImage>;

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Gen4ImageTurbo.ContentModeration;

    /**
     * If unspecified, a random number is chosen. Varying the seed integer is a way to
     * get different results for the same other request parameters. Using the same seed
     * integer for an identical request will produce similar results.
     */
    seed?: number;
  }

  export namespace Gen4ImageTurbo {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text. Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
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

  export interface Gen4Image {
    model: 'gen4_image';

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * The resolution of the output image.
     */
    ratio:
      | '1024:1024'
      | '1080:1080'
      | '1168:880'
      | '1360:768'
      | '1440:1080'
      | '1080:1440'
      | '1808:768'
      | '1920:1080'
      | '1080:1920'
      | '2112:912'
      | '1280:720'
      | '720:1280'
      | '720:720'
      | '960:720'
      | '720:960'
      | '1680:720';

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Gen4Image.ContentModeration;

    /**
     * An array of up to three images to be used as references for the generated image
     * output.
     */
    referenceImages?: Array<Gen4Image.ReferenceImage>;

    /**
     * If unspecified, a random number is chosen. Varying the seed integer is a way to
     * get different results for the same other request parameters. Using the same seed
     * integer for an identical request will produce similar results.
     */
    seed?: number;
  }

  export namespace Gen4Image {
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

    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text. Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface GptImage2 {
    model: 'gpt_image_2';

    /**
     * A non-empty string up to 32,000 characters describing the desired image.
     */
    promptText: string;

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. Use `auto`
     * to let the model choose.
     */
    ratio:
      | '2048:880'
      | '1920:1088'
      | '1920:1280'
      | '1920:1440'
      | '1920:1536'
      | '1920:1920'
      | '1536:1920'
      | '1440:1920'
      | '1280:1920'
      | '1088:1920'
      | '2912:1248'
      | '2560:1440'
      | '2560:1712'
      | '2560:1920'
      | '2560:2048'
      | '2560:2560'
      | '2048:2560'
      | '1920:2560'
      | '1712:2560'
      | '1440:2560'
      | '3840:1648'
      | '3840:2160'
      | '3504:2336'
      | '3264:2448'
      | '3200:2560'
      | '2880:2880'
      | '2560:3200'
      | '2448:3264'
      | '2336:3504'
      | '2160:3840'
      | 'auto';

    /**
     * Background treatment. Defaults to `auto`, which lets the model pick. Use
     * `transparent` to generate a PNG with an alpha-channel background.
     */
    background?: 'transparent' | 'opaque' | 'auto';

    /**
     * The number of images to generate (1-10). Increasing this number will affect the
     * number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Rendering quality. Higher qualities consume more credits. Defaults to `high`.
     */
    quality?: 'low' | 'medium' | 'high' | 'auto';

    /**
     * An array of up to 16 images to be used as references for the generated image
     * output. No two images may share the same tag.
     */
    referenceImages?: Array<GptImage2.ReferenceImage>;
  }

  export namespace GptImage2 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This may be used to reference the image
       * in prompt text. Must be 3-16 characters, start with a letter, and use only
       * letters, digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface GeminiImage3_1Flash {
    model: 'gemini_image3.1_flash';

    /**
     * This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * The resolution of the output image.
     */
    ratio:
      | '512:512'
      | '416:624'
      | '624:416'
      | '432:592'
      | '592:432'
      | '448:576'
      | '576:448'
      | '384:672'
      | '672:384'
      | '768:336'
      | '256:1024'
      | '1024:256'
      | '176:1408'
      | '1408:176'
      | '1024:1024'
      | '832:1248'
      | '1248:832'
      | '864:1184'
      | '1184:864'
      | '896:1152'
      | '1152:896'
      | '768:1344'
      | '1344:768'
      | '1536:672'
      | '512:2048'
      | '2048:512'
      | '352:2816'
      | '2816:352'
      | '2048:2048'
      | '1696:2528'
      | '2528:1696'
      | '1792:2400'
      | '2400:1792'
      | '1856:2304'
      | '2304:1856'
      | '1536:2752'
      | '2752:1536'
      | '3168:1344'
      | '1024:4096'
      | '4096:1024'
      | '704:5632'
      | '5632:704'
      | '4096:4096'
      | '3392:5056'
      | '5056:3392'
      | '3584:4800'
      | '4800:3584'
      | '3712:4608'
      | '4608:3712'
      | '3072:5504'
      | '5504:3072'
      | '6336:2688'
      | '2048:8192'
      | '8192:2048'
      | '1408:11264'
      | '11264:1408';

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation. Up to four images can be generated at
     * once.
     */
    outputCount?: 1 | 4;

    /**
     * An array of up to 14 images to be used as references for the generated image
     * output. Up to five of those images can pass `subject: "human"` to maintain
     * character consistency, and up to nine of those images can pass
     * `subject: "object"` with high-fidelity images of objects to include in the
     * output.
     */
    referenceImages?: Array<GeminiImage3_1Flash.ReferenceImage>;
  }

  export namespace GeminiImage3_1Flash {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * Whether this is a reference of a human subject (for character consistency) or an
       * object that appears in the output.
       */
      subject?: 'object' | 'human';

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text. Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface MuseImage {
    model: 'muse_image';

    /**
     * A non-empty text prompt describing what should appear in the output image.
     */
    promptText: string;

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. Use `auto`
     * to let the model choose the framing from the prompt.
     */
    ratio:
      | '2352:1008'
      | '2016:1152'
      | '1920:1280'
      | '1792:1344'
      | '1600:1600'
      | '1344:1792'
      | '1280:1920'
      | '1152:2016'
      | 'auto';

    /**
     * The number of images to generate. Each image costs 1 credit.
     */
    outputCount?: number;

    /**
     * The file format of the output image. Defaults to png.
     */
    outputFormat?: 'webp' | 'png' | 'jpeg';

    /**
     * Up to 10 images to guide the generation. When provided, the model edits and
     * combines them as your prompt describes instead of generating from the prompt
     * alone.
     */
    referenceImages?: Array<MuseImage.ReferenceImage>;
  }

  export namespace MuseImage {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedream5Pro {
    model: 'seedream5_pro';

    /**
     * A non-empty string up to 4,000 characters describing the desired image.
     */
    promptText: string;

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. Use
     * `auto_1k` or `auto_2k` to let the model pick aspect ratio at a fixed resolution
     * tier.
     */
    ratio:
      | '1024:1024'
      | '1184:896'
      | '896:1184'
      | '1376:768'
      | '768:1376'
      | '1296:864'
      | '864:1296'
      | '2048:2048'
      | '2304:1728'
      | '1728:2304'
      | '2720:1530'
      | '1530:2720'
      | '2496:1664'
      | '1664:2496'
      | 'auto_1k'
      | 'auto_2k';

    /**
     * When true, enable live web search so the model can use current brand, trend, or
     * event context. Default false for deterministic output.
     */
    grounding?: boolean;

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * An array of reference images for multi-image fusion and interactive editing.
     * Reference by upload order in prompt text (Figure 1, Figure 2, etc.).
     */
    referenceImages?: Array<Seedream5Pro.ReferenceImage>;
  }

  export namespace Seedream5Pro {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedream5Lite {
    model: 'seedream5_lite';

    /**
     * A non-empty string up to 4,000 characters describing the desired image.
     */
    promptText: string;

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. Also
     * accepts freeform sizes whose width\*height is between 3686400 and 16777216
     * pixels.
     */
    ratio:
      | '2048:2048'
      | '2304:1728'
      | '1728:2304'
      | '2848:1600'
      | '1600:2848'
      | '2496:1664'
      | '1664:2496'
      | '3136:1344'
      | '3072:3072'
      | '3456:2592'
      | '2592:3456'
      | '4096:2304'
      | '2304:4096'
      | '3744:2496'
      | '2496:3744'
      | '4704:2016'
      | (string & {});

    /**
     * When true, enable live web search so the model can use current brand, trend, or
     * event context. Default false for deterministic output.
     */
    grounding?: boolean;

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * An array of reference images for multi-image fusion and interactive editing.
     * Reference by upload order in prompt text (Figure 1, Figure 2, etc.).
     */
    referenceImages?: Array<Seedream5Lite.ReferenceImage>;
  }

  export namespace Seedream5Lite {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface GrokImagineImage2 {
    model: 'grok_imagine_image_2';

    /**
     * A non-empty text prompt describing what should appear in the output image.
     */
    promptText: string;

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. 2K ratios
     * cost 2 additional credits per image. Use `auto_1k` or `auto_2k` to pick a
     * resolution tier and let the model choose the framing from the prompt.
     */
    ratio:
      | '1024:1024'
      | '1280:720'
      | '720:1280'
      | '1152:864'
      | '864:1152'
      | '1248:832'
      | '832:1248'
      | '1248:576'
      | '576:1248'
      | '1280:576'
      | '576:1280'
      | '1408:704'
      | '704:1408'
      | '2048:2048'
      | '2816:1584'
      | '1584:2816'
      | '2368:1776'
      | '1776:2368'
      | '2496:1664'
      | '1664:2496'
      | '2912:1344'
      | '1344:2912'
      | '3200:1440'
      | '1440:3200'
      | '2912:1456'
      | '1456:2912'
      | 'auto_1k'
      | 'auto_2k';

    /**
     * When true with exactly one reference image, edit that image directly instead of
     * using it as a loose visual reference. With several reference images the prompt
     * describes how they should be edited or combined. Requires at least one reference
     * image.
     */
    edit?: boolean;

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * How much rendering effort the model spends on the output. Defaults to `medium`;
     * `low` is faster and costs 2 fewer credits per image.
     */
    quality?: 'low' | 'medium';

    /**
     * Up to 3 images to guide the generation. Reference them from `promptText` to
     * describe how each should be used. Each adds 1 credit to the generation.
     */
    referenceImages?: Array<GrokImagineImage2.ReferenceImage>;
  }

  export namespace GrokImagineImage2 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface GeminiImage3_1FlashLite {
    model: 'gemini_image3.1_flash_lite';

    /**
     * This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * The resolution of the output image.
     */
    ratio:
      | '1024:1024'
      | '848:1264'
      | '1264:848'
      | '896:1200'
      | '1200:896'
      | '928:1152'
      | '1152:928'
      | '768:1376'
      | '1376:768'
      | '1584:672';

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation. Up to four images can be generated at
     * once.
     */
    outputCount?: 1 | 4;

    /**
     * An array of up to 14 images to be used as references for the generated image
     * output. Up to five can pass `subject: "human"` and up to nine can pass
     * `subject: "object"`.
     */
    referenceImages?: Array<GeminiImage3_1FlashLite.ReferenceImage>;
  }

  export namespace GeminiImage3_1FlashLite {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      subject?: 'object' | 'human';

      tag?: string;
    }
  }

  export interface GeminiImage3Pro {
    model: 'gemini_image3_pro';

    /**
     * This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * The resolution of the output image.
     */
    ratio:
      | '1344:768'
      | '768:1344'
      | '1024:1024'
      | '1184:864'
      | '864:1184'
      | '1536:672'
      | '832:1248'
      | '1248:832'
      | '896:1152'
      | '1152:896'
      | '2048:2048'
      | '1696:2528'
      | '2528:1696'
      | '1792:2400'
      | '2400:1792'
      | '1856:2304'
      | '2304:1856'
      | '1536:2752'
      | '2752:1536'
      | '3168:1344'
      | '4096:4096'
      | '3392:5056'
      | '5056:3392'
      | '3584:4800'
      | '4800:3584'
      | '3712:4608'
      | '4608:3712'
      | '3072:5504'
      | '5504:3072'
      | '6336:2688';

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation. Up to four images can be generated at
     * once.
     */
    outputCount?: 1 | 4;

    /**
     * An array of up to 14 images to be used as references for the generated image
     * output. Up to five of those images can pass `subject: "human"` to maintain
     * character consistency, and up to nine of those images can pass
     * `subject: "object"` with high-fidelity images of objects to include in the
     * output.
     */
    referenceImages?: Array<GeminiImage3Pro.ReferenceImage>;
  }

  export namespace GeminiImage3Pro {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * Whether this is a reference of a human subject (for character consistency) or an
       * object that appears in the output.
       */
      subject?: 'object' | 'human';

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text. Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface GptImage2_5Flare {
    model: 'gpt_image_2_5_flare';

    /**
     * A non-empty string describing the desired image.
     */
    promptText: string;

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. Use `auto`
     * to let the model choose.
     */
    ratio:
      | '2048:880'
      | '1920:1088'
      | '1920:1280'
      | '1920:1440'
      | '1920:1536'
      | '1920:1920'
      | '1536:1920'
      | '1440:1920'
      | '1280:1920'
      | '1088:1920'
      | '2912:1248'
      | '2560:1440'
      | '2560:1712'
      | '2560:1920'
      | '2560:2048'
      | '2560:2560'
      | '2048:2560'
      | '1920:2560'
      | '1712:2560'
      | '1440:2560'
      | '3840:1648'
      | '3840:2160'
      | '3504:2336'
      | '3264:2448'
      | '3200:2560'
      | '2880:2880'
      | '2560:3200'
      | '2448:3264'
      | '2336:3504'
      | '2160:3840'
      | 'auto';

    /**
     * Background treatment. Defaults to `auto`, which lets the model pick.
     */
    background?: 'opaque' | 'auto';

    /**
     * The number of images to generate (1-10). Increasing this number will affect the
     * number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Rendering quality. Higher qualities consume more credits. Defaults to `high`.
     */
    quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';

    /**
     * An array of up to 16 images to be used as references for the generated image
     * output. No two images may share the same tag. Each reference image adds 1 credit
     * per generated image.
     */
    referenceImages?: Array<GptImage2_5Flare.ReferenceImage>;
  }

  export namespace GptImage2_5Flare {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This may be used to reference the image
       * in prompt text. Must be 3-16 characters, start with a letter, and use only
       * letters, digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface GptImage2_5Sunburst {
    model: 'gpt_image_2_5_sunburst';

    /**
     * A non-empty string describing the desired image.
     */
    promptText: string;

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. Use `auto`
     * to let the model choose.
     */
    ratio:
      | '2048:880'
      | '1920:1088'
      | '1920:1280'
      | '1920:1440'
      | '1920:1536'
      | '1920:1920'
      | '1536:1920'
      | '1440:1920'
      | '1280:1920'
      | '1088:1920'
      | '2912:1248'
      | '2560:1440'
      | '2560:1712'
      | '2560:1920'
      | '2560:2048'
      | '2560:2560'
      | '2048:2560'
      | '1920:2560'
      | '1712:2560'
      | '1440:2560'
      | '3840:1648'
      | '3840:2160'
      | '3504:2336'
      | '3264:2448'
      | '3200:2560'
      | '2880:2880'
      | '2560:3200'
      | '2448:3264'
      | '2336:3504'
      | '2160:3840'
      | 'auto';

    /**
     * Background treatment. Defaults to `auto`, which lets the model pick. Use
     * `transparent` to generate a PNG with an alpha-channel background.
     */
    background?: 'transparent' | 'opaque' | 'auto';

    /**
     * The number of images to generate (1-10). Increasing this number will affect the
     * number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Rendering quality. Higher qualities consume more credits. Defaults to `high`.
     */
    quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';

    /**
     * An array of up to 16 images to be used as references for the generated image
     * output. No two images may share the same tag. Each reference image adds 1 credit
     * per generated image.
     */
    referenceImages?: Array<GptImage2_5Sunburst.ReferenceImage>;
  }

  export namespace GptImage2_5Sunburst {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This may be used to reference the image
       * in prompt text. Must be 3-16 characters, start with a letter, and use only
       * letters, digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface BriaFibo1_5 {
    model: 'bria_fibo_1_5';

    /**
     * A non-empty text prompt describing what should appear in the output image.
     */
    promptText: string;

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. 1MP sizes
     * cost 5 credits per image and 4MP sizes 10.
     */
    ratio:
      | '1024:1024'
      | '768:1152'
      | '1152:768'
      | '768:1024'
      | '1024:768'
      | '768:960'
      | '960:768'
      | '576:1024'
      | '1024:576'
      | '2048:2048'
      | '1536:2304'
      | '2304:1536'
      | '1536:2048'
      | '2048:1536'
      | '1536:1920'
      | '1920:1536'
      | '1152:2048'
      | '2048:1152';

    /**
     * The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Up to 1 image to guide the generation. The prompt describes how the output
     * should build on it.
     */
    referenceImages?: Array<BriaFibo1_5.ReferenceImage>;

    /**
     * If unspecified, a random number is chosen. Using the same seed with an identical
     * request reproduces the same image.
     */
    seed?: number;
  }

  export namespace BriaFibo1_5 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface BriaFiboEdit1_5 {
    model: 'bria_fibo_edit_1_5';

    /**
     * An instruction describing how to edit the reference images.
     */
    promptText: string;

    /**
     * The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. Omit it or
     * use `auto` to keep the framing of the first reference image. Choosing a size
     * requires at least 2 reference images; a single image always keeps its own
     * framing.
     */
    ratio?:
      | '1024:1024'
      | '768:1152'
      | '1152:768'
      | '768:1024'
      | '1024:768'
      | '768:960'
      | '960:768'
      | '576:1024'
      | '1024:576'
      | 'auto';

    /**
     * 1 to 4 images to edit. With several, the instruction describes how to combine
     * them.
     */
    referenceImages?: Array<BriaFiboEdit1_5.ReferenceImage>;

    /**
     * If unspecified, a random number is chosen. Using the same seed with an identical
     * request reproduces the same image.
     */
    seed?: number;
  }

  export namespace BriaFiboEdit1_5 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Ideogram4_0 {
    model: 'ideogram_4_0';

    /**
     * Describe the image to generate, or how to remix the reference image.
     */
    promptText: string;

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * How much rendering effort the model spends on each image. `low` costs 4 credits
     * per image, `medium` 7 and `high` 11.
     */
    quality?: 'low' | 'medium' | 'high';

    /**
     * The resolution of the output image, expressed as `<width>:<height>`.
     */
    ratio?:
      | '2048:2048'
      | '2560:1440'
      | '1440:2560'
      | '2304:1728'
      | '1728:2304'
      | '2496:1664'
      | '1664:2496'
      | '3072:1280'
      | '1280:3072';

    /**
     * An image to remix. The prompt describes how the output should differ from it.
     */
    referenceImages?: Array<Ideogram4_0.ReferenceImage>;
  }

  export namespace Ideogram4_0 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Ideogram4_5 {
    model: 'ideogram_4_5';

    /**
     * Describe the image to generate, or the changes to make to the reference images.
     */
    promptText: string;

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    maskUri?: string;

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * When true, edit the first reference image while preserving its composition and
     * dimensions. Requires at least one reference image.
     */
    preciseEdit?: boolean;

    /**
     * How much rendering effort the model spends on each image. Defaults to `medium`
     * (8 credits per image) when generating from reference images and `high` (25
     * credits) otherwise, including `preciseEdit`. `low` costs 4 credits and
     * `very_low` 1; `very_low` requires reference images and is not available with
     * `preciseEdit`.
     */
    quality?: 'very_low' | 'low' | 'medium' | 'high';

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. Omit it or
     * use `auto` to let the model choose. With reference images, widescreen 1K sizes
     * are `1024:576`, `576:1024`, `1408:704`, `704:1408` instead of `1280:720`,
     * `720:1280`, `1440:720`, `720:1440`. Not available with `maskUri` or
     * `preciseEdit`, which keep the size of the first reference image.
     */
    ratio?:
      | '1024:1024'
      | '1280:720'
      | '720:1280'
      | '1152:864'
      | '864:1152'
      | '1248:832'
      | '832:1248'
      | '1120:896'
      | '896:1120'
      | '1440:720'
      | '720:1440'
      | '2048:2048'
      | '2560:1440'
      | '1440:2560'
      | '2304:1728'
      | '1728:2304'
      | '2496:1664'
      | '1664:2496'
      | '2240:1792'
      | '1792:2240'
      | '2880:1440'
      | '1440:2880'
      | '1024:576'
      | '576:1024'
      | '1408:704'
      | '704:1408'
      | 'auto';

    /**
     * Up to 5 images to guide the generation. With `maskUri` or `preciseEdit`, the
     * first image is the one being edited and the rest are references.
     */
    referenceImages?: Array<Ideogram4_5.ReferenceImage>;
  }

  export namespace Ideogram4_5 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedream5Flash {
    model: 'seedream5_flash';

    /**
     * A description of the image you want to generate.
     */
    promptText: string;

    /**
     * The resolution of the output image, expressed as `<width>:<height>`. Use
     * `auto_1k` or `auto_2k` to let the model pick the aspect ratio at a fixed
     * resolution tier.
     */
    ratio:
      | '1024:1024'
      | '1184:896'
      | '896:1184'
      | '1376:768'
      | '768:1376'
      | '1248:832'
      | '832:1248'
      | '1568:672'
      | '2048:2048'
      | '2304:1728'
      | '1728:2304'
      | '2848:1600'
      | '1600:2848'
      | '2496:1664'
      | '1664:2496'
      | '3136:1344'
      | 'auto_1k'
      | 'auto_2k';

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Images to edit or combine. Refer to them in the prompt by upload order (Figure
     * 1, Figure 2, and so on).
     */
    referenceImages?: Array<Seedream5Flash.ReferenceImage>;
  }

  export namespace Seedream5Flash {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface NanoBanana2_1 {
    model: 'nano_banana_2.1';

    /**
     * A description of the image you want to generate.
     */
    promptText: string;

    /**
     * The resolution of the output image.
     */
    ratio:
      | '1024:1024'
      | '848:1264'
      | '1264:848'
      | '896:1200'
      | '1200:896'
      | '928:1152'
      | '1152:928'
      | '768:1376'
      | '1376:768'
      | '1584:672'
      | '512:2064'
      | '2064:512'
      | '352:2928'
      | '2928:352'
      | '2048:2048'
      | '1696:2528'
      | '2528:1696'
      | '1792:2400'
      | '2400:1792'
      | '1856:2304'
      | '2304:1856'
      | '1536:2752'
      | '2752:1536'
      | '3168:1344'
      | '1024:4128'
      | '4128:1024'
      | '704:5856'
      | '5856:704'
      | '4096:4096'
      | '3392:5056'
      | '5056:3392'
      | '3584:4800'
      | '4800:3584'
      | '3712:4608'
      | '4608:3712'
      | '3072:5504'
      | '5504:3072'
      | '6336:2688'
      | '2048:8256'
      | '8256:2048'
      | '1408:11712'
      | '11712:1408';

    /**
     * The number of images to generate. Increasing this number will affect the number
     * of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Up to 14 images to edit, combine, or use as references for the output.
     */
    referenceImages?: Array<NanoBanana2_1.ReferenceImage>;

    /**
     * How much the model reasons about the prompt before generating. Defaults to
     * medium.
     */
    thinkingLevel?: 'minimal' | 'medium' | 'high';
  }

  export namespace NanoBanana2_1 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text. Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores.
       */
      tag?: string;
    }
  }

  export interface Gemini2_5Flash {
    model: 'gemini_2.5_flash';

    /**
     * This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * The resolution of the output image.
     */
    ratio:
      | '1344:768'
      | '768:1344'
      | '1024:1024'
      | '1184:864'
      | '864:1184'
      | '1536:672'
      | '832:1248'
      | '1248:832'
      | '896:1152'
      | '1152:896';

    /**
     * An array of up to three images to be used as references for the generated image
     * output.
     */
    referenceImages?: Array<Gemini2_5Flash.ReferenceImage>;
  }

  export namespace Gemini2_5Flash {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text. Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }
}

export declare namespace TextToImage {
  export {
    type TextToImageCreateResponse as TextToImageCreateResponse,
    type TextToImageCreateParams as TextToImageCreateParams,
  };
}
