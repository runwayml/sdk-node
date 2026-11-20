// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
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
    params: VideoToAudioCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VideoToAudioCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<VideoToAudioCreateResponse>(this._client)(
      this._client.post('/v1/video_to_audio', {
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
  /**
   * Body param
   */
  duration: number;

  /**
   * Body param
   */
  model: 'mirelo_sfx_2_0';

  /**
   * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
   * [our docs](/assets/inputs#videos) on video inputs for more information.
   */
  videoUri: string;

  /**
   * Body param: The format of the generated audio.
   */
  format?: 'mp3' | 'wav' | 'flac';

  /**
   * Body param: Sounds to avoid in the generated audio.
   */
  negativePrompt?: string;

  /**
   * Body param: The number of audio variations to generate.
   */
  numVariants?: number;

  /**
   * Body param: Whether to preserve dialogue from the input video. Disabling this
   * does not guarantee speech-free output.
   */
  preserveSpeech?: boolean;

  /**
   * Body param: A description of the sound effects to generate.
   */
  promptText?: string;

  /**
   * Body param: A seed for reproducible generation.
   */
  seed?: number;

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

export declare namespace VideoToAudio {
  export {
    type VideoToAudioCreateResponse as VideoToAudioCreateResponse,
    type VideoToAudioCreateParams as VideoToAudioCreateParams,
  };
}
