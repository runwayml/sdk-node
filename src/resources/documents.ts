// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Documents extends APIResource {
  /**
   * Create a new knowledge document. Documents can be attached to avatars to provide
   * additional context during conversations.
   *
   * @example
   * ```ts
   * const document = await client.documents.create({
   *   content:
   *     '# Product FAQ\n\n## What is your return policy?\n\nWe offer a 30-day return policy...',
   *   name: 'Product FAQ',
   * });
   * ```
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<DocumentCreateResponse> {
    return this._client.post('/v1/documents', { body, ...options });
  }

  /**
   * Get details of a specific knowledge document.
   *
   * @example
   * ```ts
   * const document = await client.documents.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DocumentRetrieveResponse> {
    return this._client.get(path`/v1/documents/${id}`, options);
  }

  /**
   * List knowledge documents for the authenticated user with cursor-based
   * pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const documentListResponse of client.documents.list(
   *   { limit: 1 },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DocumentListParams,
    options?: RequestOptions,
  ): PagePromise<DocumentListResponsesCursorPage, DocumentListResponse> {
    return this._client.getAPIList('/v1/documents', CursorPage<DocumentListResponse>, { query, ...options });
  }

  /**
   * Delete a knowledge document. This also removes it from all avatars it was
   * attached to.
   *
   * @example
   * ```ts
   * await client.documents.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/documents/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type DocumentListResponsesCursorPage = CursorPage<DocumentListResponse>;

export interface DocumentCreateResponse {
  /**
   * The unique identifier of the document.
   */
  id: string;

  /**
   * The full content of the document.
   */
  content: string;

  /**
   * When the document was created.
   */
  createdAt: string;

  /**
   * The name of the document.
   */
  name: string;

  /**
   * The type of document.
   */
  type: 'text' | 'file';

  /**
   * When the document was last updated.
   */
  updatedAt: string;

  /**
   * Avatars that use this document. Always empty for newly created documents.
   */
  usedBy: Array<DocumentCreateResponse.UsedBy>;
}

export namespace DocumentCreateResponse {
  export interface UsedBy {
    /**
     * The avatar ID.
     */
    id: string;

    /**
     * URL to the avatar image, or null if not yet processed.
     */
    imageUrl: string | null;

    /**
     * The avatar name.
     */
    name: string;
  }
}

export interface DocumentRetrieveResponse {
  /**
   * The unique identifier of the document.
   */
  id: string;

  /**
   * The full content of the document.
   */
  content: string;

  /**
   * When the document was created.
   */
  createdAt: string;

  /**
   * The name of the document.
   */
  name: string;

  /**
   * The type of document.
   */
  type: 'text' | 'file';

  /**
   * When the document was last updated.
   */
  updatedAt: string;

  /**
   * Avatars that use this document.
   */
  usedBy: Array<DocumentRetrieveResponse.UsedBy>;
}

export namespace DocumentRetrieveResponse {
  export interface UsedBy {
    /**
     * The avatar ID.
     */
    id: string;

    /**
     * URL to the avatar image, or null if not yet processed.
     */
    imageUrl: string | null;

    /**
     * The avatar name.
     */
    name: string;
  }
}

export interface DocumentListResponse {
  /**
   * The unique identifier of the document.
   */
  id: string;

  /**
   * When the document was created.
   */
  createdAt: string;

  /**
   * The name of the document.
   */
  name: string;

  /**
   * The type of document.
   */
  type: 'text' | 'file';

  /**
   * When the document was last updated.
   */
  updatedAt: string;

  /**
   * Avatars that use this document.
   */
  usedBy: Array<DocumentListResponse.UsedBy>;
}

export namespace DocumentListResponse {
  export interface UsedBy {
    /**
     * The avatar ID.
     */
    id: string;

    /**
     * URL to the avatar image, or null if not yet processed.
     */
    imageUrl: string | null;

    /**
     * The avatar name.
     */
    name: string;
  }
}

export interface DocumentCreateParams {
  /**
   * The markdown or plain text content of the document.
   */
  content: string;

  /**
   * A descriptive name for the document.
   */
  name: string;
}

export interface DocumentListParams extends CursorPageParams {}

export declare namespace Documents {
  export {
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentListResponse as DocumentListResponse,
    type DocumentListResponsesCursorPage as DocumentListResponsesCursorPage,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
  };
}
