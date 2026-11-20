// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
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
   *       uri: 'https://example.com/image.jpg',
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
    params: CharacterPerformanceCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<CharacterPerformanceCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<CharacterPerformanceCreateResponse>(this._client)(
      this._client.post('/v1/character_performance', {
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

export interface CharacterPerformanceCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: CharacterPerformanceCreateResponse.EstimatedCost;
}

export namespace CharacterPerformanceCreateResponse {
  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  export interface EstimatedCost {
    /**
     * Estimated cost of the generation in credits.
     */
    credits: number;
  }
}

export interface CharacterPerformanceCreateParams {
  /**
   * Body param: The character to control. You can either provide a video or an
   * image. A visually recognizable face must be visible and stay within the frame.
   */
  character: CharacterPerformanceCreateParams.Image | CharacterPerformanceCreateParams.Video;

  /**
   * Body param
   */
  model: 'act_two';

  /**
   * Body param: A video of a person performing in the manner that you would like
   * your character to perform. The video must be between 3 and 30 seconds in
   * duration.
   */
  reference: CharacterPerformanceCreateParams.Reference;

  /**
   * Body param: A boolean indicating whether to enable body control. When enabled,
   * non-facial movements and gestures will be applied to the character in addition
   * to facial expressions.
   */
  bodyControl?: boolean;

  /**
   * Body param: Settings that affect the behavior of the content moderation system.
   */
  contentModeration?: CharacterPerformanceCreateParams.ContentModeration;

  /**
   * Body param: An integer between 1 and 5 (inclusive). A larger value increases the
   * intensity of the character's expression.
   */
  expressionIntensity?: number;

  /**
   * Body param: The resolution of the output video.
   */
  ratio?: '1280:720' | '720:1280' | '960:960' | '1104:832' | '832:1104' | '1584:672';

  /**
   * Body param: If unspecified, a random number is chosen. Varying the seed integer
   * is a way to get different results for the same other request parameters. Using
   * the same seed integer for an identical request will produce similar results.
   */
  seed?: number;

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

export namespace CharacterPerformanceCreateParams {
  /**
   * An image of your character. In the output, the character will use the reference
   * video performance in its original static environment.
   */
  export interface Image {
    type: 'image';

    /**
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:image/png;base64,...`, up to 5MB) containing an encoded image. See
     * [our docs](/assets/inputs#images) on image inputs for more information.
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
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
     * [our docs](/assets/inputs#videos) on video inputs for more information.
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
     * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
     * `data:video/mp4;base64,...`, up to 5MB) containing an encoded video. See
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
