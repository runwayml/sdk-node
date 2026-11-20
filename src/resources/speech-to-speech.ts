// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';
import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class SpeechToSpeech extends APIResource {
  /**
   * This endpoint will start a new task to convert speech from one voice to another
   * in audio or video.
   */
  create(
    params: SpeechToSpeechCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<SpeechToSpeechCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<SpeechToSpeechCreateResponse>(this._client)(
      this._client.post('/v1/speech_to_speech', {
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

export interface SpeechToSpeechCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: SpeechToSpeechCreateResponse.EstimatedCost;
}

export namespace SpeechToSpeechCreateResponse {
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

export interface SpeechToSpeechCreateParams {
  /**
   * Body param: An audio file containing dialogue to be processed.
   */
  media: SpeechToSpeechCreateParams.Audio | SpeechToSpeechCreateParams.Video;

  /**
   * Body param
   */
  model: 'eleven_multilingual_sts_v2';

  /**
   * Body param: A voice preset from the RunwayML API.
   */
  voice: SpeechToSpeechCreateParams.Voice;

  /**
   * Body param: Whether to remove background noise from the generated speech.
   */
  removeBackgroundNoise?: boolean;

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

export namespace SpeechToSpeechCreateParams {
  /**
   * An audio file containing dialogue to be processed.
   */
  export interface Audio {
    type: 'audio';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
     * [our docs](/assets/inputs#audio) on audio inputs for more information.
     */
    uri: string;
  }

  /**
   * A video file containing dialogue to be processed.
   */
  export interface Video {
    type: 'video';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
     */
    uri: string;
  }

  /**
   * A voice preset from the RunwayML API.
   */
  export interface Voice {
    /**
     * The preset voice ID to use for the generated speech.
     */
    presetId:
      | 'Maya'
      | 'Arjun'
      | 'Serene'
      | 'Bernard'
      | 'Billy'
      | 'Mark'
      | 'Clint'
      | 'Mabel'
      | 'Chad'
      | 'Leslie'
      | 'Eleanor'
      | 'Elias'
      | 'Elliot'
      | 'Grungle'
      | 'Brodie'
      | 'Sandra'
      | 'Kirk'
      | 'Kylie'
      | 'Lara'
      | 'Lisa'
      | 'Malachi'
      | 'Marlene'
      | 'Martin'
      | 'Miriam'
      | 'Monster'
      | 'Paula'
      | 'Pip'
      | 'Rusty'
      | 'Ragnar'
      | 'Xylar'
      | 'Maggie'
      | 'Jack'
      | 'Katie'
      | 'Noah'
      | 'James'
      | 'Rina'
      | 'Ella'
      | 'Mariah'
      | 'Frank'
      | 'Claudia'
      | 'Niki'
      | 'Vincent'
      | 'Kendrick'
      | 'Myrna'
      | 'Tom'
      | 'Wanda'
      | 'Benjamin'
      | 'Kiana'
      | 'Rachel';

    type: 'runway-preset';
  }
}

export declare namespace SpeechToSpeech {
  export {
    type SpeechToSpeechCreateResponse as SpeechToSpeechCreateResponse,
    type SpeechToSpeechCreateParams as SpeechToSpeechCreateParams,
  };
}
