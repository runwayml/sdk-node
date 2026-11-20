// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
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
    params: TextToImageCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<TextToImageCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<TextToImageCreateResponse>(this._client)(
      this._client.post('/v1/text_to_image', {
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
  | TextToImageCreateParams.RecraftV4_1Flash
  | TextToImageCreateParams.RecraftV4_1Vector
  | TextToImageCreateParams.IdeogramVector
  | TextToImageCreateParams.GptImage2_6Sunburst
  | TextToImageCreateParams.GptImage2_6Flare
  | TextToImageCreateParams.Seedream5ProLayers
  | TextToImageCreateParams.Seedream5_5
  | TextToImageCreateParams.Seedream5_5Layers
  | TextToImageCreateParams.MinimaxH3Image
  | TextToImageCreateParams.Gemini2_5Flash;

export declare namespace TextToImageCreateParams {
  export interface Gen4ImageTurbo {
    /**
     * Body param
     */
    model: 'gen4_image_turbo';

    /**
     * Body param: A non-empty string up to 1000 characters (measured in UTF-16 code
     * units). This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image.
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
     * Body param: An array of one to three images to be used as references for the
     * generated image output.
     */
    referenceImages: Array<Gen4ImageTurbo.ReferenceImage>;

    /**
     * Body param: Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Gen4ImageTurbo.ContentModeration;

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
    /**
     * Body param
     */
    model: 'gen4_image';

    /**
     * Body param: A non-empty string up to 1000 characters (measured in UTF-16 code
     * units). This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image.
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
     * Body param: Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Gen4Image.ContentModeration;

    /**
     * Body param: An array of up to three images to be used as references for the
     * generated image output.
     */
    referenceImages?: Array<Gen4Image.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'gpt_image_2';

    /**
     * Body param: A non-empty string up to 32,000 characters describing the desired
     * image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Use `auto` to let the model choose.
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
     * Body param: Background treatment. Defaults to `auto`, which lets the model pick.
     * Use `transparent` to generate a PNG with an alpha-channel background.
     */
    background?: 'transparent' | 'opaque' | 'auto';

    /**
     * Body param: The number of images to generate (1-10). Increasing this number will
     * affect the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: Rendering quality. Higher qualities consume more credits. Defaults
     * to `high`.
     */
    quality?: 'low' | 'medium' | 'high' | 'auto';

    /**
     * Body param: An array of up to 16 images to be used as references for the
     * generated image output. No two images may share the same tag.
     */
    referenceImages?: Array<GptImage2.ReferenceImage>;

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

  export namespace GptImage2 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * An optional label for the reference image. Tags are not sent to the model and
       * cannot be used to reference images in prompt text. Instead, refer to images by
       * their order in this array (for example, "the first image" or "the second
       * image"). Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface GeminiImage3_1Flash {
    /**
     * Body param
     */
    model: 'gemini_image3.1_flash';

    /**
     * Body param: This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image.
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
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation. Up to four images can be
     * generated at once.
     */
    outputCount?: 1 | 4;

    /**
     * Body param: An array of up to 14 images to be used as references for the
     * generated image output. Up to five of those images can pass `subject: "human"`
     * to maintain character consistency, and up to nine of those images can pass
     * `subject: "object"` with high-fidelity images of objects to include in the
     * output.
     */
    referenceImages?: Array<GeminiImage3_1Flash.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'muse_image';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output
     * image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Use `auto` to let the model choose the framing from the prompt.
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
     * Body param: The number of images to generate. Each image costs 1 credit.
     */
    outputCount?: number;

    /**
     * Body param: The file format of the output image. Defaults to png.
     */
    outputFormat?: 'webp' | 'png' | 'jpeg';

    /**
     * Body param: Up to 10 images to guide the generation. When provided, the model
     * edits and combines them as your prompt describes instead of generating from the
     * prompt alone.
     */
    referenceImages?: Array<MuseImage.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'seedream5_pro';

    /**
     * Body param: A non-empty string up to 4,000 characters describing the desired
     * image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Use `auto_1k` or `auto_2k` to let the model pick aspect ratio at a fixed
     * resolution tier.
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
     * Body param: When true, enable live web search so the model can use current
     * brand, trend, or event context. Default false for deterministic output.
     */
    grounding?: boolean;

    /**
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Body param: An array of reference images for multi-image fusion and interactive
     * editing. Reference by upload order in prompt text (Figure 1, Figure 2, etc.).
     */
    referenceImages?: Array<Seedream5Pro.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'seedream5_lite';

    /**
     * Body param: A non-empty string up to 4,000 characters describing the desired
     * image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Also accepts freeform sizes whose width\*height is between 3686400 and 16777216
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
     * Body param: When true, enable live web search so the model can use current
     * brand, trend, or event context. Default false for deterministic output.
     */
    grounding?: boolean;

    /**
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Body param: An array of reference images for multi-image fusion and interactive
     * editing. Reference by upload order in prompt text (Figure 1, Figure 2, etc.).
     */
    referenceImages?: Array<Seedream5Lite.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'grok_imagine_image_2';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output
     * image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * 2K ratios cost 2 additional credits per image. Use `auto_1k` or `auto_2k` to
     * pick a resolution tier and let the model choose the framing from the prompt.
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
     * Body param: When true with exactly one reference image, edit that image directly
     * instead of using it as a loose visual reference. With several reference images
     * the prompt describes how they should be edited or combined. Requires at least
     * one reference image.
     */
    edit?: boolean;

    /**
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: How much rendering effort the model spends on the output. Defaults
     * to `medium`; `low` is faster and costs 2 fewer credits per image.
     */
    quality?: 'low' | 'medium';

    /**
     * Body param: Up to 3 images to guide the generation. Reference them from
     * `promptText` to describe how each should be used. Each adds 1 credit to the
     * generation.
     */
    referenceImages?: Array<GrokImagineImage2.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'gemini_image3.1_flash_lite';

    /**
     * Body param: This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image.
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
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation. Up to four images can be
     * generated at once.
     */
    outputCount?: 1 | 4;

    /**
     * Body param: An array of up to 14 images to be used as references for the
     * generated image output. Up to five can pass `subject: "human"` and up to nine
     * can pass `subject: "object"`.
     */
    referenceImages?: Array<GeminiImage3_1FlashLite.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'gemini_image3_pro';

    /**
     * Body param: This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image.
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
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation. Up to four images can be
     * generated at once.
     */
    outputCount?: 1 | 4;

    /**
     * Body param: An array of up to 14 images to be used as references for the
     * generated image output. Up to five of those images can pass `subject: "human"`
     * to maintain character consistency, and up to nine of those images can pass
     * `subject: "object"` with high-fidelity images of objects to include in the
     * output.
     */
    referenceImages?: Array<GeminiImage3Pro.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'gpt_image_2_5_flare';

    /**
     * Body param: A non-empty string describing the desired image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Use `auto` to let the model choose.
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
     * Body param: Background treatment. Defaults to `auto`, which lets the model pick.
     */
    background?: 'opaque' | 'auto';

    /**
     * Body param: The number of images to generate (1-10). Increasing this number will
     * affect the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: Rendering quality. Higher qualities consume more credits. Defaults
     * to `high`.
     */
    quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';

    /**
     * Body param: An array of up to 16 images to be used as references for the
     * generated image output. No two images may share the same tag. Each reference
     * image adds 1 credit per generated image.
     */
    referenceImages?: Array<GptImage2_5Flare.ReferenceImage>;

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

  export namespace GptImage2_5Flare {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * An optional label for the reference image. Tags are not sent to the model and
       * cannot be used to reference images in prompt text. Instead, refer to images by
       * their order in this array (for example, "the first image" or "the second
       * image"). Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface GptImage2_5Sunburst {
    /**
     * Body param
     */
    model: 'gpt_image_2_5_sunburst';

    /**
     * Body param: A non-empty string describing the desired image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Use `auto` to let the model choose.
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
     * Body param: Background treatment. Defaults to `auto`, which lets the model pick.
     * Use `transparent` to generate a PNG with an alpha-channel background.
     */
    background?: 'transparent' | 'opaque' | 'auto';

    /**
     * Body param: The number of images to generate (1-10). Increasing this number will
     * affect the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: Rendering quality. Higher qualities consume more credits. Defaults
     * to `high`.
     */
    quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';

    /**
     * Body param: An array of up to 16 images to be used as references for the
     * generated image output. No two images may share the same tag. Each reference
     * image adds 1 credit per generated image.
     */
    referenceImages?: Array<GptImage2_5Sunburst.ReferenceImage>;

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

  export namespace GptImage2_5Sunburst {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * An optional label for the reference image. Tags are not sent to the model and
       * cannot be used to reference images in prompt text. Instead, refer to images by
       * their order in this array (for example, "the first image" or "the second
       * image"). Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface BriaFibo1_5 {
    /**
     * Body param
     */
    model: 'bria_fibo_1_5';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output
     * image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * 1MP sizes cost 5 credits per image and 4MP sizes 10.
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
     * Body param: The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Body param: Up to 1 image to guide the generation. The prompt describes how the
     * output should build on it.
     */
    referenceImages?: Array<BriaFibo1_5.ReferenceImage>;

    /**
     * Body param: If unspecified, a random number is chosen. Using the same seed with
     * an identical request reproduces the same image.
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
    /**
     * Body param
     */
    model: 'bria_fibo_edit_1_5';

    /**
     * Body param: An instruction describing how to edit the reference images.
     */
    promptText: string;

    /**
     * Body param: The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Omit it or use `auto` to keep the framing of the first reference image. Choosing
     * a size requires at least 2 reference images; a single image always keeps its own
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
     * Body param: 1 to 4 images to edit. With several, the instruction describes how
     * to combine them.
     */
    referenceImages?: Array<BriaFiboEdit1_5.ReferenceImage>;

    /**
     * Body param: If unspecified, a random number is chosen. Using the same seed with
     * an identical request reproduces the same image.
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
    /**
     * Body param
     */
    model: 'ideogram_4_0';

    /**
     * Body param: Describe the image to generate, or how to remix the reference image.
     */
    promptText: string;

    /**
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: How much rendering effort the model spends on each image. `low`
     * costs 4 credits per image, `medium` 7 and `high` 11.
     */
    quality?: 'low' | 'medium' | 'high';

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
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
     * Body param: An image to remix. The prompt describes how the output should differ
     * from it.
     */
    referenceImages?: Array<Ideogram4_0.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'ideogram_4_5';

    /**
     * Body param: Describe the image to generate, or the changes to make to the
     * reference images.
     */
    promptText: string;

    /**
     * Body param: Precise-edit region: none, auto (requires maskUri), or
     * top,left,bottom,right in original-image pixels, with exclusive maximum edges. A
     * manual region preserves full resolution and all pixels outside it. All masked
     * edit pixels must lie inside a manual region. Auto-fit may fall back to
     * downscaling if the mask is too large. Requires edit-window access.
     */
    contextWindow?: string;

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    maskUri?: string;

    /**
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: When true, edit the first reference image. Requires at least one
     * reference image. Whole-image edits above 4,194,304 pixels are scaled down. Set
     * contextWindow to edit a region at full source resolution; auto-fit may still
     * scale down if the mask cannot fit.
     */
    preciseEdit?: boolean;

    /**
     * Body param: How much rendering effort the model spends on each image. Defaults
     * to `medium` (8 credits per image) when generating from reference images and
     * `high` (25 credits) otherwise, including `preciseEdit`. `low` costs 4 credits
     * and `very_low` 1; `very_low` requires reference images and is not available with
     * `preciseEdit`.
     */
    quality?: 'very_low' | 'low' | 'medium' | 'high';

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Omit it or use `auto` to let the model choose. With reference images, widescreen
     * 1K sizes are `1024:576`, `576:1024`, `1408:704`, `704:1408` instead of
     * `1280:720`, `720:1280`, `1440:720`, `720:1440`. Not available with `maskUri` or
     * `preciseEdit`, where the source and edit window determine output dimensions.
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
     * Body param: Up to 5 images to guide the generation. With `maskUri` or
     * `preciseEdit`, the first image is the one being edited and the rest are
     * references.
     */
    referenceImages?: Array<Ideogram4_5.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'seedream5_flash';

    /**
     * Body param: A description of the image you want to generate.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Use `auto_1k` or `auto_2k` to let the model pick the aspect ratio at a fixed
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
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Body param: Images to edit or combine. Refer to them in the prompt by upload
     * order (Figure 1, Figure 2, and so on).
     */
    referenceImages?: Array<Seedream5Flash.ReferenceImage>;

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
    /**
     * Body param
     */
    model: 'nano_banana_2.1';

    /**
     * Body param: A description of the image you want to generate.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image.
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
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: Up to 14 images to edit, combine, or use as references for the
     * output.
     */
    referenceImages?: Array<NanoBanana2_1.ReferenceImage>;

    /**
     * Body param: How much the model reasons about the prompt before generating.
     * Defaults to medium.
     */
    thinkingLevel?: 'minimal' | 'medium' | 'high';

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

  export interface RecraftV4_1Flash {
    /**
     * Body param
     */
    model: 'recraft_v4_1_flash';

    /**
     * Body param: A description of the image you want to generate.
     */
    promptText: string;

    /**
     * Body param: The output dimensions, expressed as `<width>:<height>`.
     */
    ratio:
      | '1024:1024'
      | '1536:768'
      | '768:1536'
      | '1280:832'
      | '832:1280'
      | '1216:896'
      | '896:1216'
      | '1152:896'
      | '896:1152'
      | '832:1344'
      | '1280:896'
      | '896:1280'
      | '1344:768'
      | '768:1344';

    /**
     * Body param: A preferred background color as a six-digit hex string.
     */
    backgroundColor?: string;

    /**
     * Body param: Preferred colors as six-digit hex strings.
     */
    colors?: Array<string>;

    /**
     * Body param: The number of images to generate. Each image is billed separately.
     */
    outputCount?: number;

    /**
     * Body param: The output file format. Defaults to webp.
     */
    outputFormat?: 'webp' | 'png';

    /**
     * Body param
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

  export interface RecraftV4_1Vector {
    /**
     * Body param
     */
    model: 'recraft_v4_1_vector';

    /**
     * Body param: Describe the vector illustration you want to generate.
     */
    promptText: string;

    /**
     * Body param: The preferred background color as a six-digit hex value. This is a
     * generation hint, not an exact color constraint; the generated background may use
     * a different shade.
     */
    backgroundColor?: string;

    /**
     * Body param: Preferred colors as six-digit hex values, such as #FF8800.
     */
    colors?: Array<string>;

    /**
     * Body param: The width and height declared by the output SVG. Vector artwork can
     * be scaled after generation.
     */
    ratio?: '1024:1024' | '1216:896' | '896:1216' | '1344:768' | '768:1344';

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

  export interface IdeogramVector {
    /**
     * Body param
     */
    model: 'ideogram_vector';

    /**
     * Body param: Describe the vector illustration you want to generate.
     */
    promptText: string;

    /**
     * Body param: Rendering quality. Higher quality costs more credits.
     */
    quality?: 'low' | 'medium' | 'high';

    /**
     * Body param: Let the model choose the framing of the SVG.
     */
    ratio?: 'auto';

    /**
     * Body param: Images to guide the illustration. To trace a source image, use
     * image_to_vector instead.
     */
    referenceImages?: Array<IdeogramVector.ReferenceImage>;

    /**
     * Body param
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

  export namespace IdeogramVector {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface GptImage2_6Sunburst {
    /**
     * Body param
     */
    model: 'gpt_image_2_6_sunburst';

    /**
     * Body param: A non-empty string describing the desired image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Use `auto` to let the model choose.
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
     * Body param: Background treatment. Defaults to `auto`, which lets the model pick.
     * Use `transparent` for an alpha-channel background, which `jpeg` output does not
     * support.
     */
    background?: 'transparent' | 'opaque' | 'auto';

    /**
     * Body param: Number of animation frames. Only supported for GIF output.
     */
    frameCount?: number;

    /**
     * Body param: Duration of each animation frame in milliseconds. Only supported for
     * GIF output.
     */
    frameDurationMs?: number;

    /**
     * Body param: The number of images to generate (1-10). Increasing this number will
     * affect the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: Output format. Defaults to PNG. JPEG and WebP produce smaller files;
     * JPEG cannot have a transparent background. GIF and SVG cannot use reference
     * images; GIF requires ratio auto.
     */
    outputFormat?: 'png' | 'jpeg' | 'webp' | 'gif' | 'svg';

    /**
     * Body param: Rendering quality. Higher qualities consume more credits. Defaults
     * to `high`.
     */
    quality?: 'low' | 'medium' | 'high';

    /**
     * Body param: How much reasoning to use before rendering. Defaults to `high`.
     */
    reasoningEffort?: 'low' | 'medium' | 'high';

    /**
     * Body param: An array of up to 16 images to be used as references for the
     * generated image output. No two images may share the same tag. Each reference
     * image adds 1 credit per generated image.
     */
    referenceImages?: Array<GptImage2_6Sunburst.ReferenceImage>;

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

  export namespace GptImage2_6Sunburst {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * An optional label for the reference image. Tags are not sent to the model and
       * cannot be used to reference images in prompt text. Instead, refer to images by
       * their order in this array (for example, "the first image" or "the second
       * image"). Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface GptImage2_6Flare {
    /**
     * Body param
     */
    model: 'gpt_image_2_6_flare';

    /**
     * Body param: A non-empty string describing the desired image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Use `auto` to let the model choose.
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
     * Body param: Background treatment. Defaults to `auto`, which lets the model pick.
     * Use `transparent` for an alpha-channel background, which `jpeg` output does not
     * support.
     */
    background?: 'transparent' | 'opaque' | 'auto';

    /**
     * Body param: Number of animation frames. Only supported for GIF output.
     */
    frameCount?: number;

    /**
     * Body param: Duration of each animation frame in milliseconds. Only supported for
     * GIF output.
     */
    frameDurationMs?: number;

    /**
     * Body param: The number of images to generate (1-10). Increasing this number will
     * affect the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: Output format. Defaults to PNG. JPEG and WebP produce smaller files;
     * JPEG cannot have a transparent background. GIF and SVG cannot use reference
     * images; GIF requires ratio auto.
     */
    outputFormat?: 'png' | 'jpeg' | 'webp' | 'gif' | 'svg';

    /**
     * Body param: Rendering quality. Higher qualities consume more credits. Defaults
     * to `high`.
     */
    quality?: 'low' | 'medium' | 'high';

    /**
     * Body param: How much reasoning to use before rendering. Defaults to `high`.
     */
    reasoningEffort?: 'low' | 'medium' | 'high';

    /**
     * Body param: An array of up to 16 images to be used as references for the
     * generated image output. No two images may share the same tag. Each reference
     * image adds 1 credit per generated image.
     */
    referenceImages?: Array<GptImage2_6Flare.ReferenceImage>;

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

  export namespace GptImage2_6Flare {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;

      /**
       * An optional label for the reference image. Tags are not sent to the model and
       * cannot be used to reference images in prompt text. Instead, refer to images by
       * their order in this array (for example, "the first image" or "the second
       * image"). Must be 3-16 characters, start with a letter, and use only letters,
       * digits, and underscores (no hyphens or other punctuation).
       */
      tag?: string;
    }
  }

  export interface Seedream5ProLayers {
    /**
     * Body param
     */
    model: 'seedream5_pro_layers';

    /**
     * Body param: The image to split into editable layers. Layer ordering and
     * positioning are returned in the completed task’s layers field.
     */
    referenceImages: Array<Seedream5ProLayers.ReferenceImage>;

    /**
     * Body param: Prompt optimization: standard prioritizes quality; fast reduces
     * generation time. Defaults to standard.
     */
    optimizePromptMode?: 'standard' | 'fast';

    /**
     * Body param: Base image format; defaults to png. Separated layers always use PNG
     * with transparency.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Body param: Optional instructions describing which elements to separate. Omit to
     * split the image automatically.
     */
    promptText?: string;

    /**
     * Body param: Output resolution tier. Defaults to auto, which adapts to the input
     * image. The base image and layers preserve their respective aspect ratios.
     */
    resolution?: 'auto' | '1k' | '1.5k' | '2k';

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

  export namespace Seedream5ProLayers {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedream5_5 {
    /**
     * Body param
     */
    model: 'seedream5.5';

    /**
     * Body param: A description of the image you want to generate.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * Use `auto_1k`, `auto_1.5k` or `auto_2k` to let the model pick the aspect ratio
     * at a fixed resolution tier.
     */
    ratio:
      | '1024:1024'
      | '1152:864'
      | '864:1152'
      | '1424:800'
      | '800:1424'
      | '1248:832'
      | '832:1248'
      | '1568:672'
      | '1536:1536'
      | '1792:1344'
      | '1344:1792'
      | '2048:1152'
      | '1152:2048'
      | '1872:1248'
      | '1248:1872'
      | '2352:1008'
      | '2048:2048'
      | '2368:1776'
      | '1776:2368'
      | '2816:1584'
      | '1584:2816'
      | '2496:1664'
      | '1664:2496'
      | '3136:1344'
      | 'auto_1k'
      | 'auto_1.5k'
      | 'auto_2k';

    /**
     * Body param: Whether the image has a transparent or an opaque background. A
     * transparent background needs the png output format. Omit to let the model decide
     * from the prompt.
     */
    background?: 'transparent' | 'opaque';

    /**
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: The file format of the output image. Defaults to png.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Body param: Images to edit or combine. Refer to them in the prompt by upload
     * order (Figure 1, Figure 2, and so on).
     */
    referenceImages?: Array<Seedream5_5.ReferenceImage>;

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

  export namespace Seedream5_5 {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Seedream5_5Layers {
    /**
     * Body param
     */
    model: 'seedream5.5_layers';

    /**
     * Body param: The image to split into editable layers. Layer ordering and
     * positioning are returned in the completed task’s layers field.
     */
    referenceImages: Array<Seedream5_5Layers.ReferenceImage>;

    /**
     * Body param: The most images the task may return, counting the base image. Each
     * returned image is billed separately. Defaults to 30.
     */
    maxImages?: number;

    /**
     * Body param: Base image format; defaults to png. Separated layers always use PNG
     * with transparency.
     */
    outputFormat?: 'png' | 'jpeg';

    /**
     * Body param: Optional instructions describing which elements to separate. Omit to
     * split the image automatically.
     */
    promptText?: string;

    /**
     * Body param: Output resolution tier. Defaults to auto, which adapts to the input
     * image. The base image and layers preserve their respective aspect ratios.
     */
    resolution?: 'auto' | '1k' | '1.5k' | '2k';

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

  export namespace Seedream5_5Layers {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface MinimaxH3Image {
    /**
     * Body param
     */
    model: 'minimax_h3_image';

    /**
     * Body param: A non-empty text prompt describing what should appear in the output
     * image.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image, expressed as `<width>:<height>`.
     * 4K ratios cost more credits per image than 1K and 2K. Use `auto_1k`, `auto_2k`
     * or `auto_4k` to pick a resolution tier and let the model choose the framing from
     * the prompt.
     */
    ratio:
      | '1024:1024'
      | '1152:928'
      | '928:1152'
      | '1184:896'
      | '896:1184'
      | '1248:832'
      | '832:1248'
      | '1376:768'
      | '768:1376'
      | '1440:736'
      | '736:1440'
      | '1568:672'
      | '672:1568'
      | '1760:576'
      | '576:1760'
      | '2048:2048'
      | '2304:1824'
      | '1824:2304'
      | '2368:1760'
      | '1760:2368'
      | '2496:1664'
      | '1664:2496'
      | '2720:1536'
      | '1536:2720'
      | '2912:1440'
      | '1440:2912'
      | '3136:1344'
      | '1344:3136'
      | '3552:1184'
      | '1184:3552'
      | '4096:4096'
      | '4576:3648'
      | '3648:4576'
      | '4736:3552'
      | '3552:4736'
      | '5024:3360'
      | '3360:5024'
      | '5472:3072'
      | '3072:5472'
      | '5792:2912'
      | '2912:5792'
      | '6272:2688'
      | '2688:6272'
      | '7104:2368'
      | '2368:7104'
      | 'auto_1k'
      | 'auto_2k'
      | 'auto_4k';

    /**
     * Body param: When true, generate with the faster MiniMax H3 Image Highspeed
     * model, which costs more credits per image. Defaults to false.
     */
    highspeed?: boolean;

    /**
     * Body param: The number of images to generate. Increasing this number will affect
     * the number of credits consumed by the generation.
     */
    outputCount?: number;

    /**
     * Body param: Up to 16 images to edit or combine. Refer to them in the prompt by
     * upload order (image 1, image 2, and so on). Each reference image adds to the
     * credits per image.
     */
    referenceImages?: Array<MinimaxH3Image.ReferenceImage>;

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

  export namespace MinimaxH3Image {
    export interface ReferenceImage {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Gemini2_5Flash {
    /**
     * Body param
     */
    model: 'gemini_2.5_flash';

    /**
     * Body param: This should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * Body param: The resolution of the output image.
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
     * Body param: An array of up to three images to be used as references for the
     * generated image output.
     */
    referenceImages?: Array<Gemini2_5Flash.ReferenceImage>;

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
