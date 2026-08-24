// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';
import { APIPromiseWithAwaitableTask, wrapAsWaitableResource } from '../lib/polling';

/**
 * These endpoints all kick off tasks to create generations.
 */
export class VideoToHdr extends APIResource {
  /**
   * This endpoint starts a task to upconvert an SDR video to true HDR with Ruby,
   * Runway's HDR grading model. The output keeps the source's own pixels — luma and
   * color are extended into the HDR range, nothing is re-synthesized. Set
   * `outputFormat` to choose the delivery profile: `hdr10` (HEVC Main 10, BT.2020 +
   * PQ, the default), `hlg` (HEVC Main 10, BT.2020 + HLG), `hdr_prores` (BT.2020 +
   * PQ ProRes .mov editorial mezzanine, tier selectable with `proresProfile`), or
   * `hdr_exr_sequence` (a .zip of half-float OpenEXR frames in linear BT.2020
   * display light, for compositing). Tasks bill per second of output at 20 credits
   * per second, rising to 40 credits per second when the source is larger than 4
   * megapixels (roughly 4K) — an upconvert delivers at the source's own resolution.
   *
   * @example
   * ```ts
   * const videoToHdr = await client.videoToHdr.create({
   *   model: 'ruby',
   *   videoUri: 'https://example.com/video.mp4',
   * });
   * ```
   */
  create(
    body: VideoToHdrCreateParams,
    options?: RequestOptions,
  ): APIPromiseWithAwaitableTask<VideoToHdrCreateResponse> {
    return wrapAsWaitableResource<VideoToHdrCreateResponse>(this._client)(
      this._client.post('/v1/video_to_hdr', { body, ...options }),
    );
  }
}

export interface VideoToHdrCreateResponse {
  /**
   * The ID of the task that was created. Use this to retrieve the task later.
   */
  id: string;

  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  estimatedCost: VideoToHdrCreateResponse.EstimatedCost;
}

export namespace VideoToHdrCreateResponse {
  /**
   * The maximum credits this task may charge. The final amount may be lower after
   * the task completes.
   */
  export interface EstimatedCost {
    /**
     * Estimated cost of the generation in credits.
     */
    credits: number;
  }
}

export interface VideoToHdrCreateParams {
  model: 'ruby';

  /**
   * A HTTPS URL, Runway upload URI, or base64 data URI (e.g.
   * `data:video/mp4;base64,...`, up to 16MB) containing an encoded video. See
   * [our docs](/assets/inputs#videos) on video inputs for more information.
   */
  videoUri: string;

  /**
   * The HDR delivery profile of the output. `hdr10` (default) returns an HEVC Main
   * 10, BT.2020 + PQ .mp4; `hlg` returns an HEVC Main 10, BT.2020 + HLG .mp4;
   * `hdr_prores` returns a BT.2020 + PQ ProRes .mov editorial mezzanine, whose tier
   * is selectable with `proresProfile`; `hdr_exr_sequence` returns a .zip of
   * half-float OpenEXR frames holding the HDR signal as linear BT.2020 display
   * light, 1.0 = 100 nits, ready to composite. The EXR zip is the whole delivery —
   * the frames, a colorimetry.json sidecar, a provenance.json sidecar declaring the
   * upconvert, and the source audio as audio.wav when the source has any. All four
   * profiles bill at the same rate: 20 credits per second of output, rising to 40
   * credits per second when the source is larger than 4 megapixels (roughly 4K).
   */
  outputFormat?: 'hdr10' | 'hlg' | 'hdr_prores' | 'hdr_exr_sequence';

  /**
   * The ProRes tier of the `hdr_prores` mezzanine. Only valid when `outputFormat` is
   * `hdr_prores`. Defaults to `422 HQ`.
   */
  proresProfile?: '422' | '4444' | '422 HQ';
}

export declare namespace VideoToHdr {
  export {
    type VideoToHdrCreateResponse as VideoToHdrCreateResponse,
    type VideoToHdrCreateParams as VideoToHdrCreateParams,
  };
}
