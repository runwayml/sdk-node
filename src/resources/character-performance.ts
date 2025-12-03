// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CharacterPerformance extends APIResource {
  /**
   * This endpoint will start a new task to control a character's facial expressions
   * and body movements using a reference video.
   *
   * @example
   * ```ts
   * const characterPerformance =
   *   await client.characterPerformance.create({
   *     character: {
   *       type: 'image',
   *       uri: 'https://example.com/file',
   *     },
   *     model: 'act_two',
   *     reference: {
   *       type: 'video',
   *       uri: 'https://example.com/reference-performance.mp4',
   *     },
   *   });
   * ```
   */
  create(
    body: CharacterPerformanceCreateParams,
    options?: RequestOptions,
  ): APIPromise<CharacterPerformanceCreateResponse> {
    return this._client.post('/v1/character_performance', { body, ...options });
  }
}

export interface CharacterPerformanceCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
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
   * A video of a person performing in the manner that you would like your character
   * to perform. The video must be between 3 and 30 seconds in duration.
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

  /**
   * If unspecified, a random number is chosen. Varying the seed integer is a way to
   * get different results for the same other request parameters. Using the same seed
   * integer for an identical request will produce similar results.
   */
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
     * A HTTPS URL.
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
     * A HTTPS URL.
     */
    uri: string;
  }

  /**
   * A video of a person performing in the manner that you would like your character
   * to perform. The video must be between 3 and 30 seconds in duration.
   */
  export interface Reference {
    type: 'video';

    /**
     * A HTTPS URL.
     */
    uri: string;
  }

  /**
   * Settings that affect the behavior of the content moderation system.
   */
  export interface ContentModeration {
    /**
     * When set to `low`, the content moderation system will be less strict about
     * preventing generations that include recognizable public figures.
     */
    publicFigureThreshold?: 'auto' | 'low';
  }
}

export declare namespace CharacterPerformance {
  export {
    type CharacterPerformanceCreateResponse as CharacterPerformanceCreateResponse,
    type CharacterPerformanceCreateParams as CharacterPerformanceCreateParams,
  };
}
