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
}

export type TextToImageCreateParams =
  | TextToImageCreateParams.Gen4ImageTurbo
  | TextToImageCreateParams.Gen4Image
  | TextToImageCreateParams.GptImage2
  | TextToImageCreateParams.GeminiImage3Pro
  | TextToImageCreateParams.GeminiImage3_1Flash
  | TextToImageCreateParams.Seedream5Pro
  | TextToImageCreateParams.Seedream5Lite
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
       * A HTTPS URL.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text.
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
       * A HTTPS URL.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text.
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
     * Background treatment. Defaults to `auto`, which lets the model pick.
     * `transparent` is not supported by this model.
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
    quality?: 'low' | 'medium' | 'high' | 'auto';

    /**
     * An array of up to 16 images to be used as references for the generated image
     * output.
     */
    referenceImages?: Array<GptImage2.ReferenceImage>;
  }

  export namespace GptImage2 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This may be used to reference the image
       * in prompt text.
       */
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
       * A HTTPS URL.
       */
      uri: string;

      /**
       * Whether this is a reference of a human subject (for character consistency) or an
       * object that appears in the output.
       */
      subject?: 'object' | 'human';

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text.
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
       * A HTTPS URL.
       */
      uri: string;

      /**
       * Whether this is a reference of a human subject (for character consistency) or an
       * object that appears in the output.
       */
      subject?: 'object' | 'human';

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text.
       */
      tag?: string;
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
       * A HTTPS URL.
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
     * The resolution of the output image, expressed as `<width>:<height>`.
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
      | '4704:2016';

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
       * A HTTPS URL.
       */
      uri: string;
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
       * A HTTPS URL.
       */
      uri: string;

      /**
       * A tag to identify the reference image. This is used to reference the image in
       * prompt text.
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
