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
    | 'MemberInviteReminderSent'
    | 'MemberRemoved'
    | 'MemberRoleChanged'
    | 'InviteAccepted'
    | 'MemberJoinedViaDomain'
    | 'TeamSettingsUpdated'
    | 'InviteLinkToggled'
    | 'UserGroupCreated'
    | 'UserGroupUpdated'
    | 'UserGroupDeleted'
    | 'UserGroupArchived'
    | 'UserGroupRestored'
    | 'UserGroupMemberAdded'
    | 'UserGroupMemberRemoved'
    | 'UserGroupCreditCapUpdated'
    | 'UserGroupVisibilityUpdated'
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
    | 'CommentCreated'
    | 'CommentEdited'
    | 'CommentDeleted'
    | 'CommentAgentCallRun'
    | 'CommentRemovedByModerator'
    | 'CommentRestoredByModerator'
    | 'CommentRemovalReasonChanged'
    | 'PermissionGranted'
    | 'PermissionUpdated'
    | 'PermissionRevoked'
    | 'PermissionAccepted'
    | 'SubscriptionCancelled'
    | 'SubscriptionReactivatedWithOffer'
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
    | 'StudioSessionOpened'
    | 'AppStudioAiRunOpened'
    | 'AccountLinkCreated'
    | 'AccountLinkDeleted'
    | 'AdConnectionAuthorizationStarted'
    | 'AdConnectionConnected'
    | 'AdAccountSelectionUpdated'
    | 'AdAccountSyncRequested'
    | 'AdConnectionDisconnected'
    | 'AdWorkspaceOnboardingUpdated'
    | 'AdCreativeReviewSubmitted'
    | 'AdCreativeReviewCancelled'
    | 'AdCreativeReviewDecided'
    | 'AdCreativeApprovalRevoked'
    | 'AdCreativeArchived'
    | 'AdCreativeUnarchived'
    | 'AdPublishBatchQueued'
    | 'AdPublishBatchCancelled'
    | 'AdPublishBatchRetried'
    | 'OrganizationSettingsUpdated'
    | 'OrganizationDisabledModelsUpdated'
    | 'OrganizationAgentSandboxUpdated'
    | 'OrganizationApiAccountReleased'
    | 'OrganizationApiAccountMemberInvited'
    | 'OrganizationApiAccountMemberRoleChanged'
    | 'OrganizationApiAccountMemberRemoved'
    | 'WorkspaceCountryLockUpdated'
    | 'WorkspaceTagCreated'
    | 'WorkspaceTagUpdated'
    | 'WorkspaceTagDeleted'
    | 'WorkspaceTagAssigned'
    | 'WorkspaceTagUnassigned'
    | 'MeteredBillingConfigUpdated'
    | 'MeteredBillingRefillTriggered'
    | 'MeteredBillingRetryTriggered'
    | 'EnterpriseSpendCapEnforcementUpdated'
    | 'OnboardingBonusGranted'
    | 'AwsMarketplaceEnterpriseSubscriptionLinked';

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
    'Ad account ID'?: string;

    'Ad creative ID'?: string;

    'Ad publish batch ID'?: string;

    'Ad review batch ID'?: string;

    'Ad review request ID'?: string;

    'Ad sync end date'?: string;

    'Ad sync run ID'?: string;

    'Ad sync start date'?: string;

    'Ads onboarding answers'?: Array<string>;

    'Ads onboarding completed'?: boolean;

    'Agent session ID'?: string;

    'Agent tagged'?: boolean;

    Amount?: number;

    'Amount received'?: number;

    'API account'?: string;

    'API project ID'?: string;

    'App Studio app'?: string;

    'App Studio session'?: string;

    Application?: string;

    'Asset name'?: string;

    'AWS license'?: string;

    'Brand kit ID'?: string;

    'Comment ID'?: string;

    'Comment target ID'?: string;

    'Comment target type'?: string;

    'Comment text'?: string;

    'Creatives cancelled'?: number;

    'Creatives queued'?: number;

    'Creatives retried'?: number;

    'Default project discoverability'?: string;

    'Default task name template'?: string | null;

    'Destination category ID'?: string;

    Direction?: string;

    'Email domain'?: string;

    'Error code'?: string;

    'Group name'?: string;

    'Hard spend cap'?: boolean;

    'Into a new test ad set'?: boolean;

    'Invited member'?: string;

    'Language model or provider'?: string;

    'Login method'?: string;

    'Media included'?: boolean;

    'Member email'?: string;

    Mentions?: number;

    Model?: string;

    'New role'?: string;

    'New text'?: string;

    'New User'?: boolean;

    'New value'?: string | number | boolean | { [key: string]: boolean } | null;

    Operation?: string;

    Organization?: string;

    Outcome?: string;

    Plan?: string;

    Platform?: string;

    'Platform ad account ID'?: string;

    'Previous project credit cap'?: number | null;

    'Previous role'?: string | null;

    'Previous text'?: string;

    'Previous value'?: string | number | boolean | { [key: string]: boolean } | null;

    'Project credit cap'?: number | null;

    Provider?: string;

    Reason?: string | null;

    'Removed member'?: string;

    'Review decision'?: string;

    Role?: string;

    'Root asset ID'?: string;

    Selected?: boolean;

    Setting?: string;

    'Shared with projects'?: Array<string>;

    'Shared with workspace'?: boolean;

    'Source category ID'?: string;

    'Spend cap'?: number;

    'Spend cap change'?: number;

    'Submitted via'?: string;

    'Tag color'?: string;

    'Tag name'?: string;

    'Target member'?: string | null;

    'Via public API'?: boolean;

    Workspace?: string | null;

    'Workspace description'?: string | null;

    'Workspace ID'?: number;

    'Workspace name'?: string | null;

    'Workspace picture'?: string | null;
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
    | 'MemberInviteReminderSent'
    | 'MemberRemoved'
    | 'MemberRoleChanged'
    | 'InviteAccepted'
    | 'MemberJoinedViaDomain'
    | 'TeamSettingsUpdated'
    | 'InviteLinkToggled'
    | 'UserGroupCreated'
    | 'UserGroupUpdated'
    | 'UserGroupDeleted'
    | 'UserGroupArchived'
    | 'UserGroupRestored'
    | 'UserGroupMemberAdded'
    | 'UserGroupMemberRemoved'
    | 'UserGroupCreditCapUpdated'
    | 'UserGroupVisibilityUpdated'
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
    | 'CommentCreated'
    | 'CommentEdited'
    | 'CommentDeleted'
    | 'CommentAgentCallRun'
    | 'CommentRemovedByModerator'
    | 'CommentRestoredByModerator'
    | 'CommentRemovalReasonChanged'
    | 'PermissionGranted'
    | 'PermissionUpdated'
    | 'PermissionRevoked'
    | 'PermissionAccepted'
    | 'SubscriptionCancelled'
    | 'SubscriptionReactivatedWithOffer'
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
    | 'StudioSessionOpened'
    | 'AppStudioAiRunOpened'
    | 'AccountLinkCreated'
    | 'AccountLinkDeleted'
    | 'AdConnectionAuthorizationStarted'
    | 'AdConnectionConnected'
    | 'AdAccountSelectionUpdated'
    | 'AdAccountSyncRequested'
    | 'AdConnectionDisconnected'
    | 'AdWorkspaceOnboardingUpdated'
    | 'AdCreativeReviewSubmitted'
    | 'AdCreativeReviewCancelled'
    | 'AdCreativeReviewDecided'
    | 'AdCreativeApprovalRevoked'
    | 'AdCreativeArchived'
    | 'AdCreativeUnarchived'
    | 'AdPublishBatchQueued'
    | 'AdPublishBatchCancelled'
    | 'AdPublishBatchRetried'
    | 'OrganizationSettingsUpdated'
    | 'OrganizationDisabledModelsUpdated'
    | 'OrganizationAgentSandboxUpdated'
    | 'OrganizationApiAccountReleased'
    | 'OrganizationApiAccountMemberInvited'
    | 'OrganizationApiAccountMemberRoleChanged'
    | 'OrganizationApiAccountMemberRemoved'
    | 'WorkspaceCountryLockUpdated'
    | 'WorkspaceTagCreated'
    | 'WorkspaceTagUpdated'
    | 'WorkspaceTagDeleted'
    | 'WorkspaceTagAssigned'
    | 'WorkspaceTagUnassigned'
    | 'MeteredBillingConfigUpdated'
    | 'MeteredBillingRefillTriggered'
    | 'MeteredBillingRetryTriggered'
    | 'EnterpriseSpendCapEnforcementUpdated'
    | 'OnboardingBonusGranted'
    | 'AwsMarketplaceEnterpriseSubscriptionLinked';

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
   * `WorkspaceCreated`, `WorkspaceDeleted`, `MemberInvited`,
   * `MemberInviteReminderSent`, `MemberRemoved`, `MemberRoleChanged`,
   * `InviteAccepted`, `MemberJoinedViaDomain`, `TeamSettingsUpdated`,
   * `InviteLinkToggled`, `UserGroupCreated`, `UserGroupUpdated`, `UserGroupDeleted`,
   * `UserGroupArchived`, `UserGroupRestored`, `UserGroupMemberAdded`,
   * `UserGroupMemberRemoved`, `UserGroupCreditCapUpdated`,
   * `UserGroupVisibilityUpdated`, `SSOLogin`, `SSOUserProvisioned`,
   * `SSOConfigCreated`, `SSOUserAutoAddedToTeam`, `SSODomainRegistrationCloned`,
   * `AssetCreated`, `AssetUpdated`, `AssetDeleted`, `AssetDownloaded`,
   * `AssetShared`, `AssetUnshared`, `CommentCreated`, `CommentEdited`,
   * `CommentDeleted`, `CommentAgentCallRun`, `CommentRemovedByModerator`,
   * `CommentRestoredByModerator`, `CommentRemovalReasonChanged`,
   * `PermissionGranted`, `PermissionUpdated`, `PermissionRevoked`,
   * `PermissionAccepted`, `SubscriptionCancelled`,
   * `SubscriptionReactivatedWithOffer`, `SubscriptionPlanSwitched`,
   * `CreditsTransferred`, `SeatsTransferred`, `SessionShared`, `SessionUnshared`,
   * `VideoProjectShared`, `VideoProjectUnshared`, `BrandKitShared`,
   * `BrandKitUnshared`, `AgentCustomSkillCreated`, `AgentCustomSkillDeleted`,
   * `AgentCustomSkillShared`, `AgentCustomSkillUnshared`, `AgentSessionShared`,
   * `AgentSessionUnshared`, `AgentConnectorLinkTokenCreated`,
   * `AgentConnectorConnected`, `AgentConnectorDisconnected`,
   * `AgentConnectorAssetExported`, `AgentConnectorSessionEnabled`,
   * `AgentConnectorSessionDisabled`, `GenerationCreated`, `StudioSessionOpened`,
   * `AppStudioAiRunOpened`, `AccountLinkCreated`, `AccountLinkDeleted`,
   * `AdConnectionAuthorizationStarted`, `AdConnectionConnected`,
   * `AdAccountSelectionUpdated`, `AdAccountSyncRequested`,
   * `AdConnectionDisconnected`, `AdWorkspaceOnboardingUpdated`,
   * `AdCreativeReviewSubmitted`, `AdCreativeReviewCancelled`,
   * `AdCreativeReviewDecided`, `AdCreativeApprovalRevoked`, `AdCreativeArchived`,
   * `AdCreativeUnarchived`, `AdPublishBatchQueued`, `AdPublishBatchCancelled`,
   * `AdPublishBatchRetried`, `OrganizationSettingsUpdated`,
   * `OrganizationDisabledModelsUpdated`, `OrganizationAgentSandboxUpdated`,
   * `OrganizationApiAccountReleased`, `OrganizationApiAccountMemberInvited`,
   * `OrganizationApiAccountMemberRoleChanged`,
   * `OrganizationApiAccountMemberRemoved`, `WorkspaceCountryLockUpdated`,
   * `WorkspaceTagCreated`, `WorkspaceTagUpdated`, `WorkspaceTagDeleted`,
   * `WorkspaceTagAssigned`, `WorkspaceTagUnassigned`, `MeteredBillingConfigUpdated`,
   * `MeteredBillingRefillTriggered`, `MeteredBillingRetryTriggered`,
   * `EnterpriseSpendCapEnforcementUpdated`, `OnboardingBonusGranted`,
   * `AwsMarketplaceEnterpriseSubscriptionLinked`.
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
