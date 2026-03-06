// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Avatars extends APIResource {
  /**
   * Create a new avatar with a reference image and voice.
   *
   * @example
   * ```ts
   * const avatar = await client.avatars.create({
   *   name: 'x',
   *   personality:
   *     'You are a helpful support agent assisting users with their account questions. Be friendly, patient, and provide clear step-by-step guidance.',
   *   referenceImage: 'https://example.com/reference.jpg',
   *   voice: { presetId: 'adrian', type: 'runway-live-preset' },
   * });
   * ```
   */
  create(body: AvatarCreateParams, options?: RequestOptions): APIPromise<AvatarCreateResponse> {
    return this._client.post('/v1/avatars', { body, ...options });
  }

  /**
   * Get details of a specific avatar.
   *
   * @example
   * ```ts
   * const avatar = await client.avatars.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AvatarRetrieveResponse> {
    return this._client.get(path`/v1/avatars/${id}`, options);
  }

  /**
   * Update an existing avatar. At least one field must be provided.
   *
   * @example
   * ```ts
   * const avatar = await client.avatars.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(
    id: string,
    body: AvatarUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AvatarUpdateResponse> {
    return this._client.patch(path`/v1/avatars/${id}`, { body, ...options });
  }

  /**
   * List avatars for the authenticated user with cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const avatarListResponse of client.avatars.list({
   *   limit: 1,
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AvatarListParams,
    options?: RequestOptions,
  ): PagePromise<AvatarListResponsesCursorPage, AvatarListResponse> {
    return this._client.getAPIList('/v1/avatars', CursorPage<AvatarListResponse>, { query, ...options });
  }

  /**
   * Delete an avatar.
   *
   * @example
   * ```ts
   * await client.avatars.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/avatars/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type AvatarListResponsesCursorPage = CursorPage<AvatarListResponse>;

/**
 * An avatar that is still being processed.
 */
export type AvatarCreateResponse =
  | AvatarCreateResponse.Processing
  | AvatarCreateResponse.Ready
  | AvatarCreateResponse.Failed;

export namespace AvatarCreateResponse {
  /**
   * An avatar that is still being processed.
   */
  export interface Processing {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'PROCESSING';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Processing.RunwayLivePreset | Processing.Custom;
  }

  export namespace Processing {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }

  /**
   * An avatar that is ready for use in sessions.
   */
  export interface Ready {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'READY';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Ready.RunwayLivePreset | Ready.Custom;
  }

  export namespace Ready {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }

  /**
   * An avatar that failed to finish processing.
   */
  export interface Failed {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * A human-readable error message. This value is not stable and should not be
     * matched against programmatically.
     */
    failureReason: string;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'FAILED';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Failed.RunwayLivePreset | Failed.Custom;
  }

  export namespace Failed {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }
}

/**
 * An avatar that is still being processed.
 */
export type AvatarRetrieveResponse =
  | AvatarRetrieveResponse.Processing
  | AvatarRetrieveResponse.Ready
  | AvatarRetrieveResponse.Failed;

export namespace AvatarRetrieveResponse {
  /**
   * An avatar that is still being processed.
   */
  export interface Processing {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'PROCESSING';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Processing.RunwayLivePreset | Processing.Custom;
  }

  export namespace Processing {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }

  /**
   * An avatar that is ready for use in sessions.
   */
  export interface Ready {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'READY';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Ready.RunwayLivePreset | Ready.Custom;
  }

  export namespace Ready {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }

  /**
   * An avatar that failed to finish processing.
   */
  export interface Failed {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * A human-readable error message. This value is not stable and should not be
     * matched against programmatically.
     */
    failureReason: string;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'FAILED';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Failed.RunwayLivePreset | Failed.Custom;
  }

  export namespace Failed {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }
}

/**
 * An avatar that is still being processed.
 */
export type AvatarUpdateResponse =
  | AvatarUpdateResponse.Processing
  | AvatarUpdateResponse.Ready
  | AvatarUpdateResponse.Failed;

export namespace AvatarUpdateResponse {
  /**
   * An avatar that is still being processed.
   */
  export interface Processing {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'PROCESSING';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Processing.RunwayLivePreset | Processing.Custom;
  }

  export namespace Processing {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }

  /**
   * An avatar that is ready for use in sessions.
   */
  export interface Ready {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'READY';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Ready.RunwayLivePreset | Ready.Custom;
  }

  export namespace Ready {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }

  /**
   * An avatar that failed to finish processing.
   */
  export interface Failed {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * A human-readable error message. This value is not stable and should not be
     * matched against programmatically.
     */
    failureReason: string;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'FAILED';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Failed.RunwayLivePreset | Failed.Custom;
  }

  export namespace Failed {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }
}

/**
 * An avatar that is still being processed.
 */
export type AvatarListResponse =
  | AvatarListResponse.Processing
  | AvatarListResponse.Ready
  | AvatarListResponse.Failed;

export namespace AvatarListResponse {
  /**
   * An avatar that is still being processed.
   */
  export interface Processing {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'PROCESSING';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Processing.RunwayLivePreset | Processing.Custom;
  }

  export namespace Processing {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }

  /**
   * An avatar that is ready for use in sessions.
   */
  export interface Ready {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'READY';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Ready.RunwayLivePreset | Ready.Custom;
  }

  export namespace Ready {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }

  /**
   * An avatar that failed to finish processing.
   */
  export interface Failed {
    /**
     * The unique identifier of the avatar.
     */
    id: string;

    /**
     * When the avatar was created.
     */
    createdAt: string;

    /**
     * IDs of knowledge documents attached to this avatar.
     */
    documentIds: Array<string>;

    /**
     * A human-readable error message. This value is not stable and should not be
     * matched against programmatically.
     */
    failureReason: string;

    /**
     * The character name for the avatar.
     */
    name: string;

    /**
     * System prompt defining how the avatar should behave in conversations.
     */
    personality: string;

    /**
     * A URI pointing to a low-resolution preview of the processed reference image.
     */
    processedImageUri: string | null;

    /**
     * A URI pointing to a low-resolution preview of the avatar's reference image.
     */
    referenceImageUri: string | null;

    /**
     * Opening message that the avatar will say when a session starts, or null if not
     * set.
     */
    startScript: string | null;

    status: 'FAILED';

    /**
     * When the avatar was last updated.
     */
    updatedAt: string;

    /**
     * The voice configured for this avatar.
     */
    voice: Failed.RunwayLivePreset | Failed.Custom;
  }

  export namespace Failed {
    /**
     * A preset voice from the Runway API.
     */
    export interface RunwayLivePreset {
      /**
       * A brief description of the voice characteristics.
       */
      description: string;

      /**
       * The display name of the voice.
       */
      name: string;

      /**
       * The preset voice identifier.
       */
      presetId:
        | 'victoria'
        | 'vincent'
        | 'clara'
        | 'drew'
        | 'skye'
        | 'max'
        | 'morgan'
        | 'felix'
        | 'mia'
        | 'marcus'
        | 'summer'
        | 'ruby'
        | 'aurora'
        | 'jasper'
        | 'leo'
        | 'adrian'
        | 'nina'
        | 'emma'
        | 'blake'
        | 'david'
        | 'maya'
        | 'nathan'
        | 'sam'
        | 'georgia'
        | 'petra'
        | 'adam'
        | 'zach'
        | 'violet'
        | 'roman'
        | 'luna';

      type: 'runway-live-preset';
    }

    /**
     * A custom voice created via the Voices API.
     */
    export interface Custom {
      /**
       * The unique identifier of the custom voice.
       */
      id: string;

      /**
       * Whether the voice has been deleted. When true, name and description are omitted.
       */
      deleted: boolean;

      type: 'custom';

      /**
       * A brief description of the voice characteristics.
       */
      description?: string | null;

      /**
       * The display name of the voice.
       */
      name?: string;
    }
  }
}

export interface AvatarCreateParams {
  /**
   * The character name for the avatar.
   */
  name: string;

  /**
   * System prompt defining how the avatar should behave in conversations.
   */
  personality: string;

  /**
   * A HTTPS URL.
   */
  referenceImage: string;

  /**
   * The voice configuration for the avatar.
   */
  voice: AvatarCreateParams.RunwayLivePreset | AvatarCreateParams.Custom;

  /**
   * Optional list of knowledge document IDs to attach to this avatar. Documents
   * provide additional context during conversations.
   */
  documentIds?: Array<string>;

  /**
   * Controls image preprocessing. `optimize` improves the image for better avatar
   * results. `none` uses the image as-is; quality not guaranteed.
   */
  imageProcessing?: 'optimize' | 'none';

  /**
   * Optional opening message that the avatar will say when a session starts.
   */
  startScript?: string;
}

export namespace AvatarCreateParams {
  /**
   * A preset voice from the Runway API.
   */
  export interface RunwayLivePreset {
    /**
     * The ID of a preset voice. Available voices: `victoria` (Victoria), `vincent`
     * (Vincent), `clara` (Clara), `drew` (Drew), `skye` (Skye), `max` (Max), `morgan`
     * (Morgan), `felix` (Felix), `mia` (Mia), `marcus` (Marcus), `summer` (Summer),
     * `ruby` (Ruby), `aurora` (Aurora), `jasper` (Jasper), `leo` (Leo), `adrian`
     * (Adrian), `nina` (Nina), `emma` (Emma), `blake` (Blake), `david` (David), `maya`
     * (Maya), `nathan` (Nathan), `sam` (Sam), `georgia` (Georgia), `petra` (Petra),
     * `adam` (Adam), `zach` (Zach), `violet` (Violet), `roman` (Roman), `luna` (Luna).
     */
    presetId:
      | 'victoria'
      | 'vincent'
      | 'clara'
      | 'drew'
      | 'skye'
      | 'max'
      | 'morgan'
      | 'felix'
      | 'mia'
      | 'marcus'
      | 'summer'
      | 'ruby'
      | 'aurora'
      | 'jasper'
      | 'leo'
      | 'adrian'
      | 'nina'
      | 'emma'
      | 'blake'
      | 'david'
      | 'maya'
      | 'nathan'
      | 'sam'
      | 'georgia'
      | 'petra'
      | 'adam'
      | 'zach'
      | 'violet'
      | 'roman'
      | 'luna';

    type: 'runway-live-preset';
  }

  /**
   * A custom voice created via the Voices API.
   */
  export interface Custom {
    /**
     * The ID of a custom voice created via the Voices API.
     */
    id: string;

    type: 'custom';
  }
}

export interface AvatarUpdateParams {
  /**
   * List of knowledge document IDs to attach to this avatar. Replaces all current
   * attachments. Documents provide additional context during conversations.
   */
  documentIds?: Array<string>;

  /**
   * Controls image preprocessing. `optimize` improves the image for better avatar
   * results. `none` uses the image as-is; quality not guaranteed.
   */
  imageProcessing?: 'optimize' | 'none';

  /**
   * The character name for the avatar.
   */
  name?: string;

  /**
   * System prompt defining how the avatar should behave in conversations.
   */
  personality?: string;

  /**
   * A HTTPS URL.
   */
  referenceImage?: string;

  /**
   * Optional opening message that the avatar will say when a session starts. Set to
   * null to clear.
   */
  startScript?: string | null;

  /**
   * The voice configuration for the avatar.
   */
  voice?: AvatarUpdateParams.RunwayLivePreset | AvatarUpdateParams.Custom;
}

export namespace AvatarUpdateParams {
  /**
   * A preset voice from the Runway API.
   */
  export interface RunwayLivePreset {
    /**
     * The ID of a preset voice. Available voices: `victoria` (Victoria), `vincent`
     * (Vincent), `clara` (Clara), `drew` (Drew), `skye` (Skye), `max` (Max), `morgan`
     * (Morgan), `felix` (Felix), `mia` (Mia), `marcus` (Marcus), `summer` (Summer),
     * `ruby` (Ruby), `aurora` (Aurora), `jasper` (Jasper), `leo` (Leo), `adrian`
     * (Adrian), `nina` (Nina), `emma` (Emma), `blake` (Blake), `david` (David), `maya`
     * (Maya), `nathan` (Nathan), `sam` (Sam), `georgia` (Georgia), `petra` (Petra),
     * `adam` (Adam), `zach` (Zach), `violet` (Violet), `roman` (Roman), `luna` (Luna).
     */
    presetId:
      | 'victoria'
      | 'vincent'
      | 'clara'
      | 'drew'
      | 'skye'
      | 'max'
      | 'morgan'
      | 'felix'
      | 'mia'
      | 'marcus'
      | 'summer'
      | 'ruby'
      | 'aurora'
      | 'jasper'
      | 'leo'
      | 'adrian'
      | 'nina'
      | 'emma'
      | 'blake'
      | 'david'
      | 'maya'
      | 'nathan'
      | 'sam'
      | 'georgia'
      | 'petra'
      | 'adam'
      | 'zach'
      | 'violet'
      | 'roman'
      | 'luna';

    type: 'runway-live-preset';
  }

  /**
   * A custom voice created via the Voices API.
   */
  export interface Custom {
    /**
     * The ID of a custom voice created via the Voices API.
     */
    id: string;

    type: 'custom';
  }
}

export interface AvatarListParams extends CursorPageParams {}

export declare namespace Avatars {
  export {
    type AvatarCreateResponse as AvatarCreateResponse,
    type AvatarRetrieveResponse as AvatarRetrieveResponse,
    type AvatarUpdateResponse as AvatarUpdateResponse,
    type AvatarListResponse as AvatarListResponse,
    type AvatarListResponsesCursorPage as AvatarListResponsesCursorPage,
    type AvatarCreateParams as AvatarCreateParams,
    type AvatarUpdateParams as AvatarUpdateParams,
    type AvatarListParams as AvatarListParams,
  };
}
