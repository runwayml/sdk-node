// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
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
  create(
    params: VoiceDubbingCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VoiceDubbingCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<VoiceDubbingCreateResponse>(this._client)(
      this._client.post('/v1/voice_dubbing', {
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

export interface VoiceDubbingCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: VoiceDubbingCreateResponse.EstimatedCost;
}

export namespace VoiceDubbingCreateResponse {
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

export interface VoiceDubbingCreateParams {
  /**
   * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
   * [our docs](/assets/inputs#audio) on audio inputs for more information.
   */
  audioUri: string;

  /**
   * Body param
   */
  model: 'eleven_voice_dubbing';

  /**
   * Body param: The target language code to dub the audio to (e.g., "es" for
   * Spanish, "fr" for French).
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
   * Body param: Whether to disable voice cloning and use a generic voice instead.
   */
  disableVoiceCloning?: boolean;

  /**
   * Body param: Whether to remove background audio from the dubbed output.
   */
  dropBackgroundAudio?: boolean;

  /**
   * Body param: The number of speakers in the audio. If not provided, it will be
   * detected automatically.
   */
  numSpeakers?: number;

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

export declare namespace VoiceDubbing {
  export {
    type VoiceDubbingCreateResponse as VoiceDubbingCreateResponse,
    type VoiceDubbingCreateParams as VoiceDubbingCreateParams,
  };
}
