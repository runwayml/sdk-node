// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AvatarConversations extends APIResource {
  /**
   * Get detailed information about a specific conversation, including the transcript
   * and recording download URL when available. The conversation ID is the same value
   * returned when the realtime session was created.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AvatarConversationRetrieveResponse> {
    return this._client.get(path`/v1/avatar_conversations/${id}`, options);
  }

  /**
   * List realtime avatar conversations for the authenticated user with cursor-based
   * pagination. Each conversation corresponds to a realtime session, and the
   * conversation ID matches the realtime session ID. Pass `avatar` to restrict
   * results to a single avatar.
   */
  list(
    query: AvatarConversationListParams,
    options?: RequestOptions,
  ): PagePromise<AvatarConversationListResponsesCursorPage, AvatarConversationListResponse> {
    return this._client.getAPIList('/v1/avatar_conversations', CursorPage<AvatarConversationListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a conversation and its associated data.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/avatar_conversations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type AvatarConversationListResponsesCursorPage = CursorPage<AvatarConversationListResponse>;

/**
 * A conversation that is currently active.
 */
export type AvatarConversationRetrieveResponse =
  | AvatarConversationRetrieveResponse.InProgress
  | AvatarConversationRetrieveResponse.Ended
  | AvatarConversationRetrieveResponse.Failed;

export namespace AvatarConversationRetrieveResponse {
  /**
   * A conversation that is currently active.
   */
  export interface InProgress {
    /**
     * Unique conversation identifier. This is the same value as the realtime session
     * ID for the call.
     */
    id: string;

    /**
     * The avatar used in this conversation.
     */
    avatar: InProgress.RunwayPreset | InProgress.Custom | null;

    /**
     * When the conversation was created.
     */
    createdAt: string;

    /**
     * Elapsed duration in seconds, or null if not yet started.
     */
    duration: number | null;

    /**
     * Maximum allowed duration in seconds, or null if not set.
     */
    maxDuration: number | null;

    /**
     * Conversation name.
     */
    name: string;

    /**
     * A URL to download the conversation recording, or null if no recording is
     * available. This URL will expire within 24-48 hours, fetch the conversation again
     * to get a fresh download URL.
     */
    recordingUrl: string | null;

    /**
     * When the conversation started, or null if not yet started.
     */
    startedAt: string | null;

    status: 'in_progress';

    /**
     * The tools that were configured for this conversation session. Empty if no tools
     * were used.
     */
    tools: Array<InProgress.Tool>;

    /**
     * The conversation transcript.
     */
    transcript: Array<InProgress.Transcript>;
  }

  export namespace InProgress {
    /**
     * A preset avatar.
     */
    export interface RunwayPreset {
      /**
       * The preset avatar ID.
       */
      presetId: string;

      type: 'runway-preset';
    }

    /**
     * A custom avatar created by the user.
     */
    export interface Custom {
      /**
       * The custom avatar ID, or null if deleted.
       */
      id: string | null;

      /**
       * URL to the avatar image, or null if unavailable.
       */
      imageUrl: string | null;

      /**
       * The avatar name, or null if unavailable.
       */
      name: string | null;

      type: 'custom';
    }

    /**
     * Summary of a tool configured for the session.
     */
    export interface Tool {
      /**
       * A description of when and how the tool should be used.
       */
      description: string;

      /**
       * The tool name.
       */
      name: string;

      /**
       * The tool type.
       */
      type: 'client_event' | 'backend_rpc';
    }

    /**
     * A single entry in the conversation transcript.
     */
    export interface Transcript {
      /**
       * The spoken text, or null for tool-only turns.
       */
      content: string | null;

      /**
       * Who produced this transcript entry.
       */
      role: 'user' | 'assistant';

      /**
       * When this entry occurred, or null if unavailable.
       */
      timestamp: string | null;

      /**
       * Tool invocations made during this assistant turn. Only present on assistant
       * entries.
       */
      toolCalls?: Array<Transcript.ToolCall>;

      /**
       * Tool results received during this assistant turn. Only present on assistant
       * entries.
       */
      toolResults?: Array<Transcript.ToolResult>;
    }

    export namespace Transcript {
      /**
       * A tool invocation by the assistant.
       */
      export interface ToolCall {
        /**
         * The arguments passed to the tool.
         */
        arguments: { [key: string]: unknown };

        /**
         * The name of the tool that was called.
         */
        name: string;

        /**
         * Optional identifier linking this call to its result.
         */
        id?: string;
      }

      /**
       * The result of a tool invocation.
       */
      export interface ToolResult {
        /**
         * The name of the tool that returned a result.
         */
        name: string;

        /**
         * Optional identifier linking this result to its call.
         */
        id?: string;

        /**
         * How long the tool call took in milliseconds.
         */
        durationMs?: number | null;

        /**
         * Error message if the tool call failed.
         */
        error?: string | null;

        /**
         * The tool result (object, string, or null).
         */
        result?: { [key: string]: unknown } | string | null;
      }
    }
  }

  /**
   * A conversation that completed successfully.
   */
  export interface Ended {
    /**
     * Unique conversation identifier. This is the same value as the realtime session
     * ID for the call.
     */
    id: string;

    /**
     * The avatar used in this conversation.
     */
    avatar: Ended.RunwayPreset | Ended.Custom | null;

    /**
     * When the conversation was created.
     */
    createdAt: string;

    /**
     * Duration of the conversation in seconds.
     */
    duration: number | null;

    /**
     * When the conversation ended.
     */
    endedAt: string | null;

    /**
     * Maximum allowed duration in seconds, or null if not set.
     */
    maxDuration: number | null;

    /**
     * Conversation name.
     */
    name: string;

    /**
     * A URL to download the conversation recording, or null if no recording is
     * available. This URL will expire within 24-48 hours, fetch the conversation again
     * to get a fresh download URL.
     */
    recordingUrl: string | null;

    /**
     * When the conversation started.
     */
    startedAt: string | null;

    status: 'ended';

    /**
     * The tools that were configured for this conversation session. Empty if no tools
     * were used.
     */
    tools: Array<Ended.Tool>;

    /**
     * The conversation transcript.
     */
    transcript: Array<Ended.Transcript>;
  }

  export namespace Ended {
    /**
     * A preset avatar.
     */
    export interface RunwayPreset {
      /**
       * The preset avatar ID.
       */
      presetId: string;

      type: 'runway-preset';
    }

    /**
     * A custom avatar created by the user.
     */
    export interface Custom {
      /**
       * The custom avatar ID, or null if deleted.
       */
      id: string | null;

      /**
       * URL to the avatar image, or null if unavailable.
       */
      imageUrl: string | null;

      /**
       * The avatar name, or null if unavailable.
       */
      name: string | null;

      type: 'custom';
    }

    /**
     * Summary of a tool configured for the session.
     */
    export interface Tool {
      /**
       * A description of when and how the tool should be used.
       */
      description: string;

      /**
       * The tool name.
       */
      name: string;

      /**
       * The tool type.
       */
      type: 'client_event' | 'backend_rpc';
    }

    /**
     * A single entry in the conversation transcript.
     */
    export interface Transcript {
      /**
       * The spoken text, or null for tool-only turns.
       */
      content: string | null;

      /**
       * Who produced this transcript entry.
       */
      role: 'user' | 'assistant';

      /**
       * When this entry occurred, or null if unavailable.
       */
      timestamp: string | null;

      /**
       * Tool invocations made during this assistant turn. Only present on assistant
       * entries.
       */
      toolCalls?: Array<Transcript.ToolCall>;

      /**
       * Tool results received during this assistant turn. Only present on assistant
       * entries.
       */
      toolResults?: Array<Transcript.ToolResult>;
    }

    export namespace Transcript {
      /**
       * A tool invocation by the assistant.
       */
      export interface ToolCall {
        /**
         * The arguments passed to the tool.
         */
        arguments: { [key: string]: unknown };

        /**
         * The name of the tool that was called.
         */
        name: string;

        /**
         * Optional identifier linking this call to its result.
         */
        id?: string;
      }

      /**
       * The result of a tool invocation.
       */
      export interface ToolResult {
        /**
         * The name of the tool that returned a result.
         */
        name: string;

        /**
         * Optional identifier linking this result to its call.
         */
        id?: string;

        /**
         * How long the tool call took in milliseconds.
         */
        durationMs?: number | null;

        /**
         * Error message if the tool call failed.
         */
        error?: string | null;

        /**
         * The tool result (object, string, or null).
         */
        result?: { [key: string]: unknown } | string | null;
      }
    }
  }

  /**
   * A conversation that ended due to an error.
   */
  export interface Failed {
    /**
     * Unique conversation identifier. This is the same value as the realtime session
     * ID for the call.
     */
    id: string;

    /**
     * The avatar used in this conversation.
     */
    avatar: Failed.RunwayPreset | Failed.Custom | null;

    /**
     * When the conversation was created.
     */
    createdAt: string;

    /**
     * Duration in seconds, or null if the conversation failed before starting.
     */
    duration: number | null;

    /**
     * When the conversation ended, or null if it failed before starting.
     */
    endedAt: string | null;

    /**
     * A human-friendly reason for the failure. We do not recommend returning this to
     * users directly without adding context.
     */
    failure: string;

    /**
     * A machine-readable error code for the failure. See
     * https://docs.dev.runwayml.com/errors/task-failures/ for more information.
     */
    failureCode: string;

    /**
     * Maximum allowed duration in seconds, or null if not set.
     */
    maxDuration: number | null;

    /**
     * Conversation name.
     */
    name: string;

    /**
     * A URL to download the conversation recording, or null if no recording is
     * available. This URL will expire within 24-48 hours, fetch the conversation again
     * to get a fresh download URL.
     */
    recordingUrl: string | null;

    /**
     * When the conversation started, or null if it failed before starting.
     */
    startedAt: string | null;

    status: 'failed';

    /**
     * The tools that were configured for this conversation session. Empty if no tools
     * were used.
     */
    tools: Array<Failed.Tool>;

    /**
     * The conversation transcript.
     */
    transcript: Array<Failed.Transcript>;
  }

  export namespace Failed {
    /**
     * A preset avatar.
     */
    export interface RunwayPreset {
      /**
       * The preset avatar ID.
       */
      presetId: string;

      type: 'runway-preset';
    }

    /**
     * A custom avatar created by the user.
     */
    export interface Custom {
      /**
       * The custom avatar ID, or null if deleted.
       */
      id: string | null;

      /**
       * URL to the avatar image, or null if unavailable.
       */
      imageUrl: string | null;

      /**
       * The avatar name, or null if unavailable.
       */
      name: string | null;

      type: 'custom';
    }

    /**
     * Summary of a tool configured for the session.
     */
    export interface Tool {
      /**
       * A description of when and how the tool should be used.
       */
      description: string;

      /**
       * The tool name.
       */
      name: string;

      /**
       * The tool type.
       */
      type: 'client_event' | 'backend_rpc';
    }

    /**
     * A single entry in the conversation transcript.
     */
    export interface Transcript {
      /**
       * The spoken text, or null for tool-only turns.
       */
      content: string | null;

      /**
       * Who produced this transcript entry.
       */
      role: 'user' | 'assistant';

      /**
       * When this entry occurred, or null if unavailable.
       */
      timestamp: string | null;

      /**
       * Tool invocations made during this assistant turn. Only present on assistant
       * entries.
       */
      toolCalls?: Array<Transcript.ToolCall>;

      /**
       * Tool results received during this assistant turn. Only present on assistant
       * entries.
       */
      toolResults?: Array<Transcript.ToolResult>;
    }

    export namespace Transcript {
      /**
       * A tool invocation by the assistant.
       */
      export interface ToolCall {
        /**
         * The arguments passed to the tool.
         */
        arguments: { [key: string]: unknown };

        /**
         * The name of the tool that was called.
         */
        name: string;

        /**
         * Optional identifier linking this call to its result.
         */
        id?: string;
      }

      /**
       * The result of a tool invocation.
       */
      export interface ToolResult {
        /**
         * The name of the tool that returned a result.
         */
        name: string;

        /**
         * Optional identifier linking this result to its call.
         */
        id?: string;

        /**
         * How long the tool call took in milliseconds.
         */
        durationMs?: number | null;

        /**
         * Error message if the tool call failed.
         */
        error?: string | null;

        /**
         * The tool result (object, string, or null).
         */
        result?: { [key: string]: unknown } | string | null;
      }
    }
  }
}

/**
 * Summary of a conversation for list responses.
 */
export interface AvatarConversationListResponse {
  /**
   * Unique conversation identifier. This is the same value as the realtime session
   * ID for the call.
   */
  id: string;

  /**
   * The avatar used in this conversation.
   */
  avatar: AvatarConversationListResponse.RunwayPreset | AvatarConversationListResponse.Custom | null;

  /**
   * When the conversation was created.
   */
  createdAt: string;

  /**
   * Duration of the conversation in seconds, or null if not started.
   */
  duration: number | null;

  /**
   * Whether tools were configured for this conversation session.
   */
  hasTools: boolean;

  /**
   * Conversation name (auto-generated or user-provided).
   */
  name: string;

  /**
   * The status of the conversation. `in_progress` means the session is active,
   * `ended` means it completed successfully, `failed` means it ended due to an
   * error.
   */
  status: 'in_progress' | 'ended' | 'failed';
}

export namespace AvatarConversationListResponse {
  /**
   * A preset avatar.
   */
  export interface RunwayPreset {
    /**
     * The preset avatar's display name (e.g. "Mina").
     */
    name: string;

    /**
     * The preset avatar ID.
     */
    presetId: string;

    type: 'runway-preset';
  }

  /**
   * A custom avatar created by the user.
   */
  export interface Custom {
    /**
     * The custom avatar ID, or null if deleted.
     */
    id: string | null;

    /**
     * The avatar's configured name, or null if unavailable.
     */
    name: string | null;

    type: 'custom';
  }
}

export interface AvatarConversationListParams extends CursorPageParams {
  /**
   * Filter to conversations that used the given custom avatar.
   */
  avatar?: string;

  /**
   * Filter conversations created before this timestamp (exclusive).
   */
  endDate?: string;

  /**
   * Filter conversations created on or after this timestamp (inclusive).
   */
  startDate?: string;
}

export declare namespace AvatarConversations {
  export {
    type AvatarConversationRetrieveResponse as AvatarConversationRetrieveResponse,
    type AvatarConversationListResponse as AvatarConversationListResponse,
    type AvatarConversationListResponsesCursorPage as AvatarConversationListResponsesCursorPage,
    type AvatarConversationListParams as AvatarConversationListParams,
  };
}
