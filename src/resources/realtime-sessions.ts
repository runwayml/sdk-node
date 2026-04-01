// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RealtimeSessions extends APIResource {
  /**
   * Create a new realtime session with the specified model configuration.
   */
  create(
    body: RealtimeSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<RealtimeSessionCreateResponse> {
    return this._client.post('/v1/realtime_sessions', { body, ...options });
  }

  /**
   * Get the status of a realtime session.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RealtimeSessionRetrieveResponse> {
    return this._client.get(path`/v1/realtime_sessions/${id}`, options);
  }

  /**
   * Cancel an active realtime session.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/realtime_sessions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RealtimeSessionCreateResponse {
  /**
   * The ID of the created realtime session.
   */
  id: string;
}

/**
 * A session that is being provisioned.
 */
export type RealtimeSessionRetrieveResponse =
  | RealtimeSessionRetrieveResponse.NotReady
  | RealtimeSessionRetrieveResponse.Ready
  | RealtimeSessionRetrieveResponse.Running
  | RealtimeSessionRetrieveResponse.Completed
  | RealtimeSessionRetrieveResponse.Failed
  | RealtimeSessionRetrieveResponse.Cancelled;

export namespace RealtimeSessionRetrieveResponse {
  /**
   * A session that is being provisioned.
   */
  export interface NotReady {
    /**
     * The realtime session ID.
     */
    id: string;

    /**
     * When the session was created.
     */
    createdAt: string;

    status: 'NOT_READY';

    /**
     * When true, the session is waiting in a queue for available capacity. When false
     * or absent, the session is actively being provisioned.
     */
    queued?: boolean;
  }

  /**
   * A session that is ready to connect.
   */
  export interface Ready {
    /**
     * The realtime session ID.
     */
    id: string;

    /**
     * When the session was created.
     */
    createdAt: string;

    /**
     * When the session credentials expire.
     */
    expiresAt: string;

    /**
     * Session key for authenticating the /consume endpoint. Use as Bearer token.
     */
    sessionKey: string;

    status: 'READY';
  }

  /**
   * A session with an active WebRTC connection.
   */
  export interface Running {
    /**
     * The realtime session ID.
     */
    id: string;

    /**
     * When the session was created.
     */
    createdAt: string;

    status: 'RUNNING';
  }

  /**
   * A session that ended normally.
   */
  export interface Completed {
    /**
     * The realtime session ID.
     */
    id: string;

    /**
     * When the session was created.
     */
    createdAt: string;

    /**
     * The session duration in seconds.
     */
    duration: number;

    status: 'COMPLETED';
  }

  /**
   * A session that encountered an error.
   */
  export interface Failed {
    /**
     * The realtime session ID.
     */
    id: string;

    /**
     * When the session was created.
     */
    createdAt: string;

    /**
     * A human-readable error message. This value is not stable and should not be
     * matched against programmatically.
     */
    failure: string;

    /**
     * A stable, machine-readable error code. See
     * https://docs.dev.runwayml.com/errors/task-failures/ for more information.
     */
    failureCode: string;

    status: 'FAILED';
  }

  /**
   * A session that was explicitly cancelled.
   */
  export interface Cancelled {
    /**
     * The realtime session ID.
     */
    id: string;

    /**
     * When the session was created.
     */
    createdAt: string;

    status: 'CANCELLED';
  }
}

export interface RealtimeSessionCreateParams {
  /**
   * The avatar configuration for the session.
   */
  avatar: RealtimeSessionCreateParams.RunwayPreset | RealtimeSessionCreateParams.Custom;

  /**
   * The realtime session model type.
   */
  model: 'gwm1_avatars';

  /**
   * Maximum session duration in seconds.
   */
  maxDuration?: number;

  /**
   * Override the avatar personality for this session. If not provided, uses the
   * avatar default.
   */
  personality?: string;

  /**
   * Override the avatar start script for this session. If not provided, uses the
   * avatar default.
   */
  startScript?: string;

  /**
   * Tools available to the avatar during the session.
   */
  tools?: Array<RealtimeSessionCreateParams.ClientEvent | RealtimeSessionCreateParams.BackendRpc>;
}

export namespace RealtimeSessionCreateParams {
  /**
   * A preset avatar from Runway.
   */
  export interface RunwayPreset {
    /**
     * ID of a preset avatar.
     */
    presetId:
      | 'game-character'
      | 'music-superstar'
      | 'game-character-man'
      | 'cat-character'
      | 'influencer'
      | 'tennis-coach'
      | 'human-resource'
      | 'fashion-designer'
      | 'cooking-teacher';

    type: 'runway-preset';
  }

  /**
   * A user-created avatar.
   */
  export interface Custom {
    /**
     * ID of a user-created avatar.
     */
    avatarId: string;

    type: 'custom';
  }

  /**
   * A fire-and-forget tool that sends arguments to the frontend client of the
   * realtime session.
   */
  export interface ClientEvent {
    /**
     * A description of when and how the tool should be used. Be specific so the avatar
     * understands the right context to invoke it.
     */
    description: string;

    /**
     * The tool name. Must start with a letter or underscore, followed by alphanumeric
     * characters or underscores.
     */
    name: string;

    type: 'client_event';

    parameters?: Array<
      | ClientEvent.String
      | ClientEvent.Integer
      | ClientEvent.Number
      | ClientEvent.Boolean
      | ClientEvent.Array_
      | ClientEvent.Object
    >;
  }

  export namespace ClientEvent {
    export interface String {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      type: 'string';

      /**
       * Allowed values for the parameter.
       */
      enum?: Array<string>;

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export interface Integer {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      type: 'integer';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export interface Number {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      type: 'number';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export interface Boolean {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      type: 'boolean';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export interface Array_ {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * Item schema for array elements.
       */
      items: Array_.Items;

      /**
       * The parameter name.
       */
      name: string;

      type: 'array';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export namespace Array_ {
      /**
       * Item schema for array elements.
       */
      export interface Items {
        /**
         * The type of each element in the array.
         */
        type: 'string' | 'integer' | 'number' | 'boolean';
      }
    }

    export interface Object {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      /**
       * The properties of the object.
       */
      properties: Array<unknown>;

      type: 'object';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }
  }

  /**
   * A tool that makes a round-trip RPC call to your backend server during the
   * session.
   */
  export interface BackendRpc {
    /**
     * A description of when and how the tool should be used. Be specific so the avatar
     * understands the right context to invoke it.
     */
    description: string;

    /**
     * The tool name. Must start with a letter or underscore, followed by alphanumeric
     * characters or underscores.
     */
    name: string;

    type: 'backend_rpc';

    parameters?: Array<
      | BackendRpc.String
      | BackendRpc.Integer
      | BackendRpc.Number
      | BackendRpc.Boolean
      | BackendRpc.Array_
      | BackendRpc.Object
    >;

    /**
     * Maximum time to wait for the backend to respond.
     */
    timeoutSeconds?: number;
  }

  export namespace BackendRpc {
    export interface String {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      type: 'string';

      /**
       * Allowed values for the parameter.
       */
      enum?: Array<string>;

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export interface Integer {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      type: 'integer';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export interface Number {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      type: 'number';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export interface Boolean {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      type: 'boolean';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export interface Array_ {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * Item schema for array elements.
       */
      items: Array_.Items;

      /**
       * The parameter name.
       */
      name: string;

      type: 'array';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }

    export namespace Array_ {
      /**
       * Item schema for array elements.
       */
      export interface Items {
        /**
         * The type of each element in the array.
         */
        type: 'string' | 'integer' | 'number' | 'boolean';
      }
    }

    export interface Object {
      /**
       * A description of the parameter.
       */
      description: string;

      /**
       * The parameter name.
       */
      name: string;

      /**
       * The properties of the object.
       */
      properties: Array<unknown>;

      type: 'object';

      /**
       * Whether the parameter is required.
       */
      required?: boolean;
    }
  }
}

export declare namespace RealtimeSessions {
  export {
    type RealtimeSessionCreateResponse as RealtimeSessionCreateResponse,
    type RealtimeSessionRetrieveResponse as RealtimeSessionRetrieveResponse,
    type RealtimeSessionCreateParams as RealtimeSessionCreateParams,
  };
}
