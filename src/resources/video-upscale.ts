// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class VideoUpscale extends APIResource {
  /**
   * This endpoint will start a new task to upscale a video. Videos will be upscaled
   * by a factor of 4X, capped at a maximum of 4096px along each side.
   *
   * @example
   * ```ts
   * const videoUpscale = await client.videoUpscale.create({
   *   model: 'upscale_v1',
   *   videoUri: 'https://example.com/video.mp4',
   * });
   * ```
   */
  create(body: VideoUpscaleCreateParams, options?: RequestOptions): APIPromise<VideoUpscaleCreateResponse> {
    return this._client.post('/v1/video_upscale', { body, ...options });
  }
}

export interface VideoUpscaleCreateResponse {
  id: string;
}

export interface VideoUpscaleCreateParams {
  model: 'upscale_v1';

  /**
   * A HTTPS URL.
   */
  videoUri: string;
}

export declare namespace VideoUpscale {
  export {
    type VideoUpscaleCreateResponse as VideoUpscaleCreateResponse,
    type VideoUpscaleCreateParams as VideoUpscaleCreateParams,
  };
}
