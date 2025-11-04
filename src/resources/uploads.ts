// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { Uploadable } from '../internal/uploads';
import { toFile } from '../internal/to-file';
import type { Fetch } from '../internal/builtin-types';
import * as Errors from '../core/error';
import { castToError } from '../internal/errors';

interface RunwayUploadStartedResponse {
  runwayUri: string;
  uploadUrl: string;
  fields: Record<string, string>;
}

async function uploadFileToStorage(
  uploadUrl: string,
  fields: Record<string, string>,
  file: File,
  fileMetadata: string | undefined,
  timeout: number | undefined,
  fetch: Fetch,
): Promise<void> {
  const formData = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value);
  }
  if (fileMetadata !== undefined) {
    formData.append('metadata', fileMetadata);
  }
  formData.append('file', file);

  const controller = new AbortController();
  const timeoutId = timeout ? setTimeout(() => controller.abort(), timeout) : undefined;

  try {
    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });
    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      throw new Errors.APIError(
        response.status,
        { error: errorText },
        `Upload failed with status ${response.status}`,
        response.headers,
      );
    }
  } catch (error) {
    if (error instanceof Errors.APIError) {
      throw error;
    }
    const err = castToError(error);
    if (err instanceof Error && err.name === 'AbortError') {
      throw new Errors.APIConnectionTimeoutError();
    }
    throw new Errors.APIConnectionError({ cause: err });
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

export class Uploads extends APIResource {
  /**
   * Uploads a temporary media file that can be used in other API generation
   * requests.
   *
   * The uploaded files will be automatically expired and deleted after a
   * period of time.
   */
  async createEphemeral(
    params: UploadsCreateEphemeralParams,
    options?: RequestOptions,
  ): Promise<UploadCreateEphemeralResponse> {
    const { file, fileMetadata } = params;
    const fileObj = await toFile(file);

    if (!fileObj.name || fileObj.name === 'unknown_file') {
      throw new Error(
        'Cannot infer filename from file. Please provide a File with a name property, ' +
          'or use the toFile() utility with a name parameter to convert your data to a File.',
      );
    }

    const placeholder = await this._client.post<RunwayUploadStartedResponse>('/v1/uploads', {
      body: { filename: fileObj.name, type: 'ephemeral' as const },
      ...options,
    });

    const timeout = options?.timeout ?? this._client.timeout;
    // Access private fetch - using type assertion as it's needed for direct upload
    const fetch = (this._client as unknown as { fetch: Fetch }).fetch;
    await uploadFileToStorage(
      placeholder.uploadUrl,
      placeholder.fields,
      fileObj,
      fileMetadata,
      timeout,
      fetch,
    );

    return { uri: placeholder.runwayUri };
  }
}

export interface UploadCreateEphemeralResponse {
  /**
   * The Runway upload URI to use in other API generation requests.
   */
  uri: string;
}

export interface UploadsCreateEphemeralParams {
  /**
   * The file to upload. Must be a supported media type (image, video, or audio).
   */
  file: Uploadable;

  /**
   * Optional metadata for the file, serialized as a field in multipart/form-data.
   */
  fileMetadata?: string;
}

export declare namespace Uploads {
  export {
    type UploadCreateEphemeralResponse as UploadCreateEphemeralResponse,
    type UploadsCreateEphemeralParams as UploadsCreateEphemeralParams,
  };
}
