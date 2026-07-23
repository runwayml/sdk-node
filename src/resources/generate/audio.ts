// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { RequestOptions } from '../../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../../lib/polling';

export class Audio extends APIResource {
  /**
   * Start an audio generation task using a saved Model Router config instead of
   * naming a model. Set input.type to speech to speak promptText verbatim, or audio
   * to generate audio described by promptText.
   */
  create(
    body: AudioCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<AudioCreateResponse> {
    return wrapAsWaitableResource<AudioCreateResponse>(this._client)(
      this._client.post('/v1/generate/audio', { body, ...options }),
    );
  }
}

export interface AudioCreateResponse {
  /**
   * The ID of the created task. Poll GET /v1/tasks/:id for the result.
   */
  id: string;

  /**
   * Metadata describing which model the router selected and why.
   */
  routing: AudioCreateResponse.Routing;
}

export namespace AudioCreateResponse {
  /**
   * Metadata describing which model the router selected and why.
   */
  export interface Routing {
    /**
     * The slug of the router config that was applied to this request.
     */
    configId: string;

    /**
     * Estimated cost, computed against current pricing.
     */
    estimatedCost: Routing.EstimatedCost;

    /**
     * The public name of the model the router selected.
     */
    model: string;

    /**
     * The provider of the selected model.
     */
    provider: string;

    /**
     * Request-side defaults resolved for the routing response. Not necessarily
     * identical to prepared model options.
     */
    resolvedInput: Routing.ResolvedInput;

    /**
     * The resolved config settings the router used for this request.
     */
    resolvedSettings: Routing.ResolvedSettings;
  }

  export namespace Routing {
    /**
     * Estimated cost, computed against current pricing.
     */
    export interface EstimatedCost {
      /**
       * Estimated cost of the generation in credits.
       */
      credits: number;
    }

    /**
     * Request-side defaults resolved for the routing response. Not necessarily
     * identical to prepared model options.
     */
    export interface ResolvedInput {
      /**
       * The prompt mode the router routed for.
       */
      type: 'speech' | 'audio';

      /**
       * How the selected model resolves the voice: the requested preset or
       * reference-audio clone, the model default for voiceless speech, or none for
       * general audio.
       */
      voice: 'preset' | 'reference-audio' | 'default' | 'none';
    }

    /**
     * The resolved config settings the router used for this request.
     */
    export interface ResolvedSettings {
      /**
       * The single optimization preference the config selected, used as the soft
       * weighting when scoring eligible models.
       */
      optimizeFor: 'cost' | 'latency' | 'quality';

      /**
       * The applied maximum credits per generation for this request’s modality, or null
       * if the config sets no ceiling.
       */
      priceCeiling: number | null;
    }
  }
}

export interface AudioCreateParams {
  /**
   * The slug of a saved Model Router config to route this request with.
   */
  configId: string;

  /**
   * Model-agnostic audio generation input. The router selects a model and maps these
   * options to it.
   */
  input: AudioCreateParams.Input;
}

export namespace AudioCreateParams {
  /**
   * Model-agnostic audio generation input. The router selects a model and maps these
   * options to it.
   */
  export interface Input {
    /**
     * For `speech`, the words to speak. For `audio`, a description of the desired
     * output.
     */
    promptText: string;

    /**
     * How promptText is interpreted: `speech` speaks it verbatim as a script; `audio`
     * treats it as a description of the desired audio, which may combine speech,
     * music, ambience, and sound effects.
     */
    type: 'speech' | 'audio';

    /**
     * Desired output duration in seconds for `audio` generation. Models that cannot
     * honor an explicit duration are excluded.
     */
    duration?: number;

    /**
     * When true, the `audio` output is designed to loop seamlessly. Models without
     * loop support are excluded.
     */
    loop?: boolean;

    /**
     * Optional reference audio clips guiding `audio` generation, for models that
     * support them. Reference each clip in promptText as @Audio1, @Audio2, and @Audio3
     * in order.
     */
    referenceAudios?: Array<Input.ReferenceAudio>;

    /**
     * The voice to speak with. When omitted, models that support a default voice
     * remain eligible.
     */
    voice?: Input.Preset | Input.ReferenceAudio;
  }

  export namespace Input {
    export interface ReferenceAudio {
      /**
       * A HTTPS URL.
       */
      uri: string;
    }

    /**
     * A preset voice.
     */
    export interface Preset {
      /**
       * A Runway preset voice id. Choosing a preset routes only to models that support
       * preset voices.
       */
      presetId:
        | 'Maya'
        | 'Arjun'
        | 'Serene'
        | 'Bernard'
        | 'Billy'
        | 'Mark'
        | 'Clint'
        | 'Mabel'
        | 'Chad'
        | 'Leslie'
        | 'Eleanor'
        | 'Elias'
        | 'Elliot'
        | 'Grungle'
        | 'Brodie'
        | 'Sandra'
        | 'Kirk'
        | 'Kylie'
        | 'Lara'
        | 'Lisa'
        | 'Malachi'
        | 'Marlene'
        | 'Martin'
        | 'Miriam'
        | 'Monster'
        | 'Paula'
        | 'Pip'
        | 'Rusty'
        | 'Ragnar'
        | 'Xylar'
        | 'Maggie'
        | 'Jack'
        | 'Katie'
        | 'Noah'
        | 'James'
        | 'Rina'
        | 'Ella'
        | 'Mariah'
        | 'Frank'
        | 'Claudia'
        | 'Niki'
        | 'Vincent'
        | 'Kendrick'
        | 'Myrna'
        | 'Tom'
        | 'Wanda'
        | 'Benjamin'
        | 'Kiana'
        | 'Rachel';

      type: 'preset';
    }

    /**
     * Clone a voice from a reference audio clip, then speak promptText in that voice.
     * Routes only to models that support voice cloning.
     */
    export interface ReferenceAudio {
      /**
       * A HTTPS URL.
       */
      audioUri: string;

      type: 'reference-audio';
    }
  }
}

export declare namespace Audio {
  export { type AudioCreateResponse as AudioCreateResponse, type AudioCreateParams as AudioCreateParams };
}
