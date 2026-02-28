import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // pxlcorp color system
        'pxl-yellow': '#F0FF7B',
        'pxl-red': '#EF4562',
        'pxl-white': '#FFFFFF',
        'pxl-dark': '#0a0a0f',
        'pxl-navy': '#0d1117',
      },
      fontFamily: {
        'bytesized': ['Bytesized', 'sans-serif'],
        'jersey': ['Jersey 10', 'sans-serif'],
        'sans': ['var(--font-geist-sans)', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
