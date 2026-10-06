# NEXT School Design System

India's 1st Big Picture Learning school — an IB World School (PYP, MYP, DP, CP continuum) in Mulund West, Mumbai, run by the Ramniklal Zaverbhai Shah Trust (supported by the Marathon Group). NEXT also operates microschools in Lower Parel, Mumbai and South Goa. The school personalises each student's learning around passions and interests through authentic, real-world projects, with the IB framework alongside.

**Surfaces represented:** the marketing website, www.nextschool.org (screenshots provided in `uploads/`).

## Sources
- `uploads/Opera Snapshot_*.png` — three screenshots of www.nextschool.org (hero, schools/microschools, Big Picture section).
- `uploads/next-colors.pdf` — official color codes (6 colors, CMYK + hex).
- `assets/next-logo-long.png` — full lockup: "R. Z. Shah Trust's NEXT SCHOOL", black on transparent.
- `assets/next-logo-box.png` — square 2×2 glyph mark (n / ≡ / x / +), black on transparent.
- Public website copy (nextschool.org) for tone research.

No codebase or Figma was provided; the UI kit is recreated from screenshots + live site copy. No font binaries were provided — **Montserrat (Google Fonts) is a substitution**; see Caveats.

## CONTENT FUNDAMENTALS

**Voice: a confident education revolutionary.** The brand speaks like a movement, not an institution. "WELCOME TO THE REVOLUTION", "Join the revolution", "join the movement". It challenges the status quo ("Big Picture is the 'iPhone' of education to the 'walkman' of old").

- **Person:** "We" for the school, "your child" / "you" for parents. Warm-direct: "Share your details with us. Someone from our team will be in touch with you soon… We look forward to meeting you."
- **Casing:** Headings, nav items, and buttons are ALWAYS UPPERCASE. Body copy is sentence case, plainspoken, jargon-light.
- **Tone:** aspirational but concrete — pairs big claims with proof (Gates Foundation grants, Clayton Christensen quotes, IB accreditation). Authority is borrowed through third-party testimonials with name + credential ("CLAYTON CHRISTENSEN — Harvard Business School Professor and Author of 'Disrupting Class'").
- **Key vocabulary:** learners (not just students), passions & interests, authentic real-world projects, student-driven (vs teacher-driven), personalise (British spelling), engaging / rewarding / relevant.
- **Emoji:** never used.
- **CTAs:** short imperative uppercase — "VISIT WEBSITE", "LEARN MORE ABOUT BIG PICTURE", "APPLY".

## VISUAL FOUNDATIONS

**Color.** White pages punctuated by full-bleed flat color bands. Six official colors (see `tokens/colors.css`): yellow #FDB913, cyan #00B8D3, purple #74489D, green #8DC63F, red #EF4957, charcoal #2D3236. Charcoal is the workhorse: dark hero/footer sections, buttons, headings. The five brights are used as **flat, saturated, full-bleed section backgrounds** (green band → cyan band stacked directly, no gradients ever) and as small accent glyphs (colored map pins). White text/graphics sit on the color bands.

**Type.** One family (geometric sans; Montserrat substitution). Headings: bold (700–800), uppercase, slight tracking, charcoal on light / white on dark. Nav: 14px semibold uppercase with wide tracking. Body: 16px regular, gray #54595F, generous 1.7 line-height, often center-aligned in marketing sections.

**Layout.** Centered, single-column marketing sections with generous vertical padding (~96px). Content max-width ~1140px. Thin hairline dividers between subsections. Sticky white header with logo left, nav right.

**Buttons.** Solid charcoal **pill** (fully rounded), white uppercase label, ~14px, generous horizontal padding. On color bands: white pill with charcoal label. Hover: slight darken/lighten of background, no transforms.

**Imagery.** Real photography of students and educators — warm, candid, documentary-style. Video embeds (YouTube) are central to the homepage. Testimonial portraits are circular and black & white. No illustrations, no stock-art vibes.

**Corners & shadows.** Flat design: square corners on sections/cards/images; the ONLY rounded things are pill buttons and circular portraits/pins. Shadows essentially absent — soft shadow only on floating UI (sticky header, back-to-top).

**Motion.** Subtle: fades and gentle carousel slides, standard easing, no bounces. Hover states change color/opacity only.

**Iconography** — see ICONOGRAPHY below.

## ICONOGRAPHY

- The brand's own mark is typographic: the NEXT glyphs (n, ≡, x, +) double as a graphic device — `assets/next-logo-box.png` is the 2×2 tile version.
- The site uses simple flat glyph icons sparingly: colored map pins (location markers in brand colors), a search magnifier, circular chevron arrows for carousels, back-to-top chevron. No icon font detected; no emoji; no decorative SVG systems.
- **In this system:** use [Lucide](https://lucide.dev) from CDN as the substitute glyph set (thin-to-medium stroke matches the site's minimal glyphs) — FLAGGED as a substitution, since the site's own icon assets couldn't be extracted from screenshots. Tint icons with brand colors; keep them simple and geometric.
- Diagram device: white circles containing uppercase labels connected by arrows on color bands (e.g. TEACHER DRIVEN → STUDENT DRIVEN).

## Index

- `styles.css` — global entry; imports all tokens below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `assets/` — `next-logo-long.png`, `next-logo-box.png`.
- `guidelines/` — specimen cards shown in the Design System tab.
- `components/core/` — Button, SectionTitle, Badge, LocationPin, Testimonial, Accordion.
- `components/forms/` — Input, Select, Checkbox.
- `components/navigation/` — Navbar, SiteFooter.
- `ui_kits/website/` — homepage recreation of nextschool.org (`index.html` + screens).
- `SKILL.md` — agent skill entry point.

### Intentional additions
- No component library existed in the sources (screenshots only), so a standard marketing-site set was authored from observed patterns.
- Lucide icons via CDN — substitution for unextractable site glyphs.

## Caveats
- **Fonts:** original binaries not provided; Montserrat (Google Fonts) is the nearest match to the site's geometric sans. Provide real font files to replace `tokens/fonts.css` with `@font-face` rules.
- Logo provided in black only; on dark/color bands the site uses a white version — CSS `filter: invert(1)` is used as a stand-in. Provide a white logo file if available.
- UI kit recreated from screenshots + public copy (no codebase/Figma), so spacing/sizes are close approximations.

## Website patterns (2026 redesign)

Added with the nextschool.org redesign. Full notes are in `_src/README.md` in the website project.

- **Type:** titles use Gotham Rounded and body uses Proxima Nova, per the client. Nunito and Mulish (Google Fonts) stand in until licensed files arrive.
- **Photography:** use real campus photography, full-bleed. Photo heroes get a slow 12s push-in under a strong charcoal gradient, with all text in full white. Galleries use column masonry so there are no gaps. A campus without photos gets a flat brand-colour hero with the 2×2 glyph at 13% opacity.
- **Motion:** headline lines wipe up on load, and sections rise in once on scroll. There are no decorative loops: no growing underline, progress bar, spinners or marquee. Honour `prefers-reduced-motion`.
- **Logo:** transparent cut-outs in black and white (`assets/web/next-logo-*-cut*.png` in the website project) replace `filter: invert(1)`.
- **Video:** click-to-play thumbnail cards with a yellow play disc, opening a lightbox.
