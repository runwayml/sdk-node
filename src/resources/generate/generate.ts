// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VideoAPI from './video';
import { Video, VideoCreateParams, VideoCreateResponse } from './video';

export class Generate extends APIResource {
  video: VideoAPI.Video = new VideoAPI.Video(this._client);
}

Generate.Video = Video;

export declare namespace Generate {
  export {
    Video as Video,
    type VideoCreateResponse as VideoCreateResponse,
    type VideoCreateParams as VideoCreateParams,
  };
}
