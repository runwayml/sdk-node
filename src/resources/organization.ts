// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Organization extends APIResource {
  /**
   * Get usage tier and credit balance information about the organization associated
   * with the API key used to make the request.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<OrganizationRetrieveResponse> {
    return this._client.get('/v1/organization', options);
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
       * Limits associated with the gen3a_turbo model.
       */
      gen3a_turbo?: Models.Gen3aTurbo;

      /**
       * Limits associated with the gen4_turbo model.
       */
      gen4_turbo?: Models.Gen4Turbo;
    }

    export namespace Models {
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
       * Usage data for the gen3a_turbo model.
       */
      gen3a_turbo?: Models.Gen3aTurbo;

      /**
       * Usage data for the gen4_turbo model.
       */
      gen4_turbo?: Models.Gen4Turbo;
    }

    export namespace Models {
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
       * Usage data for the gen4_turbo model.
       */
      export interface Gen4Turbo {
        /**
         * The number of generations that have been run for this model in the past day.
         */
        dailyGenerations: number;
      }
    }
  }
}

export declare namespace Organization {
  export { type OrganizationRetrieveResponse as OrganizationRetrieveResponse };
}
