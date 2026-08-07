// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class VoiceIsolation extends APIResource {
  /**
   * This endpoint will start a new task to isolate the voice from the background
   * audio. Audio duration must be greater than 4.6 seconds and less than 3600
   * seconds.
   *
   * @example
   * ```ts
   * const voiceIsolation = await client.voiceIsolation.create({
   *   audioUri: 'https://example.com/audio.mp3',
   *   model: 'eleven_voice_isolation',
   * });
   * ```
   */
  create(
    body: VoiceIsolationCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VoiceIsolationCreateResponse> {
    return wrapAsWaitableResource<VoiceIsolationCreateResponse>(this._client)(
      this._client.post('/v1/voice_isolation', { body, ...options }),
    );
  }
}

export interface VoiceIsolationCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: VoiceIsolationCreateResponse.EstimatedCost;
}

export namespace VoiceIsolationCreateResponse {
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

export interface VoiceIsolationCreateParams {
  /**
   * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:audio/mp3;base64,...`, up to 16MB) containing an encoded audio. See
   * [our docs](/assets/inputs#audio) on audio inputs for more information.
   */
  audioUri: string;

  model: 'eleven_voice_isolation';
}

export declare namespace VoiceIsolation {
  export {
    type VoiceIsolationCreateResponse as VoiceIsolationCreateResponse,
    type VoiceIsolationCreateParams as VoiceIsolationCreateParams,
  };
}
