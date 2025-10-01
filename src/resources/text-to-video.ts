// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

export class TextToVideo extends APIResource {
  /**
   * This endpoint will start a new task to generate a video from a text prompt.
   */
  create(
    body: TextToVideoCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<TextToVideoCreateResponse> {
    return wrapAsWaitableResource<TextToVideoCreateResponse>(this._client)(
      this._client.post('/v1/text_to_video', { body, ...options }),
    );
  }
}

export interface TextToVideoCreateResponse {
  /**
   * The ID of the newly created task.
   */
  id: string;
}

export interface TextToVideoCreateParams {
  /**
   * Veo 3 videos must be 8 seconds long.
   */
  duration: 8;

  /**
   * The model variant to use.
   */
  model: 'veo3';

  /**
   * A non-empty string up to 1000 characters (measured in UTF-16 code units). This
   * should describe in detail what should appear in the output.
   */
  promptText: string;

  /**
   * A string representing the aspect ratio of the output video.
   */
  ratio: '1280:720' | '720:1280';

  /**
   * If unspecified, a random number is chosen. Varying the seed integer is a way to
   * get different results for the same other request parameters. Using the same seed
   * integer for an identical request will produce similar results.
   */
  seed?: number;
}

export declare namespace TextToVideo {
  export {
    type TextToVideoCreateResponse as TextToVideoCreateResponse,
    type TextToVideoCreateParams as TextToVideoCreateParams,
  };
}
