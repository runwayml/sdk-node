// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

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
  id: string;
}

export interface TextToSpeechCreateParams {
  model: 'eleven_multilingual_v2';

  /**
   * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
   * should describe in detail what should appear in the output.
   */
  promptText: string;

  /**
   * The voice to use for the generated speech.
   */
  voice: TextToSpeechCreateParams.Voice;
}

export namespace TextToSpeechCreateParams {
  /**
   * The voice to use for the generated speech.
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

export declare namespace TextToSpeech {
  export {
    type TextToSpeechCreateResponse as TextToSpeechCreateResponse,
    type TextToSpeechCreateParams as TextToSpeechCreateParams,
  };
}
