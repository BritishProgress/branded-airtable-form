# branded-airtable-form

A generic, branded landing page that embeds an Airtable (or Tally) form for the Centre for British Progress. It was originally built for the Political Economy Retreat, and is currently used for the Fast Grants programme.

The page is a single static `index.html` (a Next.js export) with an animated, themed hero and an embedded form. All event-specific content — heading, subheading, form URL, colours, and hero images — is driven by [`site-config.js`](./site-config.js), so repurposing the site for a new event means editing that one file rather than touching the HTML.

## Configuring for a new event

Edit `site-config.js`. Key options:

- `HEADING` / `SUBHEADING` — the hero title text; also used in the page `<title>` and meta description
- `ACTIVE_FORM` — `'airtable'` or `'tally'` (the custom success message only works with Tally)
- `FORM_URLS` — the embed URLs for each form type
- `SHOW_EMBED` — set to `false` to hide the form (e.g. before registration opens)
- `SHOW_RIGHT_BG` — toggle the large decorative background images
- `SITE_SCENES` — the hero scenes (colours + images) the page cycles through
- `TRANSITION_INTERVAL` — hero scene transition speed in milliseconds
- `HEADING_FONT_SIZE_*` — responsive hero font sizes

Do not edit `index.html` for content changes — set everything in `site-config.js`.
