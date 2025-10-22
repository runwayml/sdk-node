// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class VoiceIsolation extends APIResource {
  /**
   * This endpoint will start a new task to isolate the voice from the background
   * audio.
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
  id: string;
}

export interface VoiceIsolationCreateParams {
  /**
   * A data URI containing encoded audio.
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
