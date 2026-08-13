// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class Audio extends APIResource {}

/**
 * Clone a voice from a reference audio clip, then speak promptText in that voice.
 * Routes only to models that support voice cloning.
 */
export interface ReferenceVoice {
  /**
   * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:audio/mp3;base64,...`, up to 16MB) containing an encoded audio. See
   * [our docs](/assets/inputs#audio) on audio inputs for more information.
   */
  audioUri: string;

  type: 'reference-audio';
}

export interface ReferenceAudio {
  /**
   * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:audio/mp3;base64,...`, up to 16MB) containing an encoded audio. See
   * [our docs](/assets/inputs#audio) on audio inputs for more information.
   */
  uri: string;
}

export declare namespace Audio {
  export { type ReferenceVoice as ReferenceVoice, type ReferenceAudio as ReferenceAudio };
}
