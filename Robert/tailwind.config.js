/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'def' : '#E2DCC8' ,
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '2rem',
      },
    },
    fontFamily: {
      'bee' : ["ABeeZee", 'sans-serif'],
    }
  },
  plugins: [],
}