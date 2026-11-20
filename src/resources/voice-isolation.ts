// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
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
    params: VoiceIsolationCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VoiceIsolationCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<VoiceIsolationCreateResponse>(this._client)(
      this._client.post('/v1/voice_isolation', {
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
   * Body param: A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
   * [our docs](/assets/inputs#audio) on audio inputs for more information.
   */
  audioUri: string;

  /**
   * Body param
   */
  model: 'eleven_voice_isolation';

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

export declare namespace VoiceIsolation {
  export {
    type VoiceIsolationCreateResponse as VoiceIsolationCreateResponse,
    type VoiceIsolationCreateParams as VoiceIsolationCreateParams,
  };
}
