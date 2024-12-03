// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  ImageToVideo,
  ImageToVideoCreateParams,
  ImageToVideoCreateResponse,
} from './resources/image-to-video';
import { TaskRetrieveResponse, Tasks } from './resources/tasks';

export interface ClientOptions {
  /**
   * Defaults to process.env['RUNWAYML_API_SECRET'].
   */
  apiKey?: string | undefined;

  runwayVersion?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['RUNWAYML_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the RunwayML API.
 */
export class RunwayML extends Core.APIClient {
  apiKey: string;
  runwayVersion: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the RunwayML API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['RUNWAYML_API_SECRET'] ?? undefined]
   * @param {string | undefined} [opts.runwayVersion=2024-11-06]
   * @param {string} [opts.baseURL=process.env['RUNWAYML_BASE_URL'] ?? https://api.dev.runwayml.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('RUNWAYML_BASE_URL'),
    apiKey = Core.readEnv('RUNWAYML_API_SECRET'),
    runwayVersion = '2024-11-06',
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.RunwayMLError(
        "The RUNWAYML_API_SECRET environment variable is missing or empty; either provide it, or instantiate the RunwayML client with an apiKey option, like new RunwayML({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      runwayVersion,
      ...opts,
      baseURL: baseURL || `https://api.dev.runwayml.com`,
    };

    if (Core.isRunningInBrowser()) {
      throw new Errors.RunwayMLError(
        "It looks like you're running in a browser-like environment, which is disabled to protect your secret API credentials from attackers. If you have a strong business need for client-side use of this API, please open a GitHub issue with your use-case and security mitigations.",
      );
    }

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
    this.runwayVersion = runwayVersion;
  }

  tasks: API.Tasks = new API.Tasks(this);
  imageToVideo: API.ImageToVideo = new API.ImageToVideo(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      'X-Runway-Version': this.runwayVersion,
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  static RunwayML = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static RunwayMLError = Errors.RunwayMLError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

RunwayML.Tasks = Tasks;
RunwayML.ImageToVideo = ImageToVideo;
export declare namespace RunwayML {
  export type RequestOptions = Core.RequestOptions;

  export { Tasks as Tasks, type TaskRetrieveResponse as TaskRetrieveResponse };

  export {
    ImageToVideo as ImageToVideo,
    type ImageToVideoCreateResponse as ImageToVideoCreateResponse,
    type ImageToVideoCreateParams as ImageToVideoCreateParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  RunwayMLError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default RunwayML;
