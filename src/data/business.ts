// Single source of truth for business details shown across the site.
export const business = {
  name: 'Liverpool Accommodation Specialists Ltd',
  shortName: 'Liverpool Accommodation Specialists',
  email: 'liverpoolaccommodationspecial@gmail.com',
  phoneDisplay: '07793 812564',
  phoneHref: 'tel:+447793812564',
  region: 'Liverpool & the North West',
}

// Day index follows JS Date#getDay (0 = Sunday).
export const openingHours = [
  { day: 'Monday', index: 1, open: '08:30', close: '18:00' },
  { day: 'Tuesday', index: 2, open: '08:30', close: '18:00' },
  { day: 'Wednesday', index: 3, open: '08:30', close: '18:00' },
  { day: 'Thursday', index: 4, open: '08:30', close: '18:00' },
  { day: 'Friday', index: 5, open: '08:30', close: '18:00' },
  { day: 'Saturday', index: 6, open: '08:30', close: '18:00' },
  { day: 'Sunday', index: 0, open: null, close: null },
] as const

export const areas = [
  'Liverpool City Centre',
  'Wirral',
  'Sefton & Southport',
  'Knowsley',
  'St Helens',
  'Halton & Widnes',
  'Warrington',
  'Wigan',
  'Greater Manchester',
  'Chester',
  'Preston & Lancashire',
  'Ormskirk & West Lancs',
]
