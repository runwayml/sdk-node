// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Image extends APIResource {
  /**
   * Start an image generation task using a saved Model Router config instead of
   * naming a model.
   */
  create(body: ImageCreateParams, options?: RequestOptions): APIPromise<ImageCreateResponse> {
    return this._client.post('/v1/generate/image', { body, ...options });
  }
}

export type ImageCreateResponse =
  | ImageCreateResponse.RoutedImageTaskCreated
  | ImageCreateResponse.RoutedImageDryRun;

export namespace ImageCreateResponse {
  export interface RoutedImageTaskCreated {
    /**
     * The ID of the created task. Poll GET /v1/tasks/:id for the result.
     */
    id: string;

    dryRun: false;

    /**
     * Metadata describing which model the router selected and why.
     */
    routing: RoutedImageTaskCreated.Routing;
  }

  export namespace RoutedImageTaskCreated {
    /**
     * Metadata describing which model the router selected and why.
     */
    export interface Routing {
      /**
       * The slug of the router config that was applied to this request.
       */
      configId: string;

      /**
       * Estimated cost, computed against current pricing.
       */
      estimatedCost: Routing.EstimatedCost;

      /**
       * The public name of the model the router selected.
       */
      model: string;

      /**
       * The provider of the selected model.
       */
      provider: string;

      /**
       * Request-side defaults resolved for the routing response. Not necessarily
       * identical to prepared model options.
       */
      resolvedInput: Routing.ResolvedInput;

      /**
       * The resolved config settings the router used for this request.
       */
      resolvedSettings: Routing.ResolvedSettings;

      /**
       * Present only when the config enables fallback.onCapacity and capacity affected
       * this request.
       */
      capacityFallback?: Routing.CapacityFallback;
    }

    export namespace Routing {
      /**
       * Estimated cost, computed against current pricing.
       */
      export interface EstimatedCost {
        /**
         * Estimated cost of the generation in credits.
         */
        credits: number;
      }

      /**
       * Request-side defaults resolved for the routing response. Not necessarily
       * identical to prepared model options.
       */
      export interface ResolvedInput {
        /**
         * Aspect ratio used for routing display.
         */
        aspectRatio: string;

        /**
         * Concrete output ratio derived from aspectRatio and resolution for the selected
         * model.
         */
        ratio: string;

        /**
         * Megapixel tier used for routing display.
         */
        resolution: string;
      }

      /**
       * The resolved config settings the router used for this request.
       */
      export interface ResolvedSettings {
        /**
         * The single optimization preference the config selected, used as the soft
         * weighting when scoring eligible models.
         */
        optimizeFor: 'cost' | 'latency' | 'quality';

        /**
         * The applied maximum credits per generation for this request's modality, or null
         * if the config sets no ceiling.
         */
        priceCeiling: number | null;
      }

      /**
       * Present only when the config enables fallback.onCapacity and capacity affected
       * this request.
       */
      export interface CapacityFallback {
        /**
         * True when every eligible model was at its concurrency limit, so the best-ranked
         * model was used and the task will queue.
         */
        allExhausted: boolean;

        /**
         * Eligible models that were considered for this request but not selected because
         * this account is at its concurrency limit for them.
         */
        skipped: Array<string>;
      }
    }
  }

  export interface RoutedImageDryRun {
    dryRun: true;

    /**
     * Metadata describing which model the router selected and why.
     */
    routing: RoutedImageDryRun.Routing;
  }

  export namespace RoutedImageDryRun {
    /**
     * Metadata describing which model the router selected and why.
     */
    export interface Routing {
      /**
       * The slug of the router config that was applied to this request.
       */
      configId: string;

      /**
       * Estimated cost, computed against current pricing.
       */
      estimatedCost: Routing.EstimatedCost;

      /**
       * The public name of the model the router selected.
       */
      model: string;

      /**
       * The provider of the selected model.
       */
      provider: string;

      /**
       * Request-side defaults resolved for the routing response. Not necessarily
       * identical to prepared model options.
       */
      resolvedInput: Routing.ResolvedInput;

      /**
       * The resolved config settings the router used for this request.
       */
      resolvedSettings: Routing.ResolvedSettings;

      /**
       * Present only when the config enables fallback.onCapacity and capacity affected
       * this request.
       */
      capacityFallback?: Routing.CapacityFallback;
    }

    export namespace Routing {
      /**
       * Estimated cost, computed against current pricing.
       */
      export interface EstimatedCost {
        /**
         * Estimated cost of the generation in credits.
         */
        credits: number;
      }

      /**
       * Request-side defaults resolved for the routing response. Not necessarily
       * identical to prepared model options.
       */
      export interface ResolvedInput {
        /**
         * Aspect ratio used for routing display.
         */
        aspectRatio: string;

        /**
         * Concrete output ratio derived from aspectRatio and resolution for the selected
         * model.
         */
        ratio: string;

        /**
         * Megapixel tier used for routing display.
         */
        resolution: string;
      }

      /**
       * The resolved config settings the router used for this request.
       */
      export interface ResolvedSettings {
        /**
         * The single optimization preference the config selected, used as the soft
         * weighting when scoring eligible models.
         */
        optimizeFor: 'cost' | 'latency' | 'quality';

        /**
         * The applied maximum credits per generation for this request's modality, or null
         * if the config sets no ceiling.
         */
        priceCeiling: number | null;
      }

      /**
       * Present only when the config enables fallback.onCapacity and capacity affected
       * this request.
       */
      export interface CapacityFallback {
        /**
         * True when every eligible model was at its concurrency limit, so the best-ranked
         * model was used and the task will queue.
         */
        allExhausted: boolean;

        /**
         * Eligible models that were considered for this request but not selected because
         * this account is at its concurrency limit for them.
         */
        skipped: Array<string>;
      }
    }
  }
}

export interface ImageCreateParams {
  /**
   * The slug of a saved Model Router config to route this request with.
   */
  configId: string;

  /**
   * Model-agnostic image generation input. The router selects a model and maps these
   * options to it.
   */
  input: ImageCreateParams.Input;

  /**
   * When true, run the full routing pipeline and return the decision and estimated
   * cost without generating. No task is created, nothing is billed, and no asset is
   * produced.
   */
  dryRun?: boolean;
}

export namespace ImageCreateParams {
  /**
   * Model-agnostic image generation input. The router selects a model and maps these
   * options to it.
   */
  export interface Input {
    /**
     * A text prompt describing the desired image.
     */
    promptText: string;

    /**
     * Desired aspect ratio. Models that do not support the requested aspect are
     * excluded.
     */
    aspectRatio?: '16:9' | '9:16' | '1:1' | '4:3' | '3:4' | '21:9' | '2:3' | '3:2' | '4:5' | '5:4';

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Input.ContentModeration;

    /**
     * Number of images to generate (1-10). Models that cannot produce the exact count
     * are excluded and cost scales with this value.
     */
    outputCount?: number;

    /**
     * Optional reference images for models that support them. Tags are assigned per
     * model when omitted.
     */
    referenceImages?: Array<Input.ReferenceImage>;

    /**
     * Desired megapixel tier. Models that do not support the requested tier are
     * excluded.
     */
    resolution?: '1k' | '2k' | '4k';

    /**
     * A seed for reproducible generation. Only gen4_image and gen4_image_turbo accept
     * this field.
     */
    seed?: number;
  }

  export namespace Input {
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
    }
  }
}

export declare namespace Image {
  export { type ImageCreateResponse as ImageCreateResponse, type ImageCreateParams as ImageCreateParams };
}
