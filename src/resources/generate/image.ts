// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../../lib/polling';

export class Image extends APIResource {
  /**
   * Start an image generation task using a saved Model Router config instead of
   * naming a model.
   */
  create(
    params: ImageCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<ImageCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<ImageCreateResponse>(this._client)(
      this._client.post('/v1/generate/image', {
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

export interface ImageCreateResponse {
  /**
   * The ID of the created task. Poll GET /v1/tasks/:id for the result.
   */
  id: string;

  /**
   * Metadata describing which model the router selected and why.
   */
  routing: ImageCreateResponse.Routing;
}

export namespace ImageCreateResponse {
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
       * Aspect ratio resolved for routing display from the request or router default.
       * When `ratio` is `auto`, the source image determines output framing.
       */
      aspectRatio: string;

      /**
       * Output ratio for the selected model, as `<width>:<height>`. `auto` means the
       * output keeps the source image's framing, so no pixel size was chosen.
       */
      ratio: string;

      /**
       * Megapixel tier resolved for routing display from the request or model default.
       * When `ratio` is `auto`, this does not specify output pixel dimensions.
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

export interface ImageCreateParams {
  /**
   * Body param: The slug of a saved Model Router config to route this request with.
   */
  configId: string;

  /**
   * Body param: Model-agnostic image generation input. The router selects a model
   * and maps these options to it.
   */
  input: ImageCreateParams.Input;

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
