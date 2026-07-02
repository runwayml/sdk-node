// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class Recipes extends APIResource {
  /**
   * Generate a polished marketing stock image from a text brief and optional brand
   * logo image.
   */
  marketingStockImage(
    body: RecipeMarketingStockImageParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeMarketingStockImageResponse> {
    return wrapAsWaitableResource<RecipeMarketingStockImageResponse>(this._client)(
      this._client.post('/v1/recipes/marketing_stock_image', { body, ...options }),
    );
  }

  /**
   * Generate a multi-cut video from a story prompt (auto mode) or a custom shot list
   * (custom mode).
   */
  multiShotVideo(
    body: RecipeMultiShotVideoParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeMultiShotVideoResponse> {
    return wrapAsWaitableResource<RecipeMultiShotVideoResponse>(this._client)(
      this._client.post('/v1/recipes/multi_shot_video', { body, ...options }),
    );
  }

  /**
   * Generate a cinematic product ad from product images, optional style references,
   * product info, and creative direction.
   */
  productAd(
    body: RecipeProductAdParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeProductAdResponse> {
    return wrapAsWaitableResource<RecipeProductAdResponse>(this._client)(
      this._client.post('/v1/recipes/product_ad', { body, ...options }),
    );
  }

  /**
   * Generate four fashion campaign images from a product image and style brief.
   */
  productCampaignImage(
    body: RecipeProductCampaignImageParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeProductCampaignImageResponse> {
    return wrapAsWaitableResource<RecipeProductCampaignImageResponse>(this._client)(
      this._client.post('/v1/recipes/product_campaign_image', { body, ...options }),
    );
  }

  /**
   * Replace the product in a reference video with a new product, preserving camera
   * motion, lighting, and scene composition.
   */
  productSwap(
    body: RecipeProductSwapParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeProductSwapResponse> {
    return wrapAsWaitableResource<RecipeProductSwapResponse>(this._client)(
      this._client.post('/v1/recipes/product_swap', { body, ...options }),
    );
  }

  /**
   * Generate a vertical user-generated content ad from a character image, product
   * image, product details, and optional creative direction.
   */
  productUgc(
    body: RecipeProductUgcParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<RecipeProductUgcResponse> {
    return wrapAsWaitableResource<RecipeProductUgcResponse>(this._client)(
      this._client.post('/v1/recipes/product_ugc', { body, ...options }),
    );
  }
}

export interface RecipeMarketingStockImageResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export interface RecipeMultiShotVideoResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export interface RecipeProductAdResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export interface RecipeProductCampaignImageResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export interface RecipeProductSwapResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export interface RecipeProductUgcResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export interface RecipeMarketingStockImageParams {
  /**
   * Marketing image brief. Describe the subject, audience, channel, desired mood,
   * setting, and any constraints.
   */
  prompt: string;

  /**
   * Workflow version. Use a dated version (e.g. "2026-06") to pin behavior, or
   * "unsafe-latest" to track the newest stable version (may break without notice).
   */
  version: '2026-06' | 'unsafe-latest';

  /**
   * The number of images to generate (1–4). Defaults to 4. Increasing this number
   * affects credits consumed.
   */
  outputCount?: number;

  /**
   * GPT Image 2 rendering quality (`low`, `medium`, or `high`). Lower settings are
   * faster and use fewer credits; `high` (default) is slowest and highest fidelity.
   */
  quality?: 'low' | 'medium' | 'high';

  /**
   * Optional brand logo image to guide the generated marketing stock image. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  referenceImage?: RecipeMarketingStockImageParams.ReferenceImage;
}

export namespace RecipeMarketingStockImageParams {
  /**
   * Optional brand logo image to guide the generated marketing stock image. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  export interface ReferenceImage {
    /**
     * A HTTPS URL.
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
     * Workflow mode. `auto` decomposes a story prompt into exactly 5 shots.
     */
    mode: 'auto';

    /**
     * Story prompt for auto mode.
     */
    prompt: string;

    /**
     * Workflow version. Use a dated version (e.g. "2026-06") to pin behavior, or
     * "unsafe-latest" to track the newest stable version (may break without notice).
     */
    version: '2026-06' | 'unsafe-latest';

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Total duration of the output video in seconds. Defaults to 10 seconds.
     */
    duration?: 5 | 10 | 15;

    /**
     * Optional image used as the first frame of the output video. See
     * [our docs](/assets/inputs#images) on image inputs.
     */
    firstFrame?: Variant0.FirstFrame;

    /**
     * Output dimensions as width:height. 720p ratios (`1280:720`, `720:1280`,
     * `960:960`) use the standard tier; 1080p ratios (`1920:1080`, `1080:1920`,
     * `1440:1440`) use the pro tier. Defaults to `1280:720`.
     */
    ratio?: '1280:720' | '720:1280' | '960:960' | '1920:1080' | '1080:1920' | '1440:1440';
  }

  export namespace Variant0 {
    /**
     * Optional image used as the first frame of the output video. See
     * [our docs](/assets/inputs#images) on image inputs.
     */
    export interface FirstFrame {
      /**
       * A HTTPS URL.
       */
      uri: string;
    }
  }

  export interface Variant1 {
    /**
     * Workflow mode. `custom` polishes a user-provided shot list of 3–5 shots.
     */
    mode: 'custom';

    /**
     * Shot list for custom mode (3–5 shots). Per-shot durations must sum to
     * `duration`.
     */
    shots: Array<Variant1.Shot>;

    /**
     * Workflow version. Use a dated version (e.g. "2026-06") to pin behavior, or
     * "unsafe-latest" to track the newest stable version (may break without notice).
     */
    version: '2026-06' | 'unsafe-latest';

    /**
     * Whether to generate audio for the video.
     */
    audio?: boolean;

    /**
     * Total duration of the output video in seconds. Defaults to 10 seconds.
     */
    duration?: 5 | 10 | 15;

    /**
     * Optional image used as the first frame of the output video. See
     * [our docs](/assets/inputs#images) on image inputs.
     */
    firstFrame?: Variant1.FirstFrame;

    /**
     * Output dimensions as width:height. 720p ratios (`1280:720`, `720:1280`,
     * `960:960`) use the standard tier; 1080p ratios (`1920:1080`, `1080:1920`,
     * `1440:1440`) use the pro tier. Defaults to `1280:720`.
     */
    ratio?: '1280:720' | '720:1280' | '960:960' | '1920:1080' | '1080:1920' | '1440:1440';
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
       * A HTTPS URL.
       */
      uri: string;
    }
  }
}

export interface RecipeProductAdParams {
  /**
   * Product images (1–10). Multiple angles of the same product. All images inform
   * product analysis and reference generation; only the first image is used as the
   * primary product reference in the storyboard grid. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  productImages: Array<RecipeProductAdParams.ProductImage>;

  /**
   * Workflow version. Use a dated version (e.g. "2026-07") to pin behavior, or
   * "unsafe-latest" to track the newest stable version (may break without notice).
   */
  version: '2026-06' | '2026-07' | 'unsafe-latest';

  /**
   * Whether to generate audio for the video.
   */
  audio?: boolean;

  /**
   * Duration of the output video in seconds (4–15). Defaults to 10 seconds.
   */
  duration?: number;

  /**
   * Optional product description and specifications to inform creative direction and
   * which product elements to highlight.
   */
  productInfo?: string;

  /**
   * The resolution of the output video.
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
   * Optional style reference images (0–4). Defines the visual treatment (lighting,
   * palette, mood). Treated as a moodboard when multiple are provided.
   */
  styleImages?: Array<RecipeProductAdParams.StyleImage>;

  /**
   * Optional creative direction describing brand voice, product framing, scene
   * specifics, lighting, camera motion, and narrative.
   */
  userConcept?: string;
}

export namespace RecipeProductAdParams {
  export interface ProductImage {
    /**
     * A HTTPS URL.
     */
    uri: string;
  }

  export interface StyleImage {
    /**
     * A HTTPS URL.
     */
    uri: string;
  }
}

export interface RecipeProductCampaignImageParams {
  /**
   * Product image to preserve across the generated campaign. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  image: RecipeProductCampaignImageParams.Image;

  /**
   * Style / creative brief for the fashion campaign, e.g. "High-key fashion
   * editorial, gorpcore-meets-blokecore-meets-Y2K".
   */
  prompt: string;

  /**
   * Workflow version. Use a dated version (e.g. "2026-06") to pin behavior, or
   * "unsafe-latest" to track the newest stable version (may break without notice).
   */
  version: '2026-06' | 'unsafe-latest';
}

export namespace RecipeProductCampaignImageParams {
  /**
   * Product image to preserve across the generated campaign. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  export interface Image {
    /**
     * A HTTPS URL.
     */
    uri: string;
  }
}

export interface RecipeProductSwapParams {
  /**
   * Reference images of the new product (1–10). Supply multiple angles when the
   * reference video shows the product from different views — optionally label each
   * with `view` ("front", "side", or "back"). A single pre-composed reference sheet
   * is also supported (omit `view`). See [our docs](/assets/inputs#images) on image
   * inputs.
   */
  newProductImages: Array<RecipeProductSwapParams.NewProductImage>;

  /**
   * Image of the original product being swapped out. See
   * [our docs](/assets/inputs#images) on image inputs.
   */
  originalProductImage: RecipeProductSwapParams.OriginalProductImage;

  /**
   * Reference video containing the product to swap. Duration must be between 1.8 and
   * 15 seconds. See [our docs](/assets/inputs#videos) on video inputs.
   */
  referenceVideo: RecipeProductSwapParams.ReferenceVideo;

  /**
   * Workflow version. Use a dated version (e.g. "2026-06") to pin behavior, or
   * "unsafe-latest" to track the newest stable version (may break without notice).
   */
  version: '2026-06' | 'unsafe-latest';

  /**
   * Whether to generate audio for the video.
   */
  audio?: boolean;

  /**
   * Duration of the output video in seconds (4–15). Defaults to 10 seconds.
   */
  duration?: number;

  /**
   * Output video resolution. Defaults to 720p.
   */
  resolution?: '720p' | '1080p';
}

export namespace RecipeProductSwapParams {
  export interface NewProductImage {
    /**
     * A HTTPS URL.
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
     * A HTTPS URL.
     */
    uri: string;
  }

  /**
   * Reference video containing the product to swap. Duration must be between 1.8 and
   * 15 seconds. See [our docs](/assets/inputs#videos) on video inputs.
   */
  export interface ReferenceVideo {
    /**
     * A HTTPS URL.
     */
    uri: string;
  }
}

export interface RecipeProductUgcParams {
  /**
   * Image of the character who will appear on camera in the UGC video. Aspect ratio
   * (width / height) must be between 0.4 and 4. See
   * [our docs](/assets/inputs#images) for image input requirements.
   */
  characterImage: RecipeProductUgcParams.CharacterImage;

  /**
   * Image of the product being promoted. Aspect ratio (width / height) must be
   * between 0.4 and 4. See [our docs](/assets/inputs#images) for image input
   * requirements.
   */
  productImage: RecipeProductUgcParams.ProductImage;

  /**
   * Workflow version. Use a dated version (e.g. "2026-06") to pin behavior, or
   * "unsafe-latest" to track the newest stable version (may break without notice).
   */
  version: '2026-06' | 'unsafe-latest';

  /**
   * Whether to generate audio for the video.
   */
  audio?: boolean;

  /**
   * Duration of the output video in seconds (4–15). Defaults to 15 seconds.
   */
  duration?: number;

  /**
   * Product details and creative brief — what the product is, key benefits, and any
   * specifics the script should reference.
   */
  productInfo?: string;

  /**
   * The resolution of the output video.
   */
  ratio?: '720:1280' | '1080:1920';

  /**
   * Optional creative direction for the UGC video — tone, voice register, specific
   * message, or an entire dialog script.
   */
  userConcept?: string;
}

export namespace RecipeProductUgcParams {
  /**
   * Image of the character who will appear on camera in the UGC video. Aspect ratio
   * (width / height) must be between 0.4 and 4. See
   * [our docs](/assets/inputs#images) for image input requirements.
   */
  export interface CharacterImage {
    /**
     * A HTTPS URL.
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
     * A HTTPS URL.
     */
    uri: string;
  }
}

export declare namespace Recipes {
  export {
    type RecipeMarketingStockImageResponse as RecipeMarketingStockImageResponse,
    type RecipeMultiShotVideoResponse as RecipeMultiShotVideoResponse,
    type RecipeProductAdResponse as RecipeProductAdResponse,
    type RecipeProductCampaignImageResponse as RecipeProductCampaignImageResponse,
    type RecipeProductSwapResponse as RecipeProductSwapResponse,
    type RecipeProductUgcResponse as RecipeProductUgcResponse,
    type RecipeMarketingStockImageParams as RecipeMarketingStockImageParams,
    type RecipeMultiShotVideoParams as RecipeMultiShotVideoParams,
    type RecipeProductAdParams as RecipeProductAdParams,
    type RecipeProductCampaignImageParams as RecipeProductCampaignImageParams,
    type RecipeProductSwapParams as RecipeProductSwapParams,
    type RecipeProductUgcParams as RecipeProductUgcParams,
  };
}
