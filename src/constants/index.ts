// Navigation items for folder-style navigation
export const NAV_ITEMS = [
  { label: 'films', href: '/films' },
  { label: 'experiments', href: '/experiments' },
  { label: 'reads', href: '/reads' },
] as const

// Background images per route
export const BACKGROUNDS = {
  home: '/images/bg-main.png',
  films: '/images/bg-films.png',
  experiments: '/images/bg-experiments.png',
  reads: '/images/bg-reads.png',
} as const


