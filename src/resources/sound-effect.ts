// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class SoundEffect extends APIResource {
  /**
   * This endpoint will start a new task to generate sound effects from a text
   * description.
   */
  create(
    body: SoundEffectCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<SoundEffectCreateResponse> {
    return wrapAsWaitableResource<SoundEffectCreateResponse>(this._client)(
      this._client.post('/v1/sound_effect', { body, ...options }),
    );
  }
}

export interface SoundEffectCreateResponse {
  id: string;
}

export interface SoundEffectCreateParams {
  model: 'eleven_text_to_sound_v2';

  /**
   * A text description of the sound effect to generate.
   */
  promptText: string;

  /**
   * The duration of the sound effect in seconds, between 0.5 and 30 seconds. If not
   * provided, the duration will be determined automatically based on the text
   * description.
   */
  duration?: number;

  /**
   * Whether the output sound effect should be designed to loop seamlessly.
   */
  loop?: boolean;
}

export declare namespace SoundEffect {
  export {
    type SoundEffectCreateResponse as SoundEffectCreateResponse,
    type SoundEffectCreateParams as SoundEffectCreateParams,
  };
}
