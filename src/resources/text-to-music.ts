// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
    body: TextToMusicCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<TextToMusicCreateResponse> {
    return wrapAsWaitableResource<TextToMusicCreateResponse>(this._client)(
      this._client.post('/v1/text_to_music', { body, ...options }),
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
  model: 'eleven_music_v2_5';

  /**
   * A description of the track to generate, such as its genre, mood, instruments,
   * and vocals. Prompts that name specific artists or songs are rejected.
   */
  promptText: string;

  /**
   * The length of the track in whole seconds. You are billed for the requested
   * length.
   */
  duration?: number;

  /**
   * When true, the track has no vocals. When omitted, the model decides from the
   * prompt.
   */
  instrumental?: boolean;
}

export declare namespace TextToMusic {
  export {
    type TextToMusicCreateResponse as TextToMusicCreateResponse,
    type TextToMusicCreateParams as TextToMusicCreateParams,
  };
}
