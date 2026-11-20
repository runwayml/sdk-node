// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class SoundEffect extends APIResource {
  /**
   * This endpoint will start a new task to generate sound effects from a text
   * description.
   */
  create(
    params: SoundEffectCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<SoundEffectCreateResponse> {
    const { 'X-Runway-Tags': xRunwayTags, ...body } = params;
    return wrapAsWaitableResource<SoundEffectCreateResponse>(this._client)(
      this._client.post('/v1/sound_effect', {
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

export interface SoundEffectCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: SoundEffectCreateResponse.EstimatedCost;
}

export namespace SoundEffectCreateResponse {
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

export type SoundEffectCreateParams =
  | SoundEffectCreateParams.SeedAudio
  | SoundEffectCreateParams.MireloSfx2_0
  | SoundEffectCreateParams.ElevenTextToSoundV2;

export declare namespace SoundEffectCreateParams {
  export interface SeedAudio {
    /**
     * Body param
     */
    model: 'seed_audio';

    /**
     * Body param: A non-empty text prompt. For text-to-speech, the words to speak. For
     * text-to-audio, a scene description that can include voice direction, dialogue,
     * music, and sound effects.
     */
    promptText: string;

    /**
     * Body param: Relative output loudness. Negative is quieter, positive is louder; 0
     * is normal.
     */
    loudnessRate?: number;

    /**
     * Body param: Output audio container/format.
     */
    outputFormat?: 'wav' | 'mp3' | 'ogg_opus';

    /**
     * Body param: Pitch shift in semitones. Negative lowers, positive raises; 0 is
     * unchanged.
     */
    pitchRate?: number;

    /**
     * Body param: Up to three reference audio clips. When provided, reference them in
     * promptText as @Audio1, @Audio2, and @Audio3 in order.
     */
    referenceAudios?: Array<string>;

    /**
     * Body param: Output sample rate in Hz.
     */
    sampleRate?: 8000 | 16000 | 24000 | 32000 | 44100 | 48000;

    /**
     * Body param: Relative speech speed. Negative is slower, positive is faster; 0 is
     * normal.
     */
    speechRate?: number;

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

  export interface MireloSfx2_0 {
    /**
     * Body param: The duration of the generated audio in seconds.
     */
    duration: number;

    /**
     * Body param
     */
    model: 'mirelo_sfx_2_0';

    /**
     * Body param: A description of the sound effects to generate.
     */
    promptText: string;

    /**
     * Body param: The format of the generated audio.
     */
    format?: 'mp3' | 'wav' | 'flac';

    /**
     * Body param: Sounds to avoid in the generated audio.
     */
    negativePrompt?: string;

    /**
     * Body param: The number of audio variations to generate.
     */
    numVariants?: number;

    /**
     * Body param: A seed for reproducible generation.
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

  export interface ElevenTextToSoundV2 {
    /**
     * Body param
     */
    model: 'eleven_text_to_sound_v2';

    /**
     * Body param: A text description of the sound effect to generate.
     */
    promptText: string;

    /**
     * Body param: The duration of the sound effect in seconds, between 0.5 and 30
     * seconds. If not provided, the duration will be determined automatically based on
     * the text description.
     */
    duration?: number;

    /**
     * Body param: Whether the output sound effect should be designed to loop
     * seamlessly.
     */
    loop?: boolean;

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
}

export declare namespace SoundEffect {
  export {
    type SoundEffectCreateResponse as SoundEffectCreateResponse,
    type SoundEffectCreateParams as SoundEffectCreateParams,
  };
}
