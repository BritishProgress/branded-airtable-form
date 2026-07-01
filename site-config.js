// ============================================================
// EVENT CONFIGURATION
// Edit this file to update the event — do not edit index.html
// ============================================================

var SITE_CONFIG = {

  // Event title — used in the page tab, meta description, and hero heading
  HEADING: 'Fast Grants Programme',
  SUBHEADING: 'Call for Proposals',

  // Form to display: 'tally' or 'airtable'
  // Note: the custom success message only works with Tally.
  // Airtable does not send a submission event on the free plan.
  ACTIVE_FORM: 'airtable',

  FORM_URLS: {
    tally:    'https://tally.so/r/9qdrRE',
    airtable: 'https://airtable.com/embed/appINLR4clVxEpwol/paghaTBtFhRnV8NIW/form'
  },

    // Set to false to hide the form embed entirely (e.g. before registration opens)
  SHOW_EMBED: true,

  // Set to false to hide the large decorative images on the far right of the hero
  SHOW_RIGHT_BG: false,

  // Event scenes — each has its own colour scheme, card image, and far-right background image
  // The hero cycles through all three automatically
  // Available images: turbine.webp, pills.webp, plane.webp,
  //                   networking-outside.png, presentation.png, ditchley-park.png
  SITE_SCENES: [
    {
      leftImage:    './images/fast-grants.png',
      leftImageAlt: 'Fast Grants',
      rightImage:   './images/turbine.webp',
      rightImageAlt: 'Wind turbine',
      bgColor:  '#0A4938',
      accent:   '#3a8d5d'
    },
    {
      leftImage:    './images/fast-grants.png',
      leftImageAlt: 'Fast Grants',
      rightImage:   './images/plane.webp',
      rightImageAlt: 'Aeroplane',
      bgColor:  '#083D77',
      accent:   '#298EF9'
    },
    {
      leftImage:    './images/fast-grants.png',
      leftImageAlt: 'Fast Grants',
      rightImage:   './images/pills.webp',
      rightImageAlt: 'Medicine',
      bgColor:  '#a62241',
      accent:   '#D4354B'
    }
  ],

  // Speed of the hero scene transitions in milliseconds (default: 5000 = 5 seconds)
  TRANSITION_INTERVAL: 4000,

  // Hero heading font size — adjust each independently
  HEADING_FONT_SIZE_DESKTOP: '42px',  // screens wider than 1024px
  HEADING_FONT_SIZE_TABLET:  '25px',  // screens 769px – 1024px
  HEADING_FONT_SIZE_MOBILE:  '22px'   // screens 768px and below

};
