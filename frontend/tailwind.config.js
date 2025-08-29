/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, appetizing colors perfect for a restaurant website
        primary: {
          50: '#fef7f0',
          100: '#fdecd4',
          200: '#fbd5a8',
          300: '#f8b871',
          400: '#f59338',
          500: '#f2751a',
          600: '#e35a0f',
          700: '#bc4310',
          800: '#963514',
          900: '#7a2e14',
        },
        // Rich, warm accent colors
        accent: {
          50: '#fdf4f3',
          100: '#fbe8e6',
          200: '#f7d1cd',
          300: '#f0b0a8',
          400: '#e68578',
          500: '#d96b5c',
          600: '#c55547',
          700: '#a44439',
          800: '#873a32',
          900: '#71332d',
        },
        // Warm neutral tones
        warm: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        // Food-inspired colors
        food: {
          spice: '#d97706',      // Warm orange
          herb: '#059669',       // Fresh green
          cream: '#fef3c7',      // Light cream
          honey: '#f59e0b',      // Golden honey
          berry: '#dc2626',      // Rich red
          earth: '#92400e',      // Deep brown
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
} 
