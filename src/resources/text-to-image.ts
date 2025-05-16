// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class TextToImage extends APIResource {
  /**
   * This endpoint will start a new task to generate images from text.
   */
  create(
    body: TextToImageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TextToImageCreateResponse> {
    return this._client.post('/v1/text_to_image', { body, ...options });
  }
}

export interface TextToImageCreateResponse {
  /**
   * The ID of the newly created task.
   */
  id: string;
}

export interface TextToImageCreateParams {
  /**
   * The model variant to use.
   */
  model: 'gen4_image';

  /**
   * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
   * should describe in detail what should appear in the output.
   */
  promptText: string;

  /**
   * The resolution of the output image(s).
   */
  ratio:
    | '1920:1080'
    | '1080:1920'
    | '1024:1024'
    | '1360:768'
    | '1080:1080'
    | '1168:880'
    | '1440:1080'
    | '1080:1440'
    | '1808:768'
    | '2112:912';

  /**
   * Settings that affect the behavior of the content moderation system.
   */
  contentModeration?: TextToImageCreateParams.ContentModeration;

  /**
   * An array of images to be used as references for the generated image output. Up
   * to three reference images can be provided.
   */
  referenceImages?: Array<TextToImageCreateParams.ReferenceImage>;

  /**
   * If unspecified, a random number is chosen. Varying the seed integer is a way to
   * get different results for the same other request parameters. Using the same seed
   * integer for an identical request will produce similar results.
   */
  seed?: number;
}

export namespace TextToImageCreateParams {
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
     * A HTTPS URL or data URI containing an encoded image to be used as reference for
     * the generated output image. See [our docs](/assets/inputs#images) on image
     * inputs for more information.
     */
    uri: string;

    /**
     * A name used to refer to the image reference, from 3 to 16 characters in length.
     * Tags must be alphanumeric (plus underscores) and start with a letter. You can
     * refer to the reference image's tag in the prompt text with at-mention syntax:
     * `@tag`. Tags are case-sensitive.
     */
    tag?: string;
  }
}

export declare namespace TextToImage {
  export {
    type TextToImageCreateResponse as TextToImageCreateResponse,
    type TextToImageCreateParams as TextToImageCreateParams,
  };
}
