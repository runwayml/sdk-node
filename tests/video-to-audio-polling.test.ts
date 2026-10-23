import RunwayML, { TaskFailedError } from '@runwayml/sdk';

describe('video-to-audio task waiting', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  test.each(['SUCCEEDED', 'FAILED'] as const)('waits for %s through the created task ID', async (status) => {
    const task = {
      id: 'task-1',
      createdAt: '2026-01-01T00:00:00Z',
      status,
      ...(status === 'SUCCEEDED' ?
        { output: ['https://example.com/audio.mp3'] }
      : { failure: 'Generation failed', failureCode: 'INTERNAL' }),
    };
    const fetch = jest
      .fn()
      .mockResolvedValueOnce(Response.json({ id: 'task-1', estimatedCost: { credits: 2 } }))
      .mockResolvedValueOnce(Response.json(task));
    const client = new RunwayML({ apiKey: 'test', baseURL: 'https://example.com', fetch });
    const creation = client.videoToAudio.create({
      duration: 5,
      model: 'mirelo_sfx_2_0',
      videoUri: 'https://example.com/video.mp4',
    });

    expect((await creation).estimatedCost.credits).toBe(2);
    const waiting = creation.waitForTaskOutput();
    const result =
      status === 'SUCCEEDED' ?
        expect(waiting).resolves.toEqual(task)
      : expect(waiting).rejects.toBeInstanceOf(TaskFailedError);
    await jest.runOnlyPendingTimersAsync();
    await result;

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch.mock.calls[0]![0].toString()).toBe('https://example.com/v1/video_to_audio');
    expect(fetch.mock.calls[1]![0].toString()).toBe('https://example.com/v1/tasks/task-1');
  });
});
