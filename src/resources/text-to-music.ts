// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class TextToMusic extends APIResource {
  /**
   * This endpoint will start a new task to generate a song or instrumental track
   * from a text description.
   */
  create(
    params: TextToMusicCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<TextToMusicCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<TextToMusicCreateResponse>(this._client)(
      this._client.post('/v1/text_to_music', {
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

export interface TextToMusicCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: TextToMusicCreateResponse.EstimatedCost;
}

export namespace TextToMusicCreateResponse {
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

export interface TextToMusicCreateParams {
  /**
   * Body param
   */
  model: 'eleven_music_v2_5';

  /**
   * Body param: A description of the track to generate, such as its genre, mood,
   * instruments, and vocals. Prompts that name specific artists or songs are
   * rejected.
   */
  promptText: string;

  /**
   * Body param: The length of the track in whole seconds. You are billed for the
   * requested length.
   */
  duration?: number;

  /**
   * Body param: When true, the track has no vocals. When omitted, the model decides
   * from the prompt.
   */
  instrumental?: boolean;

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

export declare namespace TextToMusic {
  export {
    type TextToMusicCreateResponse as TextToMusicCreateResponse,
    type TextToMusicCreateParams as TextToMusicCreateParams,
  };
}
