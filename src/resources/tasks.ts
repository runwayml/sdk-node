// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Tasks extends APIResource {
  /**
   * Return details about a task. Consumers of this API should not expect updates
   * more frequent than once every five seconds for a given task.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<TaskRetrieveResponse> {
    return this._client.get(`/v1/tasks/${id}`, options);
  }

  /**
   * Tasks that are running, pending, or throttled can be canceled by invoking this
   * method. Invoking this method for other tasks will delete them.
   *
   * The output data associated with a deleted task will be deleted from persistent
   * storage in accordance with our data retention policy. Aborted and deleted tasks
   * will not be able to be fetched again in the future.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/tasks/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface TaskRetrieveResponse {
  /**
   * The ID of the task being returned.
   */
  id: string;

  /**
   * The timestamp that the task was submitted at.
   */
  createdAt: string;

  /**
   * - `PENDING` tasks have been enqueued and are waiting to run.
   * - `THROTTLED` tasks are waiting to be enqueued until other jobs have finished
   *   running.
   * - `RUNNING` tasks are currently being processed.
   * - `SUCCEEDED` tasks have completed successfully.
   * - `FAILED` tasks have failed.
   * - `CANCELLED` tasks have been aborted.
   */
  status: 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'PENDING' | 'CANCELLED' | 'THROTTLED';

  /**
   * If the status is `FAILED`, this will contain a human-friendly reason for the
   * failure.
   */
  failure?: string;

  /**
   * If the task has a status of `FAILED`, this contains a machine-readable error
   * code. This is a dot-separated string, with the leftmost segment being the most
   * generic and the rightmost segment being the most specific. For example,
   * `SAFETY.INPUT.TEXT` would indicate that the task failed due to a content
   * moderation error on the input text.
   */
  failureCode?: string;

  /**
   * If the status is `SUCCEEDED`, this will contain an array of strings. Each string
   * will be a URL that returns an output from the task. URLs expire within 24-48
   * hours; fetch the task again to get fresh URLs. It is expected that you download
   * the assets at these URLs and store them in your own storage system.
   */
  output?: Array<string>;

  /**
   * If the task has a status of `RUNNING`, this will contain a floating point number
   * between 0 and 1 representing the progress of the generation.
   */
  progress?: number;
}

export declare namespace Tasks {
  export { type TaskRetrieveResponse as TaskRetrieveResponse };
}
