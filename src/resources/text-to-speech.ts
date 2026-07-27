// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class TextToSpeech extends APIResource {
  /**
   * This endpoint will start a new task to generate speech from text.
   */
  create(
    body: TextToSpeechCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<TextToSpeechCreateResponse> {
    return wrapAsWaitableResource<TextToSpeechCreateResponse>(this._client)(
      this._client.post('/v1/text_to_speech', { body, ...options }),
    );
  }
}

export interface TextToSpeechCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;
}

export type TextToSpeechCreateParams =
  | TextToSpeechCreateParams.SeedAudio
  | TextToSpeechCreateParams.ElevenMultilingualV2;

export declare namespace TextToSpeechCreateParams {
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
     * Output sample rate in Hz.
     */
    sampleRate?: 8000 | 16000 | 24000 | 32000 | 44100 | 48000;

    /**
     * Relative speech speed. Negative is slower, positive is faster; 0 is normal.
     */
    speechRate?: number;

    /**
     * Clone from a single reference audio clip, then speak promptText in that voice.
     */
    voice?: SeedAudio.Voice;
  }

  export namespace SeedAudio {
    /**
     * Clone from a single reference audio clip, then speak promptText in that voice.
     */
    export interface Voice {
      /**
       * A HTTPS URL.
       */
      audioUri: string;

      type: 'reference-audio';
    }
  }

  export interface ElevenMultilingualV2 {
    model: 'eleven_multilingual_v2';

    /**
     * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
     * should describe in detail what should appear in the output.
     */
    promptText: string;

    /**
     * A voice preset from the RunwayML API.
     */
    voice: ElevenMultilingualV2.Voice;
  }

  export namespace ElevenMultilingualV2 {
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
}

export declare namespace TextToSpeech {
  export {
    type TextToSpeechCreateResponse as TextToSpeechCreateResponse,
    type TextToSpeechCreateParams as TextToSpeechCreateParams,
  };
}
