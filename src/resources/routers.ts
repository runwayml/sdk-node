// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Routers extends APIResource {
  /**
   * Create a Model Router configuration.
   */
  create(body: RouterCreateParams, options?: RequestOptions): APIPromise<RouterCreateResponse> {
    return this._client.post('/v1/routers', { body, ...options });
  }

  /**
   * Retrieve a Model Router configuration by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RouterRetrieveResponse> {
    return this._client.get(path`/v1/routers/${id}`, options);
  }

  /**
   * Update a Model Router configuration. Settings changes append a new version; name
   * and description updates do not. Settings are merged with the current snapshot —
   * omitted fields keep their existing values.
   */
  update(
    id: string,
    body: RouterUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RouterUpdateResponse> {
    return this._client.patch(path`/v1/routers/${id}`, { body, ...options });
  }

  /**
   * List Model Router configurations for the authenticated organization with
   * cursor-based pagination.
   */
  list(
    query: RouterListParams,
    options?: RequestOptions,
  ): PagePromise<RouterListResponsesCursorPage, RouterListResponse> {
    return this._client.getAPIList('/v1/routers', CursorPage<RouterListResponse>, { query, ...options });
  }

  /**
   * Delete a Model Router configuration. Deleted Model Routers cannot be used for
   * generation.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/routers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type RouterListResponsesCursorPage = CursorPage<RouterListResponse>;

export interface RouterCreateResponse {
  /**
   * The Model Router's primary key ID (UUID). Use it to manage this router via the
   * API; use the slug to reference the router in generation requests.
   */
  id: string;

  /**
   * When the Model Router was created.
   */
  createdAt: string;

  /**
   * An optional Model Router description.
   */
  description: string | null;

  /**
   * Human-friendly Model Router display name shown in the dev portal. Mutable, and
   * not used to reference the router in requests.
   */
  name: string;

  settings: RouterCreateResponse.Settings;

  /**
   * Immutable slug used to reference this Model Router in generation requests (for
   * example, production-video). Unique within the API project. The UUID id remains
   * the canonical management identifier.
   */
  slug: string;

  /**
   * When the Model Router was last updated.
   */
  updatedAt: string;

  /**
   * Current settings version. Increments when settings change; name and description
   * updates do not create a new version.
   */
  version: number;
}

export namespace RouterCreateResponse {
  export interface Settings {
    /**
     * Settings JSON schema version used when this snapshot was written.
     */
    schemaVersion: 1;

    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    maxCreditsPerGeneration?: Settings.MaxCreditsPerGeneration;

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    models?: Settings.Models;

    /**
     * Soft preference among eligible models: cost, latency, or quality.
     */
    optimizeFor?: 'cost' | 'latency' | 'quality';
  }

  export namespace Settings {
    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    export interface MaxCreditsPerGeneration {
      audio?: number;

      image?: number;

      video?: number;
    }

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    export interface Models {
      ids: Array<string>;

      mode: 'allow_new_except' | 'allowlist_only';
    }
  }
}

export interface RouterRetrieveResponse {
  /**
   * The Model Router's primary key ID (UUID). Use it to manage this router via the
   * API; use the slug to reference the router in generation requests.
   */
  id: string;

  /**
   * When the Model Router was created.
   */
  createdAt: string;

  /**
   * An optional Model Router description.
   */
  description: string | null;

  /**
   * Human-friendly Model Router display name shown in the dev portal. Mutable, and
   * not used to reference the router in requests.
   */
  name: string;

  settings: RouterRetrieveResponse.Settings;

  /**
   * Immutable slug used to reference this Model Router in generation requests (for
   * example, production-video). Unique within the API project. The UUID id remains
   * the canonical management identifier.
   */
  slug: string;

  /**
   * When the Model Router was last updated.
   */
  updatedAt: string;

  /**
   * Current settings version. Increments when settings change; name and description
   * updates do not create a new version.
   */
  version: number;
}

export namespace RouterRetrieveResponse {
  export interface Settings {
    /**
     * Settings JSON schema version used when this snapshot was written.
     */
    schemaVersion: 1;

    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    maxCreditsPerGeneration?: Settings.MaxCreditsPerGeneration;

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    models?: Settings.Models;

    /**
     * Soft preference among eligible models: cost, latency, or quality.
     */
    optimizeFor?: 'cost' | 'latency' | 'quality';
  }

  export namespace Settings {
    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    export interface MaxCreditsPerGeneration {
      audio?: number;

      image?: number;

      video?: number;
    }

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    export interface Models {
      ids: Array<string>;

      mode: 'allow_new_except' | 'allowlist_only';
    }
  }
}

export interface RouterUpdateResponse {
  /**
   * The Model Router's primary key ID (UUID). Use it to manage this router via the
   * API; use the slug to reference the router in generation requests.
   */
  id: string;

  /**
   * When the Model Router was created.
   */
  createdAt: string;

  /**
   * An optional Model Router description.
   */
  description: string | null;

  /**
   * Human-friendly Model Router display name shown in the dev portal. Mutable, and
   * not used to reference the router in requests.
   */
  name: string;

  settings: RouterUpdateResponse.Settings;

  /**
   * Immutable slug used to reference this Model Router in generation requests (for
   * example, production-video). Unique within the API project. The UUID id remains
   * the canonical management identifier.
   */
  slug: string;

  /**
   * When the Model Router was last updated.
   */
  updatedAt: string;

  /**
   * Current settings version. Increments when settings change; name and description
   * updates do not create a new version.
   */
  version: number;
}

export namespace RouterUpdateResponse {
  export interface Settings {
    /**
     * Settings JSON schema version used when this snapshot was written.
     */
    schemaVersion: 1;

    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    maxCreditsPerGeneration?: Settings.MaxCreditsPerGeneration;

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    models?: Settings.Models;

    /**
     * Soft preference among eligible models: cost, latency, or quality.
     */
    optimizeFor?: 'cost' | 'latency' | 'quality';
  }

  export namespace Settings {
    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    export interface MaxCreditsPerGeneration {
      audio?: number;

      image?: number;

      video?: number;
    }

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    export interface Models {
      ids: Array<string>;

      mode: 'allow_new_except' | 'allowlist_only';
    }
  }
}

/**
 * A named Model Router configuration.
 */
export interface RouterListResponse {
  /**
   * The Model Router's primary key ID (UUID). Use it to manage this router via the
   * API; use the slug to reference the router in generation requests.
   */
  id: string;

  /**
   * When the Model Router was created.
   */
  createdAt: string;

  /**
   * An optional Model Router description.
   */
  description: string | null;

  /**
   * Human-friendly Model Router display name shown in the dev portal. Mutable, and
   * not used to reference the router in requests.
   */
  name: string;

  settings: RouterListResponse.Settings;

  /**
   * Immutable slug used to reference this Model Router in generation requests (for
   * example, production-video). Unique within the API project. The UUID id remains
   * the canonical management identifier.
   */
  slug: string;

  /**
   * When the Model Router was last updated.
   */
  updatedAt: string;

  /**
   * Current settings version. Increments when settings change; name and description
   * updates do not create a new version.
   */
  version: number;
}

export namespace RouterListResponse {
  export interface Settings {
    /**
     * Settings JSON schema version used when this snapshot was written.
     */
    schemaVersion: 1;

    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    maxCreditsPerGeneration?: Settings.MaxCreditsPerGeneration;

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    models?: Settings.Models;

    /**
     * Soft preference among eligible models: cost, latency, or quality.
     */
    optimizeFor?: 'cost' | 'latency' | 'quality';
  }

  export namespace Settings {
    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    export interface MaxCreditsPerGeneration {
      audio?: number;

      image?: number;

      video?: number;
    }

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    export interface Models {
      ids: Array<string>;

      mode: 'allow_new_except' | 'allowlist_only';
    }
  }
}

export interface RouterCreateParams {
  /**
   * Immutable slug used to reference this Model Router in generation requests (for
   * example, production-video). Unique within the API project. The UUID id remains
   * the canonical management identifier.
   */
  slug: string;

  /**
   * An optional Model Router description.
   */
  description?: string;

  /**
   * Optional human-readable display name for this router. Defaults to the slug when
   * omitted.
   */
  name?: string;

  /**
   * Model Router routing preferences. Defaults to cost-optimized allow-all when
   * omitted. Modality is implied by the generate endpoint used with this Model
   * Router.
   */
  settings?: RouterCreateParams.Settings;
}

export namespace RouterCreateParams {
  /**
   * Model Router routing preferences. Defaults to cost-optimized allow-all when
   * omitted. Modality is implied by the generate endpoint used with this Model
   * Router.
   */
  export interface Settings {
    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    maxCreditsPerGeneration?: Settings.MaxCreditsPerGeneration;

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    models?: Settings.Models;

    /**
     * Soft preference among eligible models: cost, latency, or quality.
     */
    optimizeFor?: 'cost' | 'latency' | 'quality';

    /**
     * Settings JSON schema version. Omit on write to use the current version;
     * responses and stored snapshots always include it.
     */
    schemaVersion?: 1;
  }

  export namespace Settings {
    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    export interface MaxCreditsPerGeneration {
      audio?: number;

      image?: number;

      video?: number;
    }

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    export interface Models {
      ids: Array<string>;

      mode: 'allow_new_except' | 'allowlist_only';
    }
  }
}

export interface RouterUpdateParams {
  description?: string | null;

  /**
   * Display name. The slug is immutable and cannot be changed after creation.
   */
  name?: string;

  /**
   * Nested merge: omitted settings fields keep their current values. When models is
   * present, omitted models.mode or models.ids are preserved (sending only
   * optimizeFor does not clear the model allowlist or credit ceiling).
   */
  settings?: RouterUpdateParams.Settings;
}

export namespace RouterUpdateParams {
  /**
   * Nested merge: omitted settings fields keep their current values. When models is
   * present, omitted models.mode or models.ids are preserved (sending only
   * optimizeFor does not clear the model allowlist or credit ceiling).
   */
  export interface Settings {
    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    maxCreditsPerGeneration?: Settings.MaxCreditsPerGeneration;

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    models?: Settings.Models;

    /**
     * Soft preference among eligible models: cost, latency, or quality.
     */
    optimizeFor?: 'cost' | 'latency' | 'quality';

    /**
     * Settings JSON schema version. Omit on write to use the current version;
     * responses and stored snapshots always include it.
     */
    schemaVersion?: 1;
  }

  export namespace Settings {
    /**
     * Optional per-modality hard caps on credits for one generation. Models whose
     * estimated cost for that modality exceeds the cap are excluded.
     */
    export interface MaxCreditsPerGeneration {
      audio?: number;

      image?: number;

      video?: number;
    }

    /**
     * When mode is allow_new_except, ids are excluded; when allowlist_only, ids are
     * the only allowed values. Each id must be a known public video model name
     * (unknown ids are rejected on create/update).
     */
    export interface Models {
      ids: Array<string>;

      mode: 'allow_new_except' | 'allowlist_only';
    }
  }
}

export interface RouterListParams extends CursorPageParams {}

export declare namespace Routers {
  export {
    type RouterCreateResponse as RouterCreateResponse,
    type RouterRetrieveResponse as RouterRetrieveResponse,
    type RouterUpdateResponse as RouterUpdateResponse,
    type RouterListResponse as RouterListResponse,
    type RouterListResponsesCursorPage as RouterListResponsesCursorPage,
    type RouterCreateParams as RouterCreateParams,
    type RouterUpdateParams as RouterUpdateParams,
    type RouterListParams as RouterListParams,
  };
}
