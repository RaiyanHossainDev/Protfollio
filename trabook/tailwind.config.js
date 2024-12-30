/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brandColor':'#FA7436',
        'text':'#222222'
      },
    },
    container:{
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '1rem',
      },
    },
    fontFamily:{
      'pop':["Poppins", "serif"],
      'vol':["Volkhov", "serif"]
    },
  },
  plugins: [],
}