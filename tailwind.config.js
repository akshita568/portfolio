export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#385273',
          dark: '#273C55',
          light: '#4A6B99',
          soft: '#E3ECF6',
          border: '#B3C7DC',
        },
        beige: {
          light: '#FCFBF7',
          DEFAULT: '#F6F4EE',
          warm: '#EFECE3',
          deep: '#DDD6C8',
        },
        dark: {
          DEFAULT: '#1B2533',
          muted: '#4A5568',
          subtle: '#718096',
        },
        accent: {
          gold: '#D99B26',
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
