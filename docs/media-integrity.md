# Media integrity record

Recorded on 2026-09-14 before media integration. The source files remain outside the project and must never be overwritten.

| Source file                            |     Bytes | SHA-256                                                            | Integration status                                               |
| -------------------------------------- | --------: | ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `photopraphy/fotoğraf_portfolyosu.pdf` | 100634002 | `7d2ba1975cd76291b33c6881bb4844b72f96d371a1614bd682f0ee51da1f1467` | Displayed as 23 complete, separately rendered pages              |
| `COLLAGES/Başlıksız-1 kopya.pdf`       | 139676539 | `fb5998b353979a646f5eb1659dbb222c142ae9bdbdbc1894f0db178b6d9f07ac` | Displayed only as one complete A3 composition                    |
| `COLLAGES/self_collage.jpg`            |  16354651 | `c816b406e376e64760a64cb55323db3f431631cad2fead94cc027434e548b12c` | Copied byte-for-byte to `public/images/work-05-self-collage.jpg` |

## Preservation rules

- Do not crop, rotate, recolor, retouch, reframe, or overwrite source media.
- Display still images with their complete composition. Use `object-fit: contain` whenever the source ratio differs from its editorial module.
- Preserve every video's full duration, frame, speed, and audio. Do not trim or loop it.
- Web delivery derivatives may change encoding or resolution only when they preserve the complete frame, aspect ratio, duration, playback order, and audio content.
- Verify copied originals against this record before and after integration.

## Photography page derivatives

The photography PDF is treated as a 23-page designed sequence, not as a collection of embedded image objects. Every complete page is rendered separately to a lossless 2880 × 1620 PNG.

- Rendering uses the full PDF media box; no crop box or extracted subsection is used.
- Page orientation, typography, whitespace, image placement, and aspect ratio remain intact.
- The site displays every page with `object-fit: contain`.
- The original PDF remains unchanged and is the preservation source.

## Collage board web derivative

The Illustrator PDF remains a single composition because its vector elements and embedded images cannot be separated without changing the work. Its complete A3 landscape page is rendered as one lossless 2382 × 1684 PNG.

- The full PDF page bounds are rendered; no crop box or extracted subsection is used.
- The site displays the board with `object-fit: contain`.
- The original PDF remains unchanged and continues to be the preservation source.

The embedded objects are intentionally not extracted or displayed separately. The A3 page is one indivisible work on the site.

## Individual Drive collage works

Four separately supplied works from the shared Drive folder are displayed independently from the complete A3 board. The JPEG sources are copied byte-for-byte. HEIC sources remain unchanged in the preservation staging area and receive lossless PNG web derivatives because browsers and Next.js do not reliably display HEIC.

| Source file     | SHA-256                                                            | Web treatment                    |
| --------------- | ------------------------------------------------------------------ | -------------------------------- |
| `28699.jpg`     | `6320a9c15e7ce1e72d3d24a52fb1762a5841ce5b04787be373d8747617b223af` | Byte-identical JPEG              |
| `IMG_0953.jpg`  | `e5b8a87299e1b782b71a30f89f8cd446a1f60e23c4fb5ab6c1d8693040a89547` | Byte-identical JPEG              |
| `IMG_3149.heic` | `6ee47c4f5b971819ef33e85f475c813e3eecedda80e749e155129581b679023c` | Full-frame lossless PNG delivery |
| `IMG_4899.heic` | `de5d18ff427ee7e015bc48138439f5a5fde871b4d8065b50b5372cc28dc44e81` | Full-frame lossless PNG delivery |

- No source edge is removed and no image is reframed.
- Every preview uses `object-fit: contain`.
- Each work links to a full-resolution web asset.

## Complete Drive video works

The public Drive folder contains one short film and three music videos. The site embeds the original Drive files directly; it does not create, edit, trim, crop, transcode, accelerate, mute, or loop a derivative.

| Source file                 | Site treatment                |
| --------------------------- | ----------------------------- |
| `The_Bound.MOV`             | Original Drive file, full cut |
| `dördü beş geçe_nolcak.mp4` | Original Drive file, full cut |
| `iflah olmaz_nolcak.mp4`    | Original Drive file, full cut |
| `kayıp_müzik_klibi.MP4`     | Original Drive file, full cut |

- Playback begins only after the visitor uses the Drive player's controls.
- Looping and autoplay are not requested by the site.
- The player occupies a 16:9 editorial module, while Drive's own player preserves the video's complete frame inside it.
- Fullscreen playback remains available for every work.

## Final public media set

The portfolio is intentionally composed only from the supplied work: four complete Drive videos, 23 complete photography portfolio pages, one indivisible A3 collage board, and five independently supplied collage works. Generated placeholder projects and their media files are excluded from the public interface and deployment bundle.
