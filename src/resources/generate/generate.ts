// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AudioAPI from './audio';
import { Audio, ReferenceAudio, ReferenceVoice } from './audio';

export class Generate extends APIResource {
  audio: AudioAPI.Audio = new AudioAPI.Audio(this._client);
}

Generate.Audio = Audio;

export declare namespace Generate {
  export { Audio as Audio, type ReferenceVoice as ReferenceVoice, type ReferenceAudio as ReferenceAudio };
}
