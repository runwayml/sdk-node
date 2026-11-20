// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class Recipes extends APIResource {
  /**
   * Localize an existing ad image for a target language, preserving visual creative
   * while adapting on-screen messaging.
   */
  adLocalization(
    params: RecipeAdLocalizationParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeAdLocalizationResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<RecipeAdLocalizationResponse>(this._client)(
      this._client.post('/v1/recipes/ad_localization', {
        body,
        ...options,
        headers: buildHeaders([
          { ...(xRunwayTags != null ? { 'X-Runway-Tags': xRunwayTags } : undefined) },
          options?.headers,
        ]),
      }),
    );
  }

  /**
   * Generate a polished marketing stock image from a text brief and optional brand
   * logo image.
   */
  marketingStockImage(
    params: RecipeMarketingStockImageParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeMarketingStockImageResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<RecipeMarketingStockImageResponse>(this._client)(
      this._client.post('/v1/recipes/marketing_stock_image', {
        body,
        ...options,
        headers: buildHeaders([
          { ...(xRunwayTags != null ? { 'X-Runway-Tags': xRunwayTags } : undefined) },
          options?.headers,
        ]),
      }),
    );
  }

  /**
   * Generate a multi-cut video from a story prompt (auto mode) or a custom shot list
   * (custom mode).
   */
  multiShotVideo(
    params: RecipeMultiShotVideoParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeMultiShotVideoResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<RecipeMultiShotVideoResponse>(this._client)(
      this._client.post('/v1/recipes/multi_shot_video', {
        body,
        ...options,
        headers: buildHeaders([
          { ...(xRunwayTags != null ? { 'X-Runway-Tags': xRunwayTags } : undefined) },
          options?.headers,
        ]),
      }),
    );
  }

  /**
   * Generate a cinematic product ad from product images, optional style references,
   * product info, and creative direction.
   */
  productAd(
    params: RecipeProductAdParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeProductAdResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<RecipeProductAdResponse>(this._client)(
      this._client.post('/v1/recipes/product_ad', {
        body,
        ...options,
        headers: buildHeaders([
          { ...(xRunwayTags != null ? { 'X-Runway-Tags': xRunwayTags } : undefined) },
          options?.headers,
        ]),
      }),
    );
  }

  /**
   * Generate four fashion campaign images from a product image and style brief.
   */
  productCampaignImage(
    params: RecipeProductCampaignImageParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeProductCampaignImageResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<RecipeProductCampaignImageResponse>(this._client)(
      this._client.post('/v1/recipes/product_campaign_image', {
        body,
        ...options,
        headers: buildHeaders([
          { ...(xRunwayTags != null ? { 'X-Runway-Tags': xRunwayTags } : undefined) },
          options?.headers,
        ]),
      }),
    );
  }

  /**
   * Replace the product in a reference video with a new product, preserving camera
   * motion, lighting, and scene composition.
   */
  productSwap(
    params: RecipeProductSwapParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeProductSwapResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<RecipeProductSwapResponse>(this._client)(
      this._client.post('/v1/recipes/product_swap', {
        body,
        ...options,
        headers: buildHeaders([
          { ...(xRunwayTags != null ? { 'X-Runway-Tags': xRunwayTags } : undefined) },
          options?.headers,
        ]),
      }),
    );
  }

  /**
   * Generate a vertical user-generated content ad from a character image, product
   * image, product details, and optional creative direction.
   */
  productUgc(
    params: RecipeProductUgcParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeProductUgcResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<RecipeProductUgcResponse>(this._client)(
      this._client.post('/v1/recipes/product_ugc', {
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

export interface RecipeAdLocalizationResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: RecipeAdLocalizationResponse.EstimatedCost;
}

export namespace RecipeAdLocalizationResponse {
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

export interface RecipeMarketingStockImageResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: RecipeMarketingStockImageResponse.EstimatedCost;
}

export namespace RecipeMarketingStockImageResponse {
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

export interface RecipeMultiShotVideoResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: RecipeMultiShotVideoResponse.EstimatedCost;
}

export namespace RecipeMultiShotVideoResponse {
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

export interface RecipeProductAdResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: RecipeProductAdResponse.EstimatedCost;
}

export namespace RecipeProductAdResponse {
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

export interface RecipeProductCampaignImageResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: RecipeProductCampaignImageResponse.EstimatedCost;
}

export namespace RecipeProductCampaignImageResponse {
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

export interface RecipeProductSwapResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: RecipeProductSwapResponse.EstimatedCost;
}

export namespace RecipeProductSwapResponse {
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

export interface RecipeProductUgcResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: RecipeProductUgcResponse.EstimatedCost;
}

export namespace RecipeProductUgcResponse {
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

export interface RecipeAdLocalizationParams {
  /**
   * Body param: Reference ad image to localize. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  referenceImage: RecipeAdLocalizationParams.ReferenceImage;

  /**
   * Body param: Target language for the localized ad. Use ISO-style codes (e.g. "ja"
   * for Japanese, "es" for Spanish).
   */
  targetLanguage:
    | 'ar'
    | 'zh'
    | 'zh-Hant'
    | 'nl'
    | 'en'
    | 'fr'
    | 'de'
    | 'hi'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'pl'
    | 'pt'
    | 'ru'
    | 'es'
    | 'sv'
    | 'th'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'el';

  /**
   * Body param: Workflow version. Use a dated version (e.g. "2026-06") to pin
   * behavior, or "unsafe-latest" to track the newest stable version (may break
   * without notice).
   */
  version: '2026-06' | 'unsafe-latest';

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

export namespace RecipeAdLocalizationParams {
  /**
   * Reference ad image to localize. See [our docs](/assets/inputs#images) on image
   * inputs.
   */
  export interface ReferenceImage {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }
}

export interface RecipeMarketingStockImageParams {
  /**
   * Body param: Marketing image brief. Describe the subject, audience, channel,
   * desired mood, setting, and any constraints.
   */
  prompt: string;

  /**
   * Body param: Workflow version. Use a dated version (e.g. "2026-06") to pin
   * behavior, or "unsafe-latest" to track the newest stable version (may break
   * without notice).
   */
  version: '2026-06' | 'unsafe-latest';

  /**
   * Body param: The number of images to generate (1-4). Defaults to 4. Increasing
   * this number affects credits consumed.
   */
  outputCount?: number;

  /**
   * Body param: GPT Image 2 rendering quality (`low`, `medium`, or `high`). Lower
   * settings are faster and use fewer credits; `high` (default) is slowest and
   * highest fidelity.
   */
  quality?: 'low' | 'medium' | 'high';

  /**
   * Body param: Optional brand logo image to guide the generated marketing stock
   * image. See [our docs](/assets/inputs#images) on image inputs.
   */
  referenceImage?: RecipeMarketingStockImageParams.ReferenceImage;

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

export namespace RecipeMarketingStockImageParams {
  /**
   * Optional brand logo image to guide the generated marketing stock image. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  export interface ReferenceImage {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }
}

export type RecipeMultiShotVideoParams =
  | RecipeMultiShotVideoParams.Variant0
  | RecipeMultiShotVideoParams.Variant1;

export declare namespace RecipeMultiShotVideoParams {
  export interface Variant0 {
    /**
     * Body param: Workflow mode. `auto` decomposes a story prompt into exactly 5
     * shots.
     */
    mode: 'auto';

    /**
     * Body param: Story prompt for auto mode.
     */
    prompt: string;

    /**
     * Body param: Workflow version. Use a dated version (e.g. "2026-06") to pin
     * behavior, or "unsafe-latest" to track the newest stable version (may break
     * without notice).
     */
    version: '2026-06' | 'unsafe-latest';

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Total duration of the output video in seconds. Defaults to 10
     * seconds.
     */
    duration?: 5 | 10 | 15;

    /**
     * Body param: Optional image used as the first frame of the output video. See
     * [our docs](/assets/inputs#images) on image inputs.
     */
    firstFrame?: Variant0.FirstFrame;

    /**
     * Body param: Output dimensions as width:height. 720p ratios (`1280:720`,
     * `720:1280`, `960:960`) use the standard tier; 1080p ratios (`1920:1080`,
     * `1080:1920`, `1440:1440`) use the pro tier. Defaults to `1280:720`.
     */
    ratio?: '1280:720' | '720:1280' | '960:960' | '1920:1080' | '1080:1920' | '1440:1440';

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
     * Optional image used as the first frame of the output video. See
     * [our docs](/assets/inputs#images) on image inputs.
     */
    export interface FirstFrame {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }

  export interface Variant1 {
    /**
     * Body param: Workflow mode. `custom` polishes a user-provided shot list of 3-5
     * shots.
     */
    mode: 'custom';

    /**
     * Body param: Shot list for custom mode (3-5 shots). Per-shot durations must sum
     * to `duration`.
     */
    shots: Array<Variant1.Shot>;

    /**
     * Body param: Workflow version. Use a dated version (e.g. "2026-06") to pin
     * behavior, or "unsafe-latest" to track the newest stable version (may break
     * without notice).
     */
    version: '2026-06' | 'unsafe-latest';

    /**
     * Body param: Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Body param: Total duration of the output video in seconds. Defaults to 10
     * seconds.
     */
    duration?: 5 | 10 | 15;

    /**
     * Body param: Optional image used as the first frame of the output video. See
     * [our docs](/assets/inputs#images) on image inputs.
     */
    firstFrame?: Variant1.FirstFrame;

    /**
     * Body param: Output dimensions as width:height. 720p ratios (`1280:720`,
     * `720:1280`, `960:960`) use the standard tier; 1080p ratios (`1920:1080`,
     * `1080:1920`, `1440:1440`) use the pro tier. Defaults to `1280:720`.
     */
    ratio?: '1280:720' | '720:1280' | '960:960' | '1920:1080' | '1080:1920' | '1440:1440';

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

  export namespace Variant1 {
    export interface Shot {
      /**
       * Duration of this shot in seconds.
       */
      duration: number;

      /**
       * Shot description prompt.
       */
      prompt: string;
    }

    /**
     * Optional image used as the first frame of the output video. See
     * [our docs](/assets/inputs#images) on image inputs.
     */
    export interface FirstFrame {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
       * [our docs](/assets/inputs#images) on image inputs for more information.
       */
      uri: string;
    }
  }
}

export interface RecipeProductAdParams {
  /**
   * Body param: Product images (1-10). Multiple angles of the same product. All
   * images inform product analysis and reference generation; only the first image is
   * used as the primary product reference in the storyboard grid. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  productImages: Array<RecipeProductAdParams.ProductImage>;

  /**
   * Body param: Workflow version. Use a dated version (e.g. "2026-07") to pin
   * behavior, or "unsafe-latest" to track the newest stable version (may break
   * without notice).
   */
  version: '2026-06' | '2026-07' | 'unsafe-latest';

  /**
   * Body param: Whether to generate audio for the video.
   */
  audio?: boolean;

  /**
   * Body param: Duration of the output video in seconds (4-15). Defaults to 10
   * seconds.
   */
  duration?: number;

  /**
   * Body param: Optional product description and specifications to inform creative
   * direction and which product elements to highlight.
   */
  productInfo?: string;

  /**
   * Body param: The resolution of the output video.
   */
  ratio?:
    | '1280:720'
    | '720:1280'
    | '960:960'
    | '834:1112'
    | '1920:1080'
    | '1080:1920'
    | '1440:1440'
    | '1248:1664';

  /**
   * Body param: Optional style reference images (0-4). Defines the visual treatment
   * (lighting, palette, mood). Treated as a moodboard when multiple are provided.
   */
  styleImages?: Array<RecipeProductAdParams.StyleImage>;

  /**
   * Body param: Optional creative direction describing brand voice, product framing,
   * scene specifics, lighting, camera motion, and narrative.
   */
  userConcept?: string;

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

export namespace RecipeProductAdParams {
  export interface ProductImage {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }

  export interface StyleImage {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }
}

export interface RecipeProductCampaignImageParams {
  /**
   * Body param: Product image to preserve across the generated campaign. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  image: RecipeProductCampaignImageParams.Image;

  /**
   * Body param: Style / creative brief for the fashion campaign, e.g. "High-key
   * fashion editorial, gorpcore-meets-blokecore-meets-Y2K".
   */
  prompt: string;

  /**
   * Body param: Workflow version. Use a dated version (e.g. "2026-06") to pin
   * behavior, or "unsafe-latest" to track the newest stable version (may break
   * without notice).
   */
  version: '2026-06' | 'unsafe-latest';

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

export namespace RecipeProductCampaignImageParams {
  /**
   * Product image to preserve across the generated campaign. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  export interface Image {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }
}

export interface RecipeProductSwapParams {
  /**
   * Body param: Reference images of the new product (1-10). Supply multiple angles
   * when the reference video shows the product from different views - optionally
   * label each with `view` ("front", "side", or "back"). A single pre-composed
   * reference sheet is also supported (omit `view`). See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  newProductImages: Array<RecipeProductSwapParams.NewProductImage>;

  /**
   * Body param: Image of the original product being swapped out. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  originalProductImage: RecipeProductSwapParams.OriginalProductImage;

  /**
   * Body param: Reference video containing the product to swap. Duration must be
   * between 1.8 and 15 seconds. See [our docs](/assets/inputs#videos) on video
   * inputs.
   */
  referenceVideo: RecipeProductSwapParams.ReferenceVideo;

  /**
   * Body param: Workflow version. Use a dated version (e.g. "2026-06") to pin
   * behavior, or "unsafe-latest" to track the newest stable version (may break
   * without notice).
   */
  version: '2026-06' | 'unsafe-latest';

  /**
   * Body param: Whether to generate audio for the video.
   */
  audio?: boolean;

  /**
   * Body param: Duration of the output video in seconds (4-15). Defaults to 10
   * seconds.
   */
  duration?: number;

  /**
   * Body param: Output video resolution. Defaults to 720p.
   */
  resolution?: '720p' | '1080p';

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

export namespace RecipeProductSwapParams {
  export interface NewProductImage {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;

    /**
     * Optional view label for this reference (front, side, or back). Omit when
     * supplying a single reference sheet or when view labels are unknown.
     */
    view?: 'front' | 'side' | 'back';
  }

  /**
   * Image of the original product being swapped out. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  export interface OriginalProductImage {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }

  /**
   * Reference video containing the product to swap. Duration must be between 1.8 and
   * 15 seconds. See [our docs](/assets/inputs#videos) on video inputs.
   */
  export interface ReferenceVideo {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    uri: string;
  }
}

export interface RecipeProductUgcParams {
  /**
   * Body param: Image of the character who will appear on camera in the UGC video.
   * Aspect ratio (width / height) must be between 0.4 and 4. See
   * [our docs](/assets/inputs#images) for image input requirements.
   */
  characterImage: RecipeProductUgcParams.CharacterImage;

  /**
   * Body param: Image of the product being promoted. Aspect ratio (width / height)
   * must be between 0.4 and 4. See [our docs](/assets/inputs#images) for image input
   * requirements.
   */
  productImage: RecipeProductUgcParams.ProductImage;

  /**
   * Body param: Workflow version. Use a dated version (e.g. "2026-06") to pin
   * behavior, or "unsafe-latest" to track the newest stable version (may break
   * without notice).
   */
  version: '2026-06' | 'unsafe-latest';

  /**
   * Body param: Whether to generate audio for the video.
   */
  audio?: boolean;

  /**
   * Body param: Duration of the output video in seconds (4-15). Defaults to 15
   * seconds.
   */
  duration?: number;

  /**
   * Body param: Product details and creative brief - what the product is, key
   * benefits, and any specifics the script should reference.
   */
  productInfo?: string;

  /**
   * Body param: The resolution of the output video.
   */
  ratio?: '720:1280' | '1080:1920';

  /**
   * Body param: Optional creative direction for the UGC video - tone, voice
   * register, specific message, or an entire dialog script.
   */
  userConcept?: string;

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

export namespace RecipeProductUgcParams {
  /**
   * Image of the character who will appear on camera in the UGC video. Aspect ratio
   * (width / height) must be between 0.4 and 4. See
   * [our docs](/assets/inputs#images) for image input requirements.
   */
  export interface CharacterImage {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }

  /**
   * Image of the product being promoted. Aspect ratio (width / height) must be
   * between 0.4 and 4. See [our docs](/assets/inputs#images) for image input
   * requirements.
   */
  export interface ProductImage {
    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
     */
    uri: string;
  }
}

export declare namespace Recipes {
  export {
    type RecipeAdLocalizationResponse as RecipeAdLocalizationResponse,
    type RecipeMarketingStockImageResponse as RecipeMarketingStockImageResponse,
    type RecipeMultiShotVideoResponse as RecipeMultiShotVideoResponse,
    type RecipeProductAdResponse as RecipeProductAdResponse,
    type RecipeProductCampaignImageResponse as RecipeProductCampaignImageResponse,
    type RecipeProductSwapResponse as RecipeProductSwapResponse,
    type RecipeProductUgcResponse as RecipeProductUgcResponse,
    type RecipeAdLocalizationParams as RecipeAdLocalizationParams,
    type RecipeMarketingStockImageParams as RecipeMarketingStockImageParams,
    type RecipeMultiShotVideoParams as RecipeMultiShotVideoParams,
    type RecipeProductAdParams as RecipeProductAdParams,
    type RecipeProductCampaignImageParams as RecipeProductCampaignImageParams,
    type RecipeProductSwapParams as RecipeProductSwapParams,
    type RecipeProductUgcParams as RecipeProductUgcParams,
  };
}
