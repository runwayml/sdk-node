// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class VoiceIsolation extends APIResource {
  /**
   * This endpoint will start a new task to isolate and enhance voices in audio.
   */
  create(
    body: VoiceIsolationCreateParams,
    options?: RequestOptions,
  ): APIPromise<VoiceIsolationCreateResponse> {
    return this._client.post('/v1/voice_isolation', { body, ...options });
  }
}

export interface VoiceIsolationCreateResponse {
  /**
   * The ID of the newly created task.
   */
  id: string;
}

export interface VoiceIsolationCreateParams {
  /**
   * A HTTPS URL or data URI containing the audio file to process. See
   * [our docs](/assets/inputs#audio) on audio inputs for more information.
   */
  audioUrl: string;

  /**
   * The model variant to use.
   */
  model: 'eleven_voice_isolation';
}

export declare namespace VoiceIsolation {
  export {
    type VoiceIsolationCreateResponse as VoiceIsolationCreateResponse,
    type VoiceIsolationCreateParams as VoiceIsolationCreateParams,
  };
}
