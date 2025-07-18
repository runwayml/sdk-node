// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class CharacterPerformance extends APIResource {
  /**
   * This endpoint will start a new task to control a character's facial expressions
   * and body movements using a reference video.
   */
  create(
    body: CharacterPerformanceCreateParams,
    options?: Core.RequestOptions,
  ): APIPromiseWithAwaitableTask<CharacterPerformanceCreateResponse> {
    return wrapAsWaitableResource<CharacterPerformanceCreateResponse>(this._client)(
      this._client.post('/v1/character_performance', { body, ...options }),
    );
  }
}

export interface CharacterPerformanceCreateResponse {
  /**
   * The ID of the newly created task.
   */
  id: string;
}

export interface CharacterPerformanceCreateParams {
  /**
   * The character to control. You can either provide a video or an image. A visually
   * recognizable face must be visible and stay within the frame.
   */
  character: CharacterPerformanceCreateParams.Video | CharacterPerformanceCreateParams.Image;

  /**
   * The model variant to use.
   */
  model: 'act_two';

  /**
   * The resolution of the output video.
   */
  ratio: '1280:720' | '720:1280' | '960:960' | '1104:832' | '832:1104' | '1584:672';

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
   * If unspecified, a random number is chosen. Varying the seed integer is a way to
   * get different results for the same other request parameters. Using the same seed
   * integer for an identical request will produce similar results.
   */
  seed?: number;
}

export namespace CharacterPerformanceCreateParams {
  /**
   * A video of your character. In the output, the character will use the reference
   * video performance in its original animated environment and some of the
   * character's own movements.
   */
  export interface Video {
    type: 'video';

    /**
     * A HTTPS URL pointing to a video or a data URI containing a video of your
     * character. See [our docs](/assets/inputs#videos) on video inputs for more
     * information.
     */
    uri: string;
  }

  /**
   * An image of your character. In the output, the character will use the reference
   * video performance in its original static environment.
   */
  export interface Image {
    type: 'image';

    /**
     * A HTTPS URL pointing to an image or a data URI containing an image of your
     * character. See [our docs](/assets/inputs#images) on image inputs for more
     * information.
     */
    uri: string;
  }

  export interface Reference {
    type: 'video';

    /**
     * A HTTPS URL pointing to a video or a data URI containing a video of a person
     * performing in the manner that you would like your character to perform. The
     * video must be between 3 and 30 seconds in duration. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
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
