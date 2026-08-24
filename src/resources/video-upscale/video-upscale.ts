// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AudioAPI from './audio';
import { Audio, AudioCreateParams, AudioCreateResponse } from './audio';
import * as ImageAPI from './image';
import { Image, ImageCreateParams, ImageCreateResponse } from './image';
import * as VideoAPI from './video';
import { Video, VideoCreateParams, VideoCreateResponse } from './video';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class VideoUpscale extends APIResource {
  video: VideoAPI.Video = new VideoAPI.Video(this._client);
  image: ImageAPI.Image = new ImageAPI.Image(this._client);
  audio: AudioAPI.Audio = new AudioAPI.Audio(this._client);

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

export interface VideoUpscaleCreateParams {
  model: 'magnific_video_upscaler_creative';

  /**
   * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
   * [our docs](/assets/inputs#videos) on video inputs for more information.
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

VideoUpscale.Video = Video;
VideoUpscale.Image = Image;
VideoUpscale.Audio = Audio;

export declare namespace VideoUpscale {
  export {
    type VideoUpscaleCreateResponse as VideoUpscaleCreateResponse,
    type VideoUpscaleCreateParams as VideoUpscaleCreateParams,
  };

  export {
    Video as Video,
    type VideoCreateResponse as VideoCreateResponse,
    type VideoCreateParams as VideoCreateParams,
  };

  export {
    Image as Image,
    type ImageCreateResponse as ImageCreateResponse,
    type ImageCreateParams as ImageCreateParams,
  };

  export {
    Audio as Audio,
    type AudioCreateResponse as AudioCreateResponse,
    type AudioCreateParams as AudioCreateParams,
  };
}
