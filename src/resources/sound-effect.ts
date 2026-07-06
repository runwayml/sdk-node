// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
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
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export type SoundEffectCreateParams =
  | SoundEffectCreateParams.SeedAudio
  | SoundEffectCreateParams.ElevenTextToSoundV2;

export declare namespace SoundEffectCreateParams {
  export interface SeedAudio {
    model: 'seed_audio';

    /**
     * A non-empty text prompt. For text-to-speech, the words to speak. For
     * text-to-audio, a scene description that can include voice direction, dialogue,
     * music, and sound effects.
     */
    promptText: string;

    /**
     * Relative output loudness. Negative is quieter, positive is louder; 0 is normal.
     */
    loudnessRate?: number;

    /**
     * Output audio container/format.
     */
    outputFormat?: 'wav' | 'mp3' | 'ogg_opus';

    /**
     * Pitch shift in semitones. Negative lowers, positive raises; 0 is unchanged.
     */
    pitchRate?: number;

    /**
     * Up to three reference audio clips. When provided, reference them in promptText
     * as @Audio1, @Audio2, and @Audio3 in order.
     */
    referenceAudios?: Array<string>;

    /**
     * Output sample rate in Hz.
     */
    sampleRate?: 8000 | 16000 | 24000 | 32000 | 44100 | 48000;

    /**
     * Relative speech speed. Negative is slower, positive is faster; 0 is normal.
     */
    speechRate?: number;
  }

  export interface ElevenTextToSoundV2 {
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
}

export declare namespace SoundEffect {
  export {
    type SoundEffectCreateResponse as SoundEffectCreateResponse,
    type SoundEffectCreateParams as SoundEffectCreateParams,
  };
}
