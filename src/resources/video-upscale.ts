// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * These endpoints all kick off tasks to create generations.
 */
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
  create(body: VideoUpscaleCreateParams, options?: RequestOptions): APIPromise<VideoUpscaleCreateResponse> {
    return this._client.post('/v1/video_upscale', { body, ...options });
  }
}

export interface VideoUpscaleCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export interface VideoUpscaleCreateParams {
  model: 'magnific_video_upscaler_creative';

  /**
   * A HTTPS URL.
   */
  videoUri: string;

  /**
   * How much AI-generated detail to add during upscaling, from 0 (faithful) to 100.
   */
  creativity?: number;

  /**
   * Processing style: `vivid` for enhanced color and detail, `natural` for faithful
   * reproduction.
   */
  flavor?: 'vivid' | 'natural';

  /**
   * Whether to increase the output frame rate.
   */
  fpsBoost?: boolean;

  /**
   * Target output resolution from 720p to 4k. Defaults to `2k`.
   */
  resolution?: '720p' | '1k' | '2k' | '4k';

  /**
   * Sharpness intensity from 0 (none) to 100.
   */
  sharpen?: number;

  /**
   * Grain and texture enhancement from 0 to 100.
   */
  smartGrain?: number;
}

export declare namespace VideoUpscale {
  export {
    type VideoUpscaleCreateResponse as VideoUpscaleCreateResponse,
    type VideoUpscaleCreateParams as VideoUpscaleCreateParams,
  };
}
