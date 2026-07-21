// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { RequestOptions } from '../../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../../lib/polling';

/**
 * Routed video create params. `dryRun` is omitted from the SDK for now — use the
 * HTTP API with `dryRun: true` if you need a routing preview without a task.
 */
export type VideoGenerateParams = Omit<VideoCreateParams, 'dryRun'>;

export class Video extends APIResource {
  /**
   * Start a video generation task using a saved Model Router config instead of
   * naming a model.
   */
  create(
    body: VideoGenerateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VideoCreateResponse.RoutedVideoTaskCreated> {
    return wrapAsWaitableResource<VideoCreateResponse.RoutedVideoTaskCreated>(this._client)(
      this._client.post('/v1/generate/video', { body, ...options }),
    );
  }
}

export interface VideoCreateResponse {
  /**
   * The ID of the created task. Poll GET /v1/tasks/:id for the result.
   */
  id: string;

  /**
   * Metadata describing which model the router selected and why.
   */
  routing: VideoCreateResponse.Routing;
}

export namespace VideoCreateResponse {
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
       * Duration in seconds used for routing display (request value or router default).
       */
      duration: number;

      /**
       * Concrete output ratio derived from aspectRatio (e.g. "1280:720"), or the router
       * default.
       */
      ratio: string;

      /**
       * Resolution tier from the request, or the router default when omitted.
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
       * The applied maximum credits per generation for this request’s modality, or null
       * if the config sets no ceiling.
       */
      priceCeiling: number | null;
    }
  }
}

export interface VideoCreateParams {
  /**
   * The slug of a saved Model Router config to route this request with.
   */
  configId: string;

  /**
   * Model-agnostic video generation input. Fields are optional; the router selects a
   * model and maps these options to it.
   */
  input: VideoCreateParams.Input;
}

export namespace VideoCreateParams {
  /**
   * Model-agnostic video generation input. Fields are optional; the router selects a
   * model and maps these options to it.
   */
  export interface Input {
    /**
     * Desired aspect ratio. Models that do not support the requested aspect are
     * excluded.
     */
    aspectRatio?: '16:9' | '9:16' | '1:1' | '4:3' | '3:4' | '21:9';

    /**
     * Whether to generate native audio with the video. When true, only models that
     * output audio remain eligible; when false, silent models and models with an audio
     * toggle remain eligible (always-on native-audio models are excluded). When
     * omitted, the selected model’s default applies.
     */
    audio?: boolean;

    /**
     * Settings that affect the behavior of the content moderation system.
     */
    contentModeration?: Input.ContentModeration;

    /**
     * Desired duration of the output video, in seconds. Unsupported values exclude
     * models; with a source video, V2V duration support applies.
     */
    duration?: number;

    /**
     * Timed guidance images for video restyle. Requires a source video; unsupported
     * models are excluded.
     */
    keyframes?: Array<Input.UnionMember0 | Input.UnionMember1>;

    /**
     * A text description of what to avoid in the output.
     */
    negativePrompt?: string;

    /**
     * A text prompt describing the desired video.
     */
    promptText?: string;

    /**
     * Optional audio inputs for the generation.
     */
    referenceAudio?: Array<Input.ReferenceAudio>;

    /**
     * Optional image inputs. Each entry requires a `role`. At most one `first` and one
     * `last` are allowed; multiple `reference` images are allowed.
     */
    referenceImages?: Array<Input.ReferenceImage>;

    /**
     * Optional video inputs. Each entry requires a `role`. Use `source` for
     * video-to-video; use `reference` for additional context videos (only models that
     * support them remain eligible). At most one `source` is allowed.
     */
    referenceVideos?: Array<Input.ReferenceVideo>;

    /**
     * Desired output resolution tier. Models that do not support the requested tier
     * are excluded.
     */
    resolution?: '480p' | '720p' | '1080p' | '4k';

    /**
     * A seed for reproducible generation. Random if omitted.
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

    export interface UnionMember0 {
      seconds: number;

      /**
       * A HTTPS URL.
       */
      uri: string;

      range?: UnionMember0.Range;
    }

    export namespace UnionMember0 {
      export interface Range {
        end_seconds: number;

        start_seconds: number;
      }
    }

    export interface UnionMember1 {
      at: number;

      /**
       * A HTTPS URL.
       */
      uri: string;

      range?: UnionMember1.Range;
    }

    export namespace UnionMember1 {
      export interface Range {
        end_seconds: number;

        start_seconds: number;
      }
    }

    export interface ReferenceAudio {
      /**
       * A HTTPS URL.
       */
      uri: string;
    }

    export interface ReferenceImage {
      /**
       * How the image is used. `first` is the starting frame; `last` is an end frame;
       * `reference` is additional image context.
       */
      role: 'first' | 'last' | 'reference';

      /**
       * A HTTPS URL.
       */
      uri: string;
    }

    export interface ReferenceVideo {
      /**
       * How the video is used. `source` is the primary video-to-video input; `reference`
       * is additional video context.
       */
      role: 'source' | 'reference';

      /**
       * A HTTPS URL.
       */
      uri: string;
    }
  }
}

export declare namespace Video {
  export {
    type VideoCreateResponse as VideoCreateResponse,
    type VideoCreateParams as VideoCreateParams,
    type VideoGenerateParams as VideoGenerateParams,
  };
}
