// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * Returns details about a specific published workflow, including its graph schema.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WorkflowRetrieveResponse> {
    return this._client.get(path`/v1/workflows/${id}`, options);
  }

  /**
   * Returns a list of all published workflows for the authenticated user, grouped by
   * source workflow with their published versions.
   */
  list(options?: RequestOptions): APIPromise<WorkflowListResponse> {
    return this._client.get('/v1/workflows', options);
  }

  /**
   * Start a new task to execute a published workflow. You can optionally provide
   * custom input values via `nodeOutputs` to override the defaults defined in the
   * workflow graph.
   */
  run(
    id: string,
    body: WorkflowRunParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkflowRunResponse> {
    return this._client.post(path`/v1/workflows/${id}`, { body, ...options });
  }
}

export interface WorkflowRetrieveResponse {
  /**
   * The globally unique ID of the published workflow.
   */
  id: string;

  /**
   * When this version was published
   */
  createdAt: string;

  /**
   * The description of the published workflow.
   */
  description: string | null;

  /**
   * The workflow graph definition.
   */
  graph: WorkflowRetrieveResponse.Graph;

  /**
   * The name of the published workflow.
   */
  name: string;

  /**
   * When this version was last updated
   */
  updatedAt: string;

  /**
   * A monotonically increasing version number. Each workflow version for the same
   * published workflow has a unique version number.
   */
  version: number;
}

export namespace WorkflowRetrieveResponse {
  /**
   * The workflow graph definition.
   */
  export interface Graph {
    /**
     * The list of edges connecting nodes in the workflow graph.
     */
    edges: Array<unknown>;

    /**
     * The list of nodes in the workflow graph.
     */
    nodes: Array<unknown>;

    /**
     * The schema version of the workflow graph format.
     */
    version: number;
  }
}

export interface WorkflowListResponse {
  /**
   * A list of published workflows grouped by source workflow.
   */
  data: Array<WorkflowListResponse.Data>;
}

export namespace WorkflowListResponse {
  /**
   * A published workflow with all its available versions.
   */
  export interface Data {
    /**
     * The name of the published workflow.
     */
    name: string;

    /**
     * The published versions of this workflow, newest first.
     */
    versions: Array<Data.Version>;
  }

  export namespace Data {
    /**
     * A specific published version of a workflow.
     */
    export interface Version {
      /**
       * The globally unique ID of this published workflow version.
       */
      id: string;

      /**
       * When this version was published
       */
      createdAt: string;

      /**
       * A monotonically increasing version number. Each workflow version for the same
       * published workflow has a unique version number.
       */
      version: number;
    }
  }
}

export interface WorkflowRunResponse {
  /**
   * The ID of the workflow invocation that was created.
   */
  id: string;
}

export interface WorkflowRunParams {
  /**
   * Optional node outputs to override default values. Keys are node IDs from the
   * workflow graph, values are objects mapping output keys to typed values.
   */
  nodeOutputs?: {
    [key: string]: {
      [key: string]:
        | WorkflowRunParams.Primitive
        | WorkflowRunParams.Image
        | WorkflowRunParams.Video
        | WorkflowRunParams.Audio;
    };
  };
}

export namespace WorkflowRunParams {
  /**
   * A primitive value (string, number, or boolean)
   */
  export interface Primitive {
    type: 'primitive';

    value: string | number | boolean;
  }

  /**
   * An image asset
   */
  export interface Image {
    type: 'image';

    /**
     * A HTTPS URL.
     */
    uri: string;
  }

  /**
   * A video asset
   */
  export interface Video {
    type: 'video';

    /**
     * A HTTPS URL.
     */
    uri: string;
  }

  /**
   * An audio asset
   */
  export interface Audio {
    type: 'audio';

    /**
     * A HTTPS URL.
     */
    uri: string;
  }
}

export declare namespace Workflows {
  export {
    type WorkflowRetrieveResponse as WorkflowRetrieveResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowRunResponse as WorkflowRunResponse,
    type WorkflowRunParams as WorkflowRunParams,
  };
}
