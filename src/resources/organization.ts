// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Organization extends APIResource {
  /**
   * Get usage tier and credit balance information about the organization associated
   * with the API key used to make the request.
   */
  retrieve(options?: RequestOptions): APIPromise<OrganizationRetrieveResponse> {
    return this._client.get('/v1/organization', options);
  }

  /**
   * Fetch credit usage data broken down by model and day for the organization
   * associated with the API key used to make the request. Up to 90 days of data can
   * be queried at a time.
   */
  retrieveUsage(
    body: OrganizationRetrieveUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationRetrieveUsageResponse> {
    return this._client.post('/v1/organization/usage', { body, ...options });
  }
}

export interface OrganizationRetrieveResponse {
  /**
   * The number of credits remaining in the organization account.
   */
  creditBalance: number;

  /**
   * Limits associated with the organization's tier.
   */
  tier: OrganizationRetrieveResponse.Tier;

  /**
   * Usage data for the organization.
   */
  usage: OrganizationRetrieveResponse.Usage;
}

export namespace OrganizationRetrieveResponse {
  /**
   * Limits associated with the organization's tier.
   */
  export interface Tier {
    /**
     * The maximum number of credits that can be purchased in a month.
     */
    maxMonthlyCreditSpend: number;

    /**
     * An object containing model-specific limits. Each key represents a model.
     */
    models: { [key: string]: Tier.Models };
  }

  export namespace Tier {
    /**
     * Limits associated with the model.
     */
    export interface Models {
      /**
       * The maximum number of generations that can be run concurrently for this model.
       */
      maxConcurrentGenerations: number;

      /**
       * The maximum number of generations that can be created each day for this model.
       */
      maxDailyGenerations: number;
    }
  }

  /**
   * Usage data for the organization.
   */
  export interface Usage {
    models: { [key: string]: Usage.Models };
  }

  export namespace Usage {
    /**
     * Usage data for the model.
     */
    export interface Models {
      /**
       * The number of generations that have been run for this model in the past day.
       */
      dailyGenerations: number;
    }
  }
}

export interface OrganizationRetrieveUsageResponse {
  /**
   * The list of models with usage during the queried time range.
   */
  models: Array<
    | 'gen3a_turbo'
    | 'gen4_turbo'
    | 'gen4_image'
    | 'gen4_image_turbo'
    | 'act_two'
    | 'gen4_aleph'
    | 'veo3'
    | 'veo3.1'
    | 'veo3.1_fast'
    | 'gemini_2.5_flash'
    | 'eleven_multilingual_v2'
    | 'eleven_text_to_sound_v2'
    | 'eleven_voice_isolation'
    | 'eleven_voice_dubbing'
    | 'eleven_multilingual_sts_v2'
  >;

  results: Array<OrganizationRetrieveUsageResponse.Result>;
}

export namespace OrganizationRetrieveUsageResponse {
  export interface Result {
    /**
     * The date of the usage data in ISO-8601 format (YYYY-MM-DD). All dates are in
     * UTC.
     */
    date: string;

    /**
     * The credits used per model for the given date.
     */
    usedCredits: Array<Result.UsedCredit>;
  }

  export namespace Result {
    export interface UsedCredit {
      /**
       * The number of credits spent on the model.
       */
      amount: number;

      /**
       * The model that credits were spent on.
       */
      model:
        | 'gen3a_turbo'
        | 'gen4_turbo'
        | 'gen4_image'
        | 'gen4_image_turbo'
        | 'act_two'
        | 'gen4_aleph'
        | 'veo3'
        | 'veo3.1'
        | 'veo3.1_fast'
        | 'gemini_2.5_flash'
        | 'eleven_multilingual_v2'
        | 'eleven_text_to_sound_v2'
        | 'eleven_voice_isolation'
        | 'eleven_voice_dubbing'
        | 'eleven_multilingual_sts_v2';
    }
  }
}

export interface OrganizationRetrieveUsageParams {
  /**
   * The end date of the usage data in ISO-8601 format (YYYY-MM-DD), not inclusive.
   * If unspecified, it will default to thirty days after the start date. Must be
   * less than or equal to 90 days after the start date. All dates are in UTC.
   */
  beforeDate?: string;

  /**
   * The start date of the usage data in ISO-8601 format (YYYY-MM-DD). If
   * unspecified, it will default to 30 days before the current date. All dates are
   * in UTC.
   */
  startDate?: string;
}

export declare namespace Organization {
  export {
    type OrganizationRetrieveResponse as OrganizationRetrieveResponse,
    type OrganizationRetrieveUsageResponse as OrganizationRetrieveUsageResponse,
    type OrganizationRetrieveUsageParams as OrganizationRetrieveUsageParams,
  };
}
