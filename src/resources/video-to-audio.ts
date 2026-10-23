// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class VideoToAudio extends APIResource {
  /**
   * Generate synchronized sound effects for a video, optionally guided by a text
   * description. Returns audio, not a video with a replacement soundtrack.
   *
   * @example
   * ```ts
   * const videoToAudio = await client.videoToAudio.create({
   *   duration: 1,
   *   model: 'mirelo_sfx_2_0',
   *   videoUri: 'https://example.com/video.mp4',
   * });
   * ```
   */
  create(
    body: VideoToAudioCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VideoToAudioCreateResponse> {
    return wrapAsWaitableResource<VideoToAudioCreateResponse>(this._client)(
      this._client.post('/v1/video_to_audio', { body, ...options }),
    );
  }
}

export interface VideoToAudioCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: VideoToAudioCreateResponse.EstimatedCost;
}

export namespace VideoToAudioCreateResponse {
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

export interface VideoToAudioCreateParams {
  duration: number;

  model: 'mirelo_sfx_2_0';

  /**
   * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
   * [our docs](/assets/inputs#videos) on video inputs for more information.
   */
  videoUri: string;

  /**
   * The format of the generated audio.
   */
  format?: 'mp3' | 'wav' | 'flac';

  /**
   * Sounds to avoid in the generated audio.
   */
  negativePrompt?: string;

  /**
   * The number of audio variations to generate.
   */
  numVariants?: number;

  /**
   * Whether to preserve dialogue from the input video. Disabling this does not
   * guarantee speech-free output.
   */
  preserveSpeech?: boolean;

  /**
   * A description of the sound effects to generate.
   */
  promptText?: string;

  /**
   * A seed for reproducible generation.
   */
  seed?: number;
}

export declare namespace VideoToAudio {
  export {
    type VideoToAudioCreateResponse as VideoToAudioCreateResponse,
    type VideoToAudioCreateParams as VideoToAudioCreateParams,
  };
}
