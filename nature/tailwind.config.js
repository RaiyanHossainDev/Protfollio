/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textColor' : '#161C1E',
        'brandColor': "#257251",
        'sekendary' : "#6F747B",
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
      'lora'   : ["Lora", "serif"] ,
      'monster': ["Montserrat", "serif"],
      'inter'  : ["Inter", "serif"],
      'chivo'  : ["Chivo", "serif"],
    },
  },
  plugins: [],
}