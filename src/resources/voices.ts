// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Voices extends APIResource {
  /**
   * Create a custom voice from a text description.
   */
  create(body: VoiceCreateParams, options?: RequestOptions): APIPromise<VoiceCreateResponse> {
    return this._client.post('/v1/voices', { body, ...options });
  }

  /**
   * Get details about a specific custom voice.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VoiceRetrieveResponse> {
    return this._client.get(path`/v1/voices/${id}`, options);
  }

  /**
   * List custom voices for the authenticated organization with cursor-based
   * pagination.
   */
  list(
    query: VoiceListParams,
    options?: RequestOptions,
  ): PagePromise<VoiceListResponsesCursorPage, VoiceListResponse> {
    return this._client.getAPIList('/v1/voices', CursorPage<VoiceListResponse>, { query, ...options });
  }

  /**
   * Delete a custom voice.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/voices/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate a short audio preview of a voice from a text description. Use this to
   * audition a voice before creating it.
   */
  preview(body: VoicePreviewParams, options?: RequestOptions): APIPromise<VoicePreviewResponse> {
    return this._client.post('/v1/voices/preview', { body, ...options });
  }
}

export type VoiceListResponsesCursorPage = CursorPage<VoiceListResponse>;

export interface VoiceCreateResponse {
  /**
   * The ID of the voice that was created.
   */
  id: string;
}

/**
 * A voice that is still being processed.
 */
export type VoiceRetrieveResponse =
  | VoiceRetrieveResponse.Processing
  | VoiceRetrieveResponse.Ready
  | VoiceRetrieveResponse.Failed;

export namespace VoiceRetrieveResponse {
  /**
   * A voice that is still being processed.
   */
  export interface Processing {
    /**
     * The unique identifier of the voice.
     */
    id: string;

    /**
     * When the voice was created.
     */
    createdAt: string;

    /**
     * A description of the voice, or null if not set.
     */
    description: string | null;

    /**
     * The name of the voice.
     */
    name: string;

    status: 'PROCESSING';
  }

  /**
   * A voice that is ready for use.
   */
  export interface Ready {
    /**
     * The unique identifier of the voice.
     */
    id: string;

    /**
     * When the voice was created.
     */
    createdAt: string;

    /**
     * A description of the voice, or null if not set.
     */
    description: string | null;

    /**
     * The name of the voice.
     */
    name: string;

    /**
     * A signed URL to an MP3 audio sample of the voice, or null if no sample is
     * available.
     */
    previewUrl: string | null;

    status: 'READY';
  }

  /**
   * A voice that failed to finish processing.
   */
  export interface Failed {
    /**
     * The unique identifier of the voice.
     */
    id: string;

    /**
     * When the voice was created.
     */
    createdAt: string;

    /**
     * A description of the voice, or null if not set.
     */
    description: string | null;

    /**
     * A human-readable error message. This value is not stable and should not be
     * matched against programmatically.
     */
    failureReason: string;

    /**
     * The name of the voice.
     */
    name: string;

    status: 'FAILED';
  }
}

/**
 * A voice that is still being processed.
 */
export type VoiceListResponse =
  | VoiceListResponse.Processing
  | VoiceListResponse.Ready
  | VoiceListResponse.Failed;

export namespace VoiceListResponse {
  /**
   * A voice that is still being processed.
   */
  export interface Processing {
    /**
     * The unique identifier of the voice.
     */
    id: string;

    /**
     * When the voice was created.
     */
    createdAt: string;

    /**
     * A description of the voice, or null if not set.
     */
    description: string | null;

    /**
     * The name of the voice.
     */
    name: string;

    status: 'PROCESSING';
  }

  /**
   * A voice that is ready for use.
   */
  export interface Ready {
    /**
     * The unique identifier of the voice.
     */
    id: string;

    /**
     * When the voice was created.
     */
    createdAt: string;

    /**
     * A description of the voice, or null if not set.
     */
    description: string | null;

    /**
     * The name of the voice.
     */
    name: string;

    /**
     * A signed URL to an MP3 audio sample of the voice, or null if no sample is
     * available.
     */
    previewUrl: string | null;

    status: 'READY';
  }

  /**
   * A voice that failed to finish processing.
   */
  export interface Failed {
    /**
     * The unique identifier of the voice.
     */
    id: string;

    /**
     * When the voice was created.
     */
    createdAt: string;

    /**
     * A description of the voice, or null if not set.
     */
    description: string | null;

    /**
     * A human-readable error message. This value is not stable and should not be
     * matched against programmatically.
     */
    failureReason: string;

    /**
     * The name of the voice.
     */
    name: string;

    status: 'FAILED';
  }
}

export interface VoicePreviewResponse {
  /**
   * Duration of the audio preview in seconds.
   */
  durationSecs: number;

  /**
   * A presigned URL to the audio preview. The URL expires after 24 hours.
   */
  url: string;
}

export interface VoiceCreateParams {
  /**
   * The source configuration for creating the voice.
   */
  from: VoiceCreateParams.From;

  /**
   * A name for the voice.
   */
  name: string;

  /**
   * An optional description of the voice.
   */
  description?: string | null;
}

export namespace VoiceCreateParams {
  /**
   * The source configuration for creating the voice.
   */
  export interface From {
    /**
     * The voice design model to use.
     */
    model: 'eleven_multilingual_ttv_v2' | 'eleven_ttv_v3';

    /**
     * A text description of the desired voice characteristics. Must be at least 20
     * characters.
     */
    prompt: string;

    type: 'text';
  }
}

export interface VoiceListParams extends CursorPageParams {}

export interface VoicePreviewParams {
  /**
   * The voice design model to use.
   */
  model: 'eleven_multilingual_ttv_v2' | 'eleven_ttv_v3';

  /**
   * A text description of the desired voice characteristics. Must be at least 20
   * characters.
   */
  prompt: string;
}

export declare namespace Voices {
  export {
    type VoiceCreateResponse as VoiceCreateResponse,
    type VoiceRetrieveResponse as VoiceRetrieveResponse,
    type VoiceListResponse as VoiceListResponse,
    type VoicePreviewResponse as VoicePreviewResponse,
    type VoiceListResponsesCursorPage as VoiceListResponsesCursorPage,
    type VoiceCreateParams as VoiceCreateParams,
    type VoiceListParams as VoiceListParams,
    type VoicePreviewParams as VoicePreviewParams,
  };
}
