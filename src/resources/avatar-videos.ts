// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AvatarVideos extends APIResource {
  /**
   * Start an asynchronous task to generate a video of an avatar speaking. Provide
   * `speech` with `type: "audio"` (audio file) or `type: "text"` (text script for
   * TTS). Poll `GET /v1/tasks/:id` to check progress and retrieve the output video
   * URL once complete.
   */
  create(body: AvatarVideoCreateParams, options?: RequestOptions): APIPromise<AvatarVideoCreateResponse> {
    return this._client.post('/v1/avatar_videos', { body, ...options });
  }
}

export interface AvatarVideoCreateResponse {
  /**
   * The ID of the avatar video task. Use `GET /v1/tasks/:id` to poll for status and
   * output.
   */
  id: string;
}

export interface AvatarVideoCreateParams {
  /**
   * The avatar configuration for the session.
   */
  avatar: AvatarVideoCreateParams.RunwayPreset | AvatarVideoCreateParams.Custom;

  /**
   * The model to use for avatar video generation.
   */
  model: 'gwm1_avatars';

  /**
   * The speech source for avatar video generation. Either an audio file or text
   * script.
   */
  speech: AvatarVideoCreateParams.Audio | AvatarVideoCreateParams.Text;
}

export namespace AvatarVideoCreateParams {
  /**
   * A preset avatar from Runway.
   */
  export interface RunwayPreset {
    /**
     * ID of a preset avatar.
     */
    presetId: 'game-character' | 'music-superstar' | 'game-character-man' | 'cat-character' | 'influencer' | 'tennis-coach' | 'human-resource' | 'fashion-designer' | 'cooking-teacher';

    type: 'runway-preset';
  }

  /**
   * A user-created avatar.
   */
  export interface Custom {
    /**
     * ID of a user-created avatar.
     */
    avatarId: string;

    type: 'custom';
  }

  /**
   * Provide an audio file for the avatar to speak.
   */
  export interface Audio {
    /**
     * A HTTPS URL.
     */
    audio: string;

    type: 'audio';
  }

  /**
   * Provide text for the avatar to speak via TTS.
   */
  export interface Text {
    /**
     * Text script for speech-driven video generation.
     */
    text: string;

    type: 'text';

    /**
     * Optional voice override for TTS. If not provided, the avatar's configured voice
     * is used.
     */
    voice?: Text.Preset | Text.Custom;
  }

  export namespace Text {
    /**
     * A preset voice from the Runway API.
     */
    export interface Preset {
      presetId: 'victoria' | 'vincent' | 'clara' | 'drew' | 'skye' | 'max' | 'morgan' | 'felix' | 'mia' | 'marcus' | 'summer' | 'ruby' | 'aurora' | 'jasper' | 'leo' | 'adrian' | 'nina' | 'emma' | 'blake' | 'david' | 'maya' | 'nathan' | 'sam' | 'georgia' | 'petra' | 'adam' | 'zach' | 'violet' | 'roman' | 'luna';

      type: 'preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      id: string;

      type: 'custom';
    }
  }
}

export declare namespace AvatarVideos {
  export {
    type AvatarVideoCreateResponse as AvatarVideoCreateResponse,
    type AvatarVideoCreateParams as AvatarVideoCreateParams
  };
}
