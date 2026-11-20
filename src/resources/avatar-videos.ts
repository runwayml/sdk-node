// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class AvatarVideos extends APIResource {
  /**
   * Start an asynchronous task to generate a video of an avatar speaking. Provide
   * `speech` with `type: "audio"` (audio file) or `type: "text"` (text script for
   * TTS). Poll `GET /v1/tasks/:id` to check progress and retrieve the output video
   * URL once complete.
   */
  create(
    params: AvatarVideoCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<AvatarVideoCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<AvatarVideoCreateResponse>(this._client)(
      this._client.post('/v1/avatar_videos', {
        body,
        ...options,
        headers: buildHeaders([
          { ...(xRunwayTags != null ? { 'X-Runway-Tags': xRunwayTags } : undefined) },
          options?.headers,
        ]),
      }),
    );
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
   * Body param: The avatar configuration for the session.
   */
  avatar: AvatarVideoCreateParams.RunwayPreset | AvatarVideoCreateParams.Custom;

  /**
   * Body param: The model to use for avatar video generation.
   */
  model: 'gwm1_avatars';

  /**
   * Body param: The speech source for avatar video generation. Either an audio file
   * or text script.
   */
  speech: AvatarVideoCreateParams.Audio | AvatarVideoCreateParams.Text;

  /**
   * Header param: Comma-separated tags to attribute this generation's credit usage
   * to, so you can filter and break down usage with `POST /v1/organization/usage`.
   * Each tag is a plain label (`campaign-q4`) or a `key:value` pair (`team:growth`),
   * split at the first colon. Tags are case-insensitive and stored lowercase. Up to
   * 10 tags, each up to 64 characters of letters, numbers, and `_ - . / :`. An
   * invalid tag rejects the request with a 400. Workflow runs pass their tags on to
   * every generation they start.
   *
   * **Tags appear in usage reports. Do not put end-user PII (like names or emails)
   * in them.**
   */
  'X-Runway-Tags'?: string;
}

export namespace AvatarVideoCreateParams {
  /**
   * A preset avatar from Runway.
   */
  export interface RunwayPreset {
    /**
     * ID of a preset avatar.
     */
    presetId:
      | 'game-character'
      | 'music-superstar'
      | 'game-character-man'
      | 'cat-character'
      | 'influencer'
      | 'tennis-coach'
      | 'human-resource'
      | 'fashion-designer'
      | 'cooking-teacher';

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
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:audio/mp3;base64,...`, up to 5MB) containing an encoded audio. See
     * [our docs](/assets/inputs#audio) on audio inputs for more information.
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
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

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
    type AvatarVideoCreateParams as AvatarVideoCreateParams,
  };
}
