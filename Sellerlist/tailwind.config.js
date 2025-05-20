/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '2.4rem',
      },
    },
    fontFamily: {
      'jaques': ["Jacques Francois Shadow", "serif"],
      'itim'  : ["Itim", "cursive"],
      'kaushan': ["Kaushan Script", "cursive"],
    },
  },
  plugins: [],
}