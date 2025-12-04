// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class TextToImage extends APIResource {
  /**
   * This endpoint will start a new task to generate images from text and/or image(s)
   */
  create(body: TextToImageCreateParams, options?: RequestOptions): APIPromise<TextToImageCreateResponse> {
    return this._client.post('/v1/text_to_image', { body, ...options });
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
  | TextToImageCreateParams.Gemini3Pro
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

  export interface Gemini3Pro {
    model: 'gemini_3_pro';

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
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
     * An array of up to 14 images to be used as references for the generated image
     * output. Up to five of those images can pass `subject: "human"` to maintain
     * character consistency, and up to nine of those images can pass
     * `subject: "object"` with high-fidelity images of objects to include in the
     * output.
     */
    referenceImages?: Array<Gemini3Pro.ReferenceImage>;
  }

  export namespace Gemini3Pro {
    export interface ReferenceImage {
      /**
       * Whether this is a reference of a human subject (for character consistency) or an
       * object that appears in the output.
       */
      subject: 'object' | 'human';

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

  export interface Gemini2_5Flash {
    model: 'gemini_2.5_flash';

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
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
