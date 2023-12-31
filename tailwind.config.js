/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Roboto', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['SFMono-Regular'],
      'sans-serif': ['Lato'],
    },
  },
  plugins: [],
};