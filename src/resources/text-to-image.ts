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
  id: string;
}

export type TextToImageCreateParams =
  | TextToImageCreateParams.Gen4ImageTurbo
  | TextToImageCreateParams.Gen4Image
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
