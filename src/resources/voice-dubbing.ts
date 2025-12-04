// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class VoiceDubbing extends APIResource {
  /**
   * This endpoint will start a new task to dub audio content to a target language.
   *
   * @example
   * ```ts
   * const voiceDubbing = await client.voiceDubbing.create({
   *   audioUri: 'https://example.com/audio.mp3',
   *   model: 'eleven_voice_dubbing',
   *   targetLang: 'en',
   * });
   * ```
   */
  create(body: VoiceDubbingCreateParams, options?: RequestOptions): APIPromise<VoiceDubbingCreateResponse> {
    return this._client.post('/v1/voice_dubbing', { body, ...options });
  }
}

export interface VoiceDubbingCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export interface VoiceDubbingCreateParams {
  /**
   * A HTTPS URL.
   */
  audioUri: string;

  model: 'eleven_voice_dubbing';

  /**
   * The target language code to dub the audio to (e.g., "es" for Spanish, "fr" for
   * French).
   */
  targetLang:
    | 'en'
    | 'hi'
    | 'pt'
    | 'zh'
    | 'es'
    | 'fr'
    | 'de'
    | 'ja'
    | 'ar'
    | 'ru'
    | 'ko'
    | 'id'
    | 'it'
    | 'nl'
    | 'tr'
    | 'pl'
    | 'sv'
    | 'fil'
    | 'ms'
    | 'ro'
    | 'uk'
    | 'el'
    | 'cs'
    | 'da'
    | 'fi'
    | 'bg'
    | 'hr'
    | 'sk'
    | 'ta';

  /**
   * Whether to disable voice cloning and use a generic voice instead.
   */
  disableVoiceCloning?: boolean;

  /**
   * Whether to remove background audio from the dubbed output.
   */
  dropBackgroundAudio?: boolean;

  /**
   * The number of speakers in the audio. If not provided, it will be detected
   * automatically.
   */
  numSpeakers?: number;
}

export declare namespace VoiceDubbing {
  export {
    type VoiceDubbingCreateResponse as VoiceDubbingCreateResponse,
    type VoiceDubbingCreateParams as VoiceDubbingCreateParams,
  };
}
