// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RunwayML from '@runwayml/sdk';
import { File } from 'node:buffer';

const defaultFetch = fetch;

describe('resource uploads', () => {
  describe('createEphemeral: error cases for unnamed files', () => {
    const client = new RunwayML({
      apiKey: 'My API Key',
      baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
    });

    const errorMessage =
      'Cannot infer filename from file. Please provide a File with a name property, ' +
      'or use the toFile() utility with a name parameter to convert your data to a File.';

    it.each([
      ['Uint8Array', new Uint8Array([1, 2, 3, 4, 5])],
      ['ArrayBuffer', new ArrayBuffer(8)],
      ['Buffer', Buffer.from('test content')],
      ['File with "unknown_file" name', new File(['test content'], 'unknown_file')],
      ['File with empty name', new File(['test content'], '')],
    ])('throws a helpful error when %s is passed without a name', async (_, file) => {
      await expect(client.uploads.createEphemeral({ file: file as any })).rejects.toThrow(errorMessage);
    });
  });

  describe('createEphemeral: successful cases with named files', () => {
    const createMockFetch = (runwayUri: string, onStorageUpload?: (init?: RequestInit) => void) => {
      let callCount = 0;
      return async (url: string | URL | Request, init?: RequestInit): Promise<Response> => {
        const urlStr =
          typeof url === 'string' ? url
          : url instanceof URL ? url.toString()
          : url instanceof Request ? url.url
          : String(url);

        if (urlStr.includes('/v1/uploads')) {
          callCount++;
          return new Response(
            JSON.stringify({
              runwayUri,
              uploadUrl: 'https://storage.example.com/upload',
              fields: { key: 'value' },
            }),
            { headers: { 'Content-Type': 'application/json' }, status: 200 },
          );
        }

        if (urlStr.includes('storage.example.com')) {
          callCount++;
          onStorageUpload?.(init);
          return new Response('', { status: 200 });
        }

        return defaultFetch(url, init);
      };
    };

    it('accepts a File with a valid name', async () => {
      const mockFetch = createMockFetch('runway://test-uri-123');
      const client = new RunwayML({
        apiKey: 'My API Key',
        baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
        fetch: mockFetch,
      });

      const response = await client.uploads.createEphemeral({
        file: new File(['test content'], 'test-image.jpg'),
      });

      expect(response.uri).toBe('runway://test-uri-123');
    });

    it('accepts a File with name and optional fileMetadata', async () => {
      const mockFetch = createMockFetch('runway://test-uri-456', (init) => {
        if (init?.body instanceof FormData) {
          expect(init.body.get('metadata')).toBe(JSON.stringify({ duration: 10 }));
        }
      });
      const client = new RunwayML({
        apiKey: 'My API Key',
        baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
        fetch: mockFetch,
      });

      const response = await client.uploads.createEphemeral({
        file: new File(['test content'], 'test-video.mp4'),
        fileMetadata: JSON.stringify({ duration: 10 }),
      });

      expect(response.uri).toBe('runway://test-uri-456');
    });
  });
});
