/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Slate / Denim Blues from reference
        primary: {
          DEFAULT: '#385273', // Main card & heading blue
          dark: '#273C55',    // High-contrast deep blue
          light: '#4A6B99',   // Midtone slate blue
          soft: '#E3ECF6',    // Subtle blue tint for chips
          border: '#B3C7DC',  // Border blue
        },
        // Warm Pastel Cream / Sand / Beige palette
        beige: {
          light: '#FCFBF7',   // Clean warm off-white card
          DEFAULT: '#F6F4EE', // Soothing global pastel cream canvas
          warm: '#EFECE3',    // Inset container warm beige
          deep: '#DDD6C8',    // Borders and subtle dividers
        },
        // High-contrast editorial typography
        dark: {
          DEFAULT: '#1B2533', // Deep navy charcoal for primary text
          muted: '#4A5568',   // Secondary text
          subtle: '#718096',  // Meta captions
        },
        // Accents
        accent: {
          gold: '#D99B26',    // Warm gold/amber accent from reference
          goldLight: '#FBEED0',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        serif: ['"Libre Baskerville"', 'serif'],
      },
      boxShadow: {
        'bento': '0 4px 20px -2px rgba(27, 37, 51, 0.06), 0 2px 6px -1px rgba(27, 37, 51, 0.04)',
        'bento-hover': '0 12px 28px -4px rgba(27, 37, 51, 0.12), 0 4px 10px -2px rgba(27, 37, 51, 0.06)',
        'bento-solid': '4px 4px 0px #1B2533',
      }
    },
  },
  plugins: [],
}
