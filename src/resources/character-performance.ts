// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class CharacterPerformance extends APIResource {
  /**
   * This endpoint will start a new task to control a character's facial expressions
   * and body movements using a reference video.
   */
  create(
    body: CharacterPerformanceCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<CharacterPerformanceCreateResponse> {
    return wrapAsWaitableResource<CharacterPerformanceCreateResponse>(this._client)(
      this._client.post('/v1/character_performance', { body, ...options }),
    );
  }
}

export interface CharacterPerformanceCreateResponse {
  id: string;
}

export interface CharacterPerformanceCreateParams {
  /**
   * The character to control. You can either provide a video or an image. A visually
   * recognizable face must be visible and stay within the frame.
   */
  character: CharacterPerformanceCreateParams.Image | CharacterPerformanceCreateParams.Video;

  model: 'act_two';

  /**
   * The reference video containing the performance to apply to the character.
   */
  reference: CharacterPerformanceCreateParams.Reference;

  /**
   * A boolean indicating whether to enable body control. When enabled, non-facial
   * movements and gestures will be applied to the character in addition to facial
   * expressions.
   */
  bodyControl?: boolean;

  /**
   * Settings that affect the behavior of the content moderation system.
   */
  contentModeration?: CharacterPerformanceCreateParams.ContentModeration;

  /**
   * An integer between 1 and 5 (inclusive). A larger value increases the intensity
   * of the character's expression.
   */
  expressionIntensity?: number;

  /**
   * The resolution of the output video.
   */
  ratio?: '1280:720' | '720:1280' | '960:960' | '1104:832' | '832:1104' | '1584:672';

  seed?: number;
}

export namespace CharacterPerformanceCreateParams {
  /**
   * An image of your character. In the output, the character will use the reference
   * video performance in its original static environment.
   */
  export interface Image {
    type: 'image';

    /**
     * A data URI containing an encoded image.
     */
    uri: string;
  }

  /**
   * A video of your character. In the output, the character will use the reference
   * video performance in its original animated environment and some of the
   * character's own movements.
   */
  export interface Video {
    type: 'video';

    /**
     * A data URI containing an encoded video.
     */
    uri: string;
  }

  /**
   * The reference video containing the performance to apply to the character.
   */
  export interface Reference {
    type: 'video';

    /**
     * A data URI containing an encoded video.
     */
    uri: string;
  }

  /**
   * Settings that affect the behavior of the content moderation system.
   */
  export interface ContentModeration {
    publicFigureThreshold?: 'auto' | 'low';
  }
}

export declare namespace CharacterPerformance {
  export {
    type CharacterPerformanceCreateResponse as CharacterPerformanceCreateResponse,
    type CharacterPerformanceCreateParams as CharacterPerformanceCreateParams,
  };
}
