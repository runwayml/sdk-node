// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AuditLogs extends APIResource {
  /**
   * Get a single audit log entry, including its metadata and forensic details, for a
   * linked Runway workspace you administer. Authorized via the account link between
   * this API project and the workspace.
   */
  retrieve(
    eventID: string,
    query: AuditLogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuditLogRetrieveResponse> {
    return this._client.get(path`/v1/organization/webapp/audit_logs/${eventID}`, { query, ...options });
  }

  /**
   * List audit log entries for the linked Runway workspaces you administer, newest
   * first. Authorized via the account link between this API project and the
   * workspace.
   */
  list(
    query: AuditLogListParams,
    options?: RequestOptions,
  ): PagePromise<AuditLogListResponsesCursorPage, AuditLogListResponse> {
    return this._client.getAPIList('/v1/organization/webapp/audit_logs', CursorPage<AuditLogListResponse>, {
      query,
      ...options,
    });
  }
}

export type AuditLogListResponsesCursorPage = CursorPage<AuditLogListResponse>;

export interface AuditLogRetrieveResponse {
  /**
   * The action performed.
   */
  action:
    | 'UserLogin'
    | 'PasswordChanged'
    | 'EmailChangeRequested'
    | 'EmailChanged'
    | 'UserRegistered'
    | 'UserAccountDeleted'
    | 'WorkspaceCreated'
    | 'WorkspaceDeleted'
    | 'MemberInvited'
    | 'MemberRemoved'
    | 'MemberRoleChanged'
    | 'InviteAccepted'
    | 'TeamSettingsUpdated'
    | 'InviteLinkToggled'
    | 'UserGroupCreated'
    | 'UserGroupDeleted'
    | 'UserGroupMemberAdded'
    | 'UserGroupMemberRemoved'
    | 'SSOLogin'
    | 'SSOUserProvisioned'
    | 'SSOConfigCreated'
    | 'SSOUserAutoAddedToTeam'
    | 'SSODomainRegistrationCloned'
    | 'AssetCreated'
    | 'AssetUpdated'
    | 'AssetDeleted'
    | 'AssetDownloaded'
    | 'AssetShared'
    | 'AssetUnshared'
    | 'PermissionGranted'
    | 'PermissionUpdated'
    | 'PermissionRevoked'
    | 'PermissionAccepted'
    | 'SubscriptionCancelled'
    | 'SubscriptionPlanSwitched'
    | 'CreditsTransferred'
    | 'SeatsTransferred'
    | 'SessionShared'
    | 'SessionUnshared'
    | 'VideoProjectShared'
    | 'VideoProjectUnshared'
    | 'BrandKitShared'
    | 'BrandKitUnshared'
    | 'AgentCustomSkillCreated'
    | 'AgentCustomSkillDeleted'
    | 'AgentCustomSkillShared'
    | 'AgentCustomSkillUnshared'
    | 'AgentSessionShared'
    | 'AgentSessionUnshared'
    | 'AgentConnectorLinkTokenCreated'
    | 'AgentConnectorConnected'
    | 'AgentConnectorDisconnected'
    | 'AgentConnectorAssetExported'
    | 'AgentConnectorSessionEnabled'
    | 'AgentConnectorSessionDisabled'
    | 'GenerationCreated'
    | 'AccountLinkCreated'
    | 'AccountLinkDeleted'
    | 'OrganizationSettingsUpdated'
    | 'OrganizationDisabledModelsUpdated'
    | 'WorkspaceCountryLockUpdated'
    | 'WorkspaceTagCreated'
    | 'WorkspaceTagUpdated'
    | 'WorkspaceTagDeleted'
    | 'WorkspaceTagAssigned'
    | 'WorkspaceTagUnassigned'
    | 'MeteredBillingConfigUpdated'
    | 'MeteredBillingRefillTriggered'
    | 'MeteredBillingRetryTriggered'
    | 'EnterpriseSpendCapEnforcementUpdated';

  /**
   * Whether the acting user has since been deleted.
   */
  actorDeleted: boolean;

  /**
   * Email of the user who performed the action.
   */
  actorEmail: string | null;

  /**
   * Username of the user who performed the action.
   */
  actorUsername: string | null;

  /**
   * IP address of the client that performed the action.
   */
  clientIpAddress: string;

  /**
   * Unique identifier of the entry.
   */
  eventId: string;

  /**
   * Action-specific details.
   */
  metadata: AuditLogRetrieveResponse.Metadata;

  /**
   * Request ID for correlation with other logs.
   */
  requestId: string | null;

  /**
   * ID of the affected resource, if any.
   */
  resourceId: string | null;

  /**
   * Type of the affected resource, if any. Currently one of `account_link`,
   * `agent_custom_skill`, `asset`, `brand_kit`, `generation`, `invite_link`,
   * `membership`, `organization`, `permission`, `promotion`, `session`,
   * `shared_asset`, `sso_config`, `sso_domain_registration`, `subscription`,
   * `team_settings`, `user`, `user_group`, `video_project`, `workspace`, or
   * `workspace_tag`. New types may be added over time, so treat this as an open set.
   */
  resourceType: string | null;

  /**
   * When the action occurred.
   */
  timestamp: string;

  /**
   * User-Agent header of the client request.
   */
  userAgent: string | null;

  /**
   * ID of the owning workspace.
   */
  workspaceId: number;

  /**
   * Name of the owning workspace.
   */
  workspaceName: string;
}

export namespace AuditLogRetrieveResponse {
  /**
   * Action-specific details.
   */
  export interface Metadata {
    Amount?: unknown;

    Application?: unknown;

    'Asset name'?: unknown;

    'Default task name template'?: unknown;

    'Group name'?: unknown;

    'Hard spend cap'?: unknown;

    'Invited member'?: unknown;

    'Login method'?: unknown;

    'Member email'?: unknown;

    Model?: unknown;

    'New role'?: unknown;

    'New User'?: unknown;

    Operation?: unknown;

    Plan?: unknown;

    Platform?: unknown;

    'Previous role'?: unknown;

    'Removed member'?: unknown;

    Role?: unknown;

    'Shared with projects'?: unknown;

    'Shared with workspace'?: unknown;

    'Spend cap'?: unknown;

    'Tag color'?: unknown;

    'Tag name'?: unknown;

    'Target member'?: unknown;

    Workspace?: unknown;

    'Workspace description'?: unknown;

    'Workspace ID'?: unknown;

    'Workspace name'?: unknown;

    'Workspace picture'?: unknown;
  }
}

export interface AuditLogListResponse {
  /**
   * The action performed.
   */
  action:
    | 'UserLogin'
    | 'PasswordChanged'
    | 'EmailChangeRequested'
    | 'EmailChanged'
    | 'UserRegistered'
    | 'UserAccountDeleted'
    | 'WorkspaceCreated'
    | 'WorkspaceDeleted'
    | 'MemberInvited'
    | 'MemberRemoved'
    | 'MemberRoleChanged'
    | 'InviteAccepted'
    | 'TeamSettingsUpdated'
    | 'InviteLinkToggled'
    | 'UserGroupCreated'
    | 'UserGroupDeleted'
    | 'UserGroupMemberAdded'
    | 'UserGroupMemberRemoved'
    | 'SSOLogin'
    | 'SSOUserProvisioned'
    | 'SSOConfigCreated'
    | 'SSOUserAutoAddedToTeam'
    | 'SSODomainRegistrationCloned'
    | 'AssetCreated'
    | 'AssetUpdated'
    | 'AssetDeleted'
    | 'AssetDownloaded'
    | 'AssetShared'
    | 'AssetUnshared'
    | 'PermissionGranted'
    | 'PermissionUpdated'
    | 'PermissionRevoked'
    | 'PermissionAccepted'
    | 'SubscriptionCancelled'
    | 'SubscriptionPlanSwitched'
    | 'CreditsTransferred'
    | 'SeatsTransferred'
    | 'SessionShared'
    | 'SessionUnshared'
    | 'VideoProjectShared'
    | 'VideoProjectUnshared'
    | 'BrandKitShared'
    | 'BrandKitUnshared'
    | 'AgentCustomSkillCreated'
    | 'AgentCustomSkillDeleted'
    | 'AgentCustomSkillShared'
    | 'AgentCustomSkillUnshared'
    | 'AgentSessionShared'
    | 'AgentSessionUnshared'
    | 'AgentConnectorLinkTokenCreated'
    | 'AgentConnectorConnected'
    | 'AgentConnectorDisconnected'
    | 'AgentConnectorAssetExported'
    | 'AgentConnectorSessionEnabled'
    | 'AgentConnectorSessionDisabled'
    | 'GenerationCreated'
    | 'AccountLinkCreated'
    | 'AccountLinkDeleted'
    | 'OrganizationSettingsUpdated'
    | 'OrganizationDisabledModelsUpdated'
    | 'WorkspaceCountryLockUpdated'
    | 'WorkspaceTagCreated'
    | 'WorkspaceTagUpdated'
    | 'WorkspaceTagDeleted'
    | 'WorkspaceTagAssigned'
    | 'WorkspaceTagUnassigned'
    | 'MeteredBillingConfigUpdated'
    | 'MeteredBillingRefillTriggered'
    | 'MeteredBillingRetryTriggered'
    | 'EnterpriseSpendCapEnforcementUpdated';

  /**
   * Whether the acting user has since been deleted.
   */
  actorDeleted: boolean;

  /**
   * Email of the user who performed the action.
   */
  actorEmail: string | null;

  /**
   * Username of the user who performed the action.
   */
  actorUsername: string | null;

  /**
   * Unique identifier of the entry.
   */
  eventId: string;

  /**
   * When the action occurred.
   */
  timestamp: string;

  /**
   * ID of the owning workspace.
   */
  workspaceId: number;

  /**
   * Name of the owning workspace.
   */
  workspaceName: string;
}

export interface AuditLogRetrieveParams {
  /**
   * Organization to report on. Optional when this API project is linked to a single
   * organization; required when it is linked to more than one.
   */
  organizationId?: string;
}

export interface AuditLogListParams extends CursorPageParams {
  /**
   * Restrict results to these audit log actions, as a comma-separated list of up to
   * 50 actions. Allowed values: `UserLogin`, `PasswordChanged`,
   * `EmailChangeRequested`, `EmailChanged`, `UserRegistered`, `UserAccountDeleted`,
   * `WorkspaceCreated`, `WorkspaceDeleted`, `MemberInvited`, `MemberRemoved`,
   * `MemberRoleChanged`, `InviteAccepted`, `TeamSettingsUpdated`,
   * `InviteLinkToggled`, `UserGroupCreated`, `UserGroupDeleted`,
   * `UserGroupMemberAdded`, `UserGroupMemberRemoved`, `SSOLogin`,
   * `SSOUserProvisioned`, `SSOConfigCreated`, `SSOUserAutoAddedToTeam`,
   * `SSODomainRegistrationCloned`, `AssetCreated`, `AssetUpdated`, `AssetDeleted`,
   * `AssetDownloaded`, `AssetShared`, `AssetUnshared`, `PermissionGranted`,
   * `PermissionUpdated`, `PermissionRevoked`, `PermissionAccepted`,
   * `SubscriptionCancelled`, `SubscriptionPlanSwitched`, `CreditsTransferred`,
   * `SeatsTransferred`, `SessionShared`, `SessionUnshared`, `VideoProjectShared`,
   * `VideoProjectUnshared`, `BrandKitShared`, `BrandKitUnshared`,
   * `AgentCustomSkillCreated`, `AgentCustomSkillDeleted`, `AgentCustomSkillShared`,
   * `AgentCustomSkillUnshared`, `AgentSessionShared`, `AgentSessionUnshared`,
   * `AgentConnectorLinkTokenCreated`, `AgentConnectorConnected`,
   * `AgentConnectorDisconnected`, `AgentConnectorAssetExported`,
   * `AgentConnectorSessionEnabled`, `AgentConnectorSessionDisabled`,
   * `GenerationCreated`, `AccountLinkCreated`, `AccountLinkDeleted`,
   * `OrganizationSettingsUpdated`, `OrganizationDisabledModelsUpdated`,
   * `WorkspaceCountryLockUpdated`, `WorkspaceTagCreated`, `WorkspaceTagUpdated`,
   * `WorkspaceTagDeleted`, `WorkspaceTagAssigned`, `WorkspaceTagUnassigned`,
   * `MeteredBillingConfigUpdated`, `MeteredBillingRefillTriggered`,
   * `MeteredBillingRetryTriggered`, `EnterpriseSpendCapEnforcementUpdated`.
   */
  actions?: string;

  /**
   * Restrict results to entries performed by the users with these emails, as a
   * comma-separated list of up to 50 emails.
   */
  actorEmails?: string;

  /**
   * Start of the time window (inclusive), ISO-8601 datetime.
   */
  from?: string;

  /**
   * Organization to report on. Optional when this API project is linked to a single
   * organization; required when it is linked to more than one.
   */
  organizationId?: string;

  /**
   * End of the time window (exclusive), ISO-8601 datetime.
   */
  to?: string;

  /**
   * Restrict results to these workspace IDs, as a comma-separated list of up to 50
   * IDs. Defaults to every workspace you administer in the organization.
   */
  workspaceIds?: string;
}

export declare namespace AuditLogs {
  export {
    type AuditLogRetrieveResponse as AuditLogRetrieveResponse,
    type AuditLogListResponse as AuditLogListResponse,
    type AuditLogListResponsesCursorPage as AuditLogListResponsesCursorPage,
    type AuditLogRetrieveParams as AuditLogRetrieveParams,
    type AuditLogListParams as AuditLogListParams,
  };
}
