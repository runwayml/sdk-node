// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AudioAPI from './audio';
import { Audio, AudioCreateParams, AudioCreateResponse } from './audio';
import * as ImageAPI from './image';
import { Image, ImageCreateParams, ImageCreateResponse } from './image';
import * as VideoAPI from './video';
import { Video, VideoCreateParams, VideoCreateResponse } from './video';

export class Generate extends APIResource {
  video: VideoAPI.Video = new VideoAPI.Video(this._client);
  image: ImageAPI.Image = new ImageAPI.Image(this._client);
  audio: AudioAPI.Audio = new AudioAPI.Audio(this._client);
}

Generate.Video = Video;
Generate.Image = Image;
Generate.Audio = Audio;

export declare namespace Generate {
  export {
    Video as Video,
    type VideoCreateResponse as VideoCreateResponse,
    type VideoCreateParams as VideoCreateParams,
  };

  export {
    Image as Image,
    type ImageCreateResponse as ImageCreateResponse,
    type ImageCreateParams as ImageCreateParams,
  };

  export {
    Audio as Audio,
    type AudioCreateResponse as AudioCreateResponse,
    type AudioCreateParams as AudioCreateParams,
  };
}
