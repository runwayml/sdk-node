// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';
import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';

export class SpeechToSpeech extends APIResource {
  /**
   * This endpoint will start a new task to convert speech from one voice to another
   * in audio or video.
   */
  create(
    body: SpeechToSpeechCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<SpeechToSpeechCreateResponse> {
    return wrapAsWaitableResource<SpeechToSpeechCreateResponse>(this._client)(
      this._client.post('/v1/speech_to_speech', { body, ...options }),
    );
  }
}

export interface SpeechToSpeechCreateResponse {
  id: string;
}

export interface SpeechToSpeechCreateParams {
  media: SpeechToSpeechCreateParams.Audio | SpeechToSpeechCreateParams.Video;

  model: 'eleven_multilingual_sts_v2';

  /**
   * The voice to use for the generated speech.
   */
  voice: SpeechToSpeechCreateParams.Voice;

  removeBackgroundNoise?: boolean;
}

export namespace SpeechToSpeechCreateParams {
  export interface Audio {
    type: 'audio';

    /**
     * A data URI containing encoded audio.
     */
    uri: string;
  }

  export interface Video {
    type: 'video';

    /**
     * A data URI containing an encoded video.
     */
    uri: string;
  }

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

export declare namespace SpeechToSpeech {
  export {
    type SpeechToSpeechCreateResponse as SpeechToSpeechCreateResponse,
    type SpeechToSpeechCreateParams as SpeechToSpeechCreateParams,
  };
}
