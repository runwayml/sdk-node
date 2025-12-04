// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Return details about a task. Consumers of this API should not expect updates
   * more frequent than once every five seconds for a given task.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TaskRetrieveResponse> {
    return this._client.get(path`/v1/tasks/${id}`, options);
  }

  /**
   * Tasks that are running, pending, or throttled can be canceled by invoking this
   * method. Invoking this method for other tasks will delete them.
   *
   * The output data associated with a deleted task will be deleted from persistent
   * storage in accordance with our data retention policy. Aborted and deleted tasks
   * will not be able to be fetched again in the future.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/tasks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A pending task
 */
export type TaskRetrieveResponse =
  | TaskRetrieveResponse.Pending
  | TaskRetrieveResponse.Throttled
  | TaskRetrieveResponse.Cancelled
  | TaskRetrieveResponse.Running
  | TaskRetrieveResponse.Failed
  | TaskRetrieveResponse.Succeeded;

export namespace TaskRetrieveResponse {
  /**
   * A pending task
   */
  export interface Pending {
    /**
     * The ID of the task being returned.
     */
    id: string;

    /**
     * The timestamp that the task was submitted at.
     */
    createdAt: string;

    status: 'PENDING';
  }

  /**
   * A throttled task
   */
  export interface Throttled {
    /**
     * The ID of the task being returned.
     */
    id: string;

    /**
     * The timestamp that the task was submitted at.
     */
    createdAt: string;

    status: 'THROTTLED';
  }

  /**
   * A cancelled or deleted task
   */
  export interface Cancelled {
    /**
     * The ID of the task being returned.
     */
    id: string;

    /**
     * The timestamp that the task was submitted at.
     */
    createdAt: string;

    status: 'CANCELLED';
  }

  /**
   * A running task
   */
  export interface Running {
    /**
     * The ID of the task being returned.
     */
    id: string;

    /**
     * The timestamp that the task was submitted at.
     */
    createdAt: string;

    progress: number;

    status: 'RUNNING';
  }

  /**
   * A failed task
   */
  export interface Failed {
    /**
     * The ID of the task being returned.
     */
    id: string;

    /**
     * The timestamp that the task was submitted at.
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
  }

  /**
   * A succeeded task
   */
  export interface Succeeded {
    /**
     * The ID of the task being returned.
     */
    id: string;

    /**
     * The timestamp that the task was submitted at.
     */
    createdAt: string;

    /**
     * An array of URLs that return the output of the task. These URLs will expire
     * within 24-48 hours; fetch the task again to get fresh URLs. It is expected that
     * you download the assets at these URLs and store them in your own storage system.
     */
    output: Array<string>;

    status: 'SUCCEEDED';
  }
}

export declare namespace Tasks {
  export { type TaskRetrieveResponse as TaskRetrieveResponse };
}
