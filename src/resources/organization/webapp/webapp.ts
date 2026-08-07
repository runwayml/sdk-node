// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuditLogsAPI from './audit-logs';
import {
  AuditLogListParams,
  AuditLogListResponse,
  AuditLogListResponsesCursorPage,
  AuditLogRetrieveParams,
  AuditLogRetrieveResponse,
  AuditLogs,
} from './audit-logs';
import { CursorPage, type CursorPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class Webapp extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);

  /**
   * List per-generation credit-usage rows for the linked Runway workspaces you
   * administer, newest first. Unlike `/v1/organization/usage` (this API project's
   * own usage), this reports usage from the workspace linked to this API project.
   * Authorized via that account link.
   */
  listUsage(
    query: WebappListUsageParams,
    options?: RequestOptions,
  ): PagePromise<WebappListUsageResponsesCursorPage, WebappListUsageResponse> {
    return this._client.getAPIList('/v1/organization/webapp/usage', CursorPage<WebappListUsageResponse>, {
      query,
      ...options,
    });
  }
}

export type WebappListUsageResponsesCursorPage = CursorPage<WebappListUsageResponse>;

export interface WebappListUsageResponse {
  /**
   * Credits charged for this generation.
   */
  credits: number;

  /**
   * Email of the user who generated.
   */
  email: string;

  /**
   * When the generation was charged.
   */
  timestamp: string;

  /**
   * Model/task display name for the generation.
   */
  tool: string;

  /**
   * Whether the row is a credit charge for a generation or a task refund (negative
   * credits).
   */
  type: 'charge' | 'refund';

  /**
   * ID of the owning workspace.
   */
  workspaceId: number;

  /**
   * Name of the owning workspace.
   */
  workspaceName: string;
}

export interface WebappListUsageParams extends CursorPageParams {
  /**
   * Start of the time window (inclusive), ISO-8601 datetime.
   */
  from: string;

  /**
   * End of the time window (exclusive), ISO-8601 datetime. A `cursor` can only
   * narrow this window, never extend it past `to`.
   */
  to: string;

  /**
   * Organization to report on. Optional when this API project is linked to a single
   * organization; required when it is linked to more than one.
   */
  organizationId?: string;

  /**
   * Restrict results to these workspace IDs, as a comma-separated list. Defaults to
   * every workspace you administer in the organization.
   */
  workspaceIds?: string;
}

Webapp.AuditLogs = AuditLogs;

export declare namespace Webapp {
  export {
    type WebappListUsageResponse as WebappListUsageResponse,
    type WebappListUsageResponsesCursorPage as WebappListUsageResponsesCursorPage,
    type WebappListUsageParams as WebappListUsageParams,
  };

  export {
    AuditLogs as AuditLogs,
    type AuditLogRetrieveResponse as AuditLogRetrieveResponse,
    type AuditLogListResponse as AuditLogListResponse,
    type AuditLogListResponsesCursorPage as AuditLogListResponsesCursorPage,
    type AuditLogRetrieveParams as AuditLogRetrieveParams,
    type AuditLogListParams as AuditLogListParams,
  };
}
