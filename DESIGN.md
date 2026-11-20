# Purbasha Builders — Material / Place / Progress

## Brief and authority

Redesign the existing Ananda Niketan property website after primary-source research. The user rejected the green/cream/gold split-hero template and requested visible property-led motion. Preserve the real business, enquiry destination, responsive behaviour and clear demo labelling. No invented building amenities, completion records, prices, exact site coordinates or contact numbers.

## Research, 20 November 2026

These websites were visited in the browser, not merely selected from search thumbnails.

| Primary source | Observed | Apply to Purbasha | Do not copy |
| --- | --- | --- | --- |
| [The Harland](https://theharlandwesthollywood.com/) | Full-screen property film; muted video actively playing; visible pause control; residences and enquiry in primary navigation. Its [availability page](https://theharlandwesthollywood.com/availability) separates residence facts and plans. | Immediate moving property imagery, explicit pause, direct home comparison. | Its green palette, brand, building imagery or market positioning. |
| [Vabel homes](https://vabel.co.uk/homes/) | Large interior imagery, compact enquiry/menu, distinct development identities and film links, portfolio divided by availability. | Property imagery carries identity; portfolio and individual home discovery are distinct. | Its bronze/brown treatment, interiors or claims. Video playback was unavailable in the inspected Vabel state; no claim that its film playback was verified. |
| [DLF super-luxury residences](https://www.dlf.in/super-luxury) | Quiet monochrome corporate navigation and distinct project identities; enquiry/support routes. | Clear distinction between Purbasha the builder and Ananda Niketan the development. | Super-luxury claims or assets. The separate Camellias host showed a certificate error and was not bypassed. |
| [Lodha](https://www.lodhagroup.com/) | Full-viewport muted video actively playing, overlay navigation, persistent enquiry, a progression from brand promise to specific developments. | Film-led opening and persistent visit action without a form covering the architecture. | Its footage, brand language or scale claims. |

Additional motion context: the [Harland implementation case study](https://www.k311y.com/case-studies/harland-west-hollywood) describes a house-tour metaphor and image reveals. Those implementation details are reported by its author; direct browser observations above are the evidence used for the design.

## Direction

- Product: an under-construction housing development in Gopalpur, Asansol; the goal is a considered site-visit enquiry.
- Character: direct, architectural, grounded in the site.
- World: concrete structure, exposed brick, street edges and the aerial neighbourhood view.
- Moments: a moving full-screen site film and a native-scroll, three-chapter photographic site journey.
- Signature: thin structural rules, condensed project lettering and a restrained brick-red location marker. No gold dot or green luxury palette.

## Visual system

- Background: mineral white `#fafafa`; alternating surface `#efefed`.
- Main ink: charcoal `#202020`; secondary ink `#575757`.
- Primary action: brick red `#8f352b`, white text. Accent comes from the building material, not a generic luxury theme.
- Dark surface: `#181818`; foreground `#fafafa`; secondary foreground `#c9c9c5`.
- Project/display type: Barlow Condensed, 500–600, used for the project name and major architectural statements.
- Reading/UI type: DM Sans, 400–600; principal body text 16px or larger, comfortable line height.
- Content edges: fluid `clamp(20px, 2.4vw, 96px)`; no narrow fixed-width mobile canvas on desktop.
- Image heights are purposefully limited. Full-screen treatment belongs to the hero and chapter experience, not every plan or map.
- Demo plans remain complete, contained and enlargeable, with explicit illustrative/non-approved labels.

## Page sequence

1. Full-screen film: Ananda Niketan, Gopalpur / Asansol, book a visit and explore homes. Transparent header becomes a solid reading header after the hero.
2. Compact factual overview; no unconfirmed scarcity counter.
3. Residences: four configurations, complete illustrative drawings, area definitions and one enquiry path.
4. Site journey: three photographic chapters (structure, construction detail, neighbourhood), progress indicator, accessible chapter controls and a full-film link.
5. Neighbourhood: distinct location composition, area map link and honest exact-pin status.
6. Builder identity and supplied registration details.
7. Portfolio as a restrained list until real photographs/records are supplied.
8. Buyer questions, visit enquiry and preview disclosures.

## Motion specification

### Film hero

Muted, inline, looping 12-second project-film excerpt. Visible Pause/Play motion button. Sound is never automatic. Poster remains visible if playback is blocked, under reduced motion or data-saving preferences. Headline enters once in under one second. No loader preventing access to the enquiry action.

### Scroll-driven property chapters

One native sticky frame, three chapters, approximately two to three screens of ordinary scrolling. Progressively reveal the next full-width photograph using clip-path, with a small image settle. Update chapter text and indicator according to scroll progress. No custom wheel handling, forced scroll speed or scroll-jacking. Chapter buttons are accessible and provide direct navigation. Reduced motion stacks the images and copy as ordinary content.

### Other interaction

Plan selection swaps the actual SVG and description; small opacity/translation transition. Linked imagery has a restrained hover zoom. Menu opens quickly; buttons have immediate hover/press feedback. No pulsing dots, floating cards, custom cursor, meaningless counters or decorative WebGL.

## Assets and disclosure

Use only the existing project photographs and footage in the workspace. The source film is https://www.youtube.com/watch?v=sxxPk26cmBc. Recording date and current construction status need builder confirmation. Floor plans are explicitly authorised demo drawings, not approved project plans. Supplied registration identifiers and area figures remain subject to confirmation. Do not present other developers' photos as Purbasha's work.

## Acceptance checks

- Film time advances in a normal browser; pause stops it; play restarts it.
- Scroll progress visibly changes both chapter text and photographic reveal.
- Reduced-motion behaviour leaves every image and paragraph available.
- No horizontal page overflow at 390, 768, 1024, 1536 and 3840 CSS pixels.
- Keyboard-accessible menu, plan dialog, chapter controls, FAQ and enquiry link.
- No broken local assets; all demo labels visible.
- Normal reading text and action labels pass 4.5:1 contrast.
- Real motion is demonstrated by browser state checks, not inferred from the presence of animation code.

This direction synthesises the references; it does not reproduce any reference site's layout or assets. Visual quality is assessed separately from readiness to accept real property bookings.

## Verification, 21 November 2026

- Browser-confirmed muted hero playback, changing playback time and working pause control.
- Browser-confirmed chapter progress at 0.5000 and 0.9498, with changing text and clip-path reveals.
- Emulated reduced motion: background film paused, animated journey hidden and all static chapters available.
- No horizontal page overflow at 390, 768, 1024, 1536 and 3840 CSS pixels.
- JavaScript syntax checks passed; no missing local file references, duplicate IDs or broken section anchors found.
- Exact project pin and approved floor plans remain pending; demo disclosure is retained.

