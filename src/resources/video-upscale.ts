// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class VideoUpscale extends APIResource {
  /**
   * This endpoint will start a new task to upscale a video. Videos will be upscaled
   * by a factor of 4X, capped at a maximum of 4096px along each side.
   */
  create(
    body: VideoUpscaleCreateParams,
    options?: Core.RequestOptions,
  ): APIPromiseWithAwaitableTask<VideoUpscaleCreateResponse> {
    return wrapAsWaitableResource<VideoUpscaleCreateResponse>(this._client)(
      this._client.post('/v1/video_upscale', { body, ...options }),
    );
  }
}

export interface VideoUpscaleCreateResponse {
  /**
   * The ID of the newly created task.
   */
  id: string;
}

export interface VideoUpscaleCreateParams {
  /**
   * The model variant to use.
   */
  model: 'upscale_v1';

  /**
   * A HTTPS URL pointing to a video or a data URI containing a video. The video must
   * be less than 4096px on each side. The video duration may not exceed 40 seconds.
   * See [our docs](/assets/inputs#videos) on video inputs for more information.
   */
  videoUri: string;
}

export declare namespace VideoUpscale {
  export {
    type VideoUpscaleCreateResponse as VideoUpscaleCreateResponse,
    type VideoUpscaleCreateParams as VideoUpscaleCreateParams,
  };
}
