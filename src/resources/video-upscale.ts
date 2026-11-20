// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class VideoUpscale extends APIResource {
  /**
   * This endpoint starts a task to upscale a video. Set `model` to choose the
   * upscaler.
   *
   * @example
   * ```ts
   * const videoUpscale = await client.videoUpscale.create({
   *   model: 'magnific_video_upscaler_creative',
   *   videoUri: 'https://example.com/video.mp4',
   * });
   * ```
   */
  create(
    params: VideoUpscaleCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VideoUpscaleCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<VideoUpscaleCreateResponse>(this._client)(
      this._client.post('/v1/video_upscale', {
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

export interface VideoUpscaleCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: VideoUpscaleCreateResponse.EstimatedCost;
}

export namespace VideoUpscaleCreateResponse {
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

export type VideoUpscaleCreateParams =
  | VideoUpscaleCreateParams.MagnificVideoUpscalerCreative
  | VideoUpscaleCreateParams.EnhanceFrameRate;

export declare namespace VideoUpscaleCreateParams {
  export interface MagnificVideoUpscalerCreative {
    /**
     * Body param
     */
    model: 'magnific_video_upscaler_creative';

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

    /**
     * Body param: How much AI-generated detail to add during upscaling, from 0
     * (faithful) to 100.
     */
    creativity?: number;

    /**
     * Body param: Processing style: `vivid` for enhanced color and detail, `natural`
     * for faithful reproduction.
     */
    flavor?: 'vivid' | 'natural';

    /**
     * Body param: Whether to increase the output frame rate.
     */
    fpsBoost?: boolean;

    /**
     * Body param: Target output resolution from 720p to 4k. Defaults to `2k`.
     */
    resolution?: '720p' | '1k' | '2k' | '4k';

    /**
     * Body param: Sharpness intensity from 0 (none) to 100.
     */
    sharpen?: number;

    /**
     * Body param: Grain and texture enhancement from 0 to 100.
     */
    smartGrain?: number;

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

  export interface EnhanceFrameRate {
    /**
     * Body param
     */
    model: 'enhance_frame_rate';

    /**
     * Body param: The output frame rate.
     */
    targetFramerate: '24' | '25' | '30' | '48' | '50' | '60' | '120' | '23_98' | '29_97' | '59_94';

    /**
     * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    videoUri: string;

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
}

export declare namespace VideoUpscale {
  export {
    type VideoUpscaleCreateResponse as VideoUpscaleCreateResponse,
    type VideoUpscaleCreateParams as VideoUpscaleCreateParams,
  };
}
