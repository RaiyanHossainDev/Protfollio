/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend   : {
      colors: {
        'brandColor': '#c23434',
        'secendary' : '#1E1E1E',
      },
    },
    container: {
      center : true,
      padding: {
        DEFAULT: '1rem',
        sm     : '2rem',
        lg     : '4rem',
        xl     : '5rem',
        '2xl'  : '1rem',
      },
    },
    fontFamily: {
      'inter' : ["Inter", "sans-serif"],
      'cormo' : ["Cormorant Garamond", "serif"],
      'DM'    : ["DM Sans", "sans-serif"],
      'Oswald': ["Oswald", "serif"]
    },
  },
  plugins: [],
}