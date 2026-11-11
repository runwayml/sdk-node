import RunwayML from '@runwayml/sdk';

describe('vector and music task waiting', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  test.each(['image_to_vector', 'text_to_music'] as const)(
    '%s keeps generation controls and estimated cost when waiting',
    async (endpoint) => {
      const task = {
        id: 'task-1',
        createdAt: '2026-01-01T00:00:00Z',
        status: 'SUCCEEDED',
        output: [`https://example.com/output.${endpoint === 'image_to_vector' ? 'svg' : 'mp3'}`],
      };
      const fetch = jest
        .fn()
        .mockResolvedValueOnce(Response.json({ id: task.id, estimatedCost: { credits: 5 } }))
        .mockResolvedValueOnce(Response.json(task));
      const client = new RunwayML({ apiKey: 'test', baseURL: 'https://example.com', fetch });
      const body =
        endpoint === 'image_to_vector' ?
          {
            model: 'ideogram_vector' as const,
            imageUri: 'https://example.com/input.png',
            vectorizationMode: 'simple' as const,
          }
        : {
            model: 'eleven_music_v2_5' as const,
            promptText: 'Quiet piano',
            duration: 12,
            instrumental: true,
          };
      const creation =
        body.model === 'ideogram_vector' ?
          client.imageToVector.create(body)
        : client.textToMusic.create(body);

      expect((await creation).estimatedCost.credits).toBe(5);
      const waiting = creation.waitForTaskOutput();
      await jest.runOnlyPendingTimersAsync();
      await expect(waiting).resolves.toEqual(task);
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(fetch.mock.calls[0]![0].toString()).toBe(`https://example.com/v1/${endpoint}`);
      expect(JSON.parse(fetch.mock.calls[0]![1].body)).toEqual(body);
      expect(fetch.mock.calls[1]![0].toString()).toBe('https://example.com/v1/tasks/task-1');
    },
  );
});
