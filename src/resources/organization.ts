// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Organization extends APIResource {
  /**
   * Get usage tier and credit balance information about the organization associated
   * with the API key used to make the request.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<OrganizationRetrieveResponse> {
    return this._client.get('/v1/organization', options);
  }

  /**
   * Fetch credit usage data broken down by model and day for the organization
   * associated with the API key used to make the request. Up to 90 days of data can
   * be queried at a time.
   */
  retrieveUsage(
    body?: OrganizationRetrieveUsageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRetrieveUsageResponse>;
  retrieveUsage(options?: Core.RequestOptions): Core.APIPromise<OrganizationRetrieveUsageResponse>;
  retrieveUsage(
    body: OrganizationRetrieveUsageParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRetrieveUsageResponse> {
    if (isRequestOptions(body)) {
      return this.retrieveUsage({}, body);
    }
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
    models: Tier.Models;
  }

  export namespace Tier {
    /**
     * An object containing model-specific limits. Each key represents a model.
     */
    export interface Models {
      /**
       * Limits associated with the act_two model.
       */
      act_two?: Models.ActTwo;

      /**
       * Limits associated with the gen3a_turbo model.
       */
      gen3a_turbo?: Models.Gen3aTurbo;

      /**
       * Limits associated with the gen4_aleph model.
       */
      gen4_aleph?: Models.Gen4Aleph;

      /**
       * Limits associated with the gen4_image model.
       */
      gen4_image?: Models.Gen4Image;

      /**
       * Limits associated with the gen4_image_turbo model.
       */
      gen4_image_turbo?: Models.Gen4ImageTurbo;

      /**
       * Limits associated with the gen4_turbo model.
       */
      gen4_turbo?: Models.Gen4Turbo;

      /**
       * Limits associated with the upscale_v1 model.
       */
      upscale_v1?: Models.UpscaleV1;
    }

    export namespace Models {
      /**
       * Limits associated with the act_two model.
       */
      export interface ActTwo {
        /**
         * The maximum number of generations that can be run concurrently for this model.
         */
        maxConcurrentGenerations: number;

        /**
         * The maximum number of generations that can be created each day for this model.
         */
        maxDailyGenerations: number;
      }

      /**
       * Limits associated with the gen3a_turbo model.
       */
      export interface Gen3aTurbo {
        /**
         * The maximum number of generations that can be run concurrently for this model.
         */
        maxConcurrentGenerations: number;

        /**
         * The maximum number of generations that can be created each day for this model.
         */
        maxDailyGenerations: number;
      }

      /**
       * Limits associated with the gen4_aleph model.
       */
      export interface Gen4Aleph {
        /**
         * The maximum number of generations that can be run concurrently for this model.
         */
        maxConcurrentGenerations: number;

        /**
         * The maximum number of generations that can be created each day for this model.
         */
        maxDailyGenerations: number;
      }

      /**
       * Limits associated with the gen4_image model.
       */
      export interface Gen4Image {
        /**
         * The maximum number of generations that can be run concurrently for this model.
         */
        maxConcurrentGenerations: number;

        /**
         * The maximum number of generations that can be created each day for this model.
         */
        maxDailyGenerations: number;
      }

      /**
       * Limits associated with the gen4_image_turbo model.
       */
      export interface Gen4ImageTurbo {
        /**
         * The maximum number of generations that can be run concurrently for this model.
         */
        maxConcurrentGenerations: number;

        /**
         * The maximum number of generations that can be created each day for this model.
         */
        maxDailyGenerations: number;
      }

      /**
       * Limits associated with the gen4_turbo model.
       */
      export interface Gen4Turbo {
        /**
         * The maximum number of generations that can be run concurrently for this model.
         */
        maxConcurrentGenerations: number;

        /**
         * The maximum number of generations that can be created each day for this model.
         */
        maxDailyGenerations: number;
      }

      /**
       * Limits associated with the upscale_v1 model.
       */
      export interface UpscaleV1 {
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
  }

  /**
   * Usage data for the organization.
   */
  export interface Usage {
    /**
     * Usage data for each model.
     */
    models: Usage.Models;
  }

  export namespace Usage {
    /**
     * Usage data for each model.
     */
    export interface Models {
      /**
       * Usage data for the act_two model.
       */
      act_two?: Models.ActTwo;

      /**
       * Usage data for the gen3a_turbo model.
       */
      gen3a_turbo?: Models.Gen3aTurbo;

      /**
       * Usage data for the gen4_aleph model.
       */
      gen4_aleph?: Models.Gen4Aleph;

      /**
       * Usage data for the gen4_image model.
       */
      gen4_image?: Models.Gen4Image;

      /**
       * Usage data for the gen4_image_turbo model.
       */
      gen4_image_turbo?: Models.Gen4ImageTurbo;

      /**
       * Usage data for the gen4_turbo model.
       */
      gen4_turbo?: Models.Gen4Turbo;

      /**
       * Usage data for the upscale_v1 model.
       */
      upscale_v1?: Models.UpscaleV1;
    }

    export namespace Models {
      /**
       * Usage data for the act_two model.
       */
      export interface ActTwo {
        /**
         * The number of generations that have been run for this model in the past day.
         */
        dailyGenerations: number;
      }

      /**
       * Usage data for the gen3a_turbo model.
       */
      export interface Gen3aTurbo {
        /**
         * The number of generations that have been run for this model in the past day.
         */
        dailyGenerations: number;
      }

      /**
       * Usage data for the gen4_aleph model.
       */
      export interface Gen4Aleph {
        /**
         * The number of generations that have been run for this model in the past day.
         */
        dailyGenerations: number;
      }

      /**
       * Usage data for the gen4_image model.
       */
      export interface Gen4Image {
        /**
         * The number of generations that have been run for this model in the past day.
         */
        dailyGenerations: number;
      }

      /**
       * Usage data for the gen4_image_turbo model.
       */
      export interface Gen4ImageTurbo {
        /**
         * The number of generations that have been run for this model in the past day.
         */
        dailyGenerations: number;
      }

      /**
       * Usage data for the gen4_turbo model.
       */
      export interface Gen4Turbo {
        /**
         * The number of generations that have been run for this model in the past day.
         */
        dailyGenerations: number;
      }

      /**
       * Usage data for the upscale_v1 model.
       */
      export interface UpscaleV1 {
        /**
         * The number of generations that have been run for this model in the past day.
         */
        dailyGenerations: number;
      }
    }
  }
}

export interface OrganizationRetrieveUsageResponse {
  /**
   * The list of models with usage during the queried time range.
   */
  models: Array<
    'upscale_v1' | 'act_two' | 'gen4_image' | 'gen3a_turbo' | 'gen4_turbo' | 'gen4_aleph' | 'gen4_image_turbo'
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
       * The number of credits used for the model.
       */
      amount: number;

      /**
       * The model whose usage resulted in the credit usage.
       */
      model:
        | 'upscale_v1'
        | 'act_two'
        | 'gen4_image'
        | 'gen3a_turbo'
        | 'gen4_turbo'
        | 'gen4_aleph'
        | 'gen4_image_turbo';
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
