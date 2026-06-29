/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': '#FFFFFF',
        'bg-cream': '#F9F8F3',
        'text-primary': '#161616',
        'text-muted': '#A1A1A1',
        'accent-teal': '#2C7672',
        'accent-lavender': '#9B7CC4',
        'accent-mint': '#7A9E2E',
        'border-default': '#E5E3DC',
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Switzer"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
