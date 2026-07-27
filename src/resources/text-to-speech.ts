// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class TextToSpeech extends APIResource {
  /**
   * This endpoint will start a new task to generate speech from text.
   */
  create(body: TextToSpeechCreateParams, options?: RequestOptions): APIPromise<TextToSpeechCreateResponse> {
    return this._client.post('/v1/text_to_speech', { body, ...options });
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
     * The voice to use for text-to-speech generation. If omitted, a default voice is
     * used.
     */
    voice?: SeedAudio.SeedPreset | SeedAudio.ReferenceAudio;
  }

  export namespace SeedAudio {
    /**
     * A preset voice for Seed Audio text-to-speech.
     */
    export interface SeedPreset {
      /**
       * A Seed Audio preset voice id.
       */
      presetId:
        | 'vivi_mixed_en_zh_ja_es_id'
        | 'mindy_en_es_id_pt_zh'
        | 'kian_en_zh'
        | 'cedric_en_zh'
        | 'sophie_en_zh'
        | 'jean_en_zh'
        | 'magnus_en_zh'
        | 'mabel_en_zh'
        | 'nadia_en_zh'
        | 'opal_en_zh'
        | 'pearl_en_zh'
        | 'quentin_en_zh'
        | 'corinne_mixed_en_zh'
        | 'esther_mixed_en_zh'
        | 'lyla_mixed_en_zh'
        | 'tracy_es_zh'
        | 'sandy_es_mixed_en_zh'
        | 'felix_zh'
        | 'celeste_zh'
        | 'monkey_king_zh';

      type: 'seed-preset';
    }

    /**
     * Clone from a single reference audio clip, then speak promptText in that voice.
     */
    export interface ReferenceAudio {
      /**
       * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
       * `data:audio/mp3;base64,...`, up to 16MB) containing an encoded audio. See
       * [our docs](/assets/inputs#audio) on audio inputs for more information.
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
