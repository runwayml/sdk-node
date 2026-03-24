// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';
import { APIPromiseWithAwaitableWorkflowInvocation, wrapAsWaitableWorkflowInvocation } from '../lib/polling';

export class WorkflowInvocations extends APIResource {
  /**
   * Return details about a workflow invocation. Consumers of this API should not
   * expect updates more frequent than once every five seconds for a given workflow
   * invocation.
   */
  retrieve(
    id: string,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableWorkflowInvocation<WorkflowInvocationRetrieveResponse> {
    return wrapAsWaitableWorkflowInvocation<WorkflowInvocationRetrieveResponse>(this._client)(
      this._client.get(path`/v1/workflow_invocations/${id}`, options),
      true,
    );
  }
}

/**
 * A pending workflow invocation
 */
export type WorkflowInvocationRetrieveResponse =
  | WorkflowInvocationRetrieveResponse.Pending
  | WorkflowInvocationRetrieveResponse.Throttled
  | WorkflowInvocationRetrieveResponse.Cancelled
  | WorkflowInvocationRetrieveResponse.Running
  | WorkflowInvocationRetrieveResponse.Failed
  | WorkflowInvocationRetrieveResponse.Succeeded;

export namespace WorkflowInvocationRetrieveResponse {
  /**
   * A pending workflow invocation
   */
  export interface Pending {
    /**
     * The ID of the workflow invocation being returned.
     */
    id: string;

    /**
     * The timestamp that the workflow invocation was submitted at.
     */
    createdAt: string;

    status: 'PENDING';
  }

  /**
   * A throttled workflow invocation
   */
  export interface Throttled {
    /**
     * The ID of the workflow invocation being returned.
     */
    id: string;

    /**
     * The timestamp that the workflow invocation was submitted at.
     */
    createdAt: string;

    status: 'THROTTLED';
  }

  /**
   * A cancelled or deleted workflow invocation
   */
  export interface Cancelled {
    /**
     * The ID of the workflow invocation being returned.
     */
    id: string;

    /**
     * The timestamp that the workflow invocation was submitted at.
     */
    createdAt: string;

    status: 'CANCELLED';
  }

  /**
   * A running workflow invocation
   */
  export interface Running {
    /**
     * The ID of the workflow invocation being returned.
     */
    id: string;

    /**
     * The timestamp that the workflow invocation was submitted at.
     */
    createdAt: string;

    /**
     * A record mapping workflow node IDs to arrays of output URLs for nodes that have
     * already completed. This allows streaming partial results while the workflow is
     * still running.
     */
    output: { [key: string]: Array<string> };

    /**
     * A number between 0 and 1 representing the overall workflow execution progress.
     */
    progress: number;

    status: 'RUNNING';

    /**
     * A record mapping workflow node IDs to their error details. Only present when one
     * or more nodes have errored.
     */
    nodeErrors?: { [key: string]: Running.NodeErrors };
  }

  export namespace Running {
    export interface NodeErrors {
      /**
       * A human-readable description of the node error.
       */
      message: string;

      /**
       * The human-readable name of the node that errored.
       */
      nodeName?: string;
    }
  }

  /**
   * A failed workflow invocation
   */
  export interface Failed {
    /**
     * The ID of the workflow invocation being returned.
     */
    id: string;

    /**
     * The timestamp that the workflow invocation was submitted at.
     */
    createdAt: string;

    /**
     * A human-friendly reason for the failure. We do not recommend returning this to
     * users directly without adding context.
     */
    failure: string;

    status: 'FAILED';

    /**
     * A machine-readable error code for the failure. See
     * https://docs.dev.runwayml.com/errors/task-failures/ for more information.
     */
    failureCode?: string;

    /**
     * A record mapping workflow node IDs to their error details. Only present when one
     * or more nodes have errored.
     */
    nodeErrors?: { [key: string]: Failed.NodeErrors };
  }

  export namespace Failed {
    export interface NodeErrors {
      /**
       * A human-readable description of the node error.
       */
      message: string;

      /**
       * The human-readable name of the node that errored.
       */
      nodeName?: string;
    }
  }

  /**
   * A succeeded workflow invocation
   */
  export interface Succeeded {
    /**
     * The ID of the workflow invocation being returned.
     */
    id: string;

    /**
     * The timestamp that the workflow invocation was submitted at.
     */
    createdAt: string;

    /**
     * A record mapping workflow node IDs to arrays of output URLs. Each key is the
     * UUID of a workflow node that produced output, and each value is an array of URLs
     * for that node's artifacts. These URLs will expire within 24-48 hours; fetch the
     * invocation again to get fresh URLs. It is expected that you download the assets
     * at these URLs and store them in your own storage system.
     */
    output: { [key: string]: Array<string> };

    status: 'SUCCEEDED';

    /**
     * A record mapping workflow node IDs to their error details. Even when the overall
     * workflow succeeds, individual nodes may have encountered non-fatal errors. Only
     * present when one or more nodes have errored.
     */
    nodeErrors?: { [key: string]: Succeeded.NodeErrors };
  }

  export namespace Succeeded {
    export interface NodeErrors {
      /**
       * A human-readable description of the node error.
       */
      message: string;

      /**
       * The human-readable name of the node that errored.
       */
      nodeName?: string;
    }
  }
}

export declare namespace WorkflowInvocations {
  export { type WorkflowInvocationRetrieveResponse as WorkflowInvocationRetrieveResponse };
}
