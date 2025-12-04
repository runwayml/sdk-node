// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

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
}

export interface VoiceIsolationCreateParams {
  /**
   * A HTTPS URL.
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
