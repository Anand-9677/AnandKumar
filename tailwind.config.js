/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        blob:{
          '0%': {transfrom: 'scale(1)'},
          '33%': {transfrom: 'scale(1.2)'},
          '66%': {transfrom: 'scale(0.8)'},
          '100%': {transfrom: 'scale(1)'},
        }
      },
      animation:{
        blob: 'blob 10s infinite'
      },
      backgroundImage:{
        'skills-gradient': 'linear-gradient(38.73deg, rgba(0, 102, 255, 0.15) 0%, rgba(0, 102, 255, 0) 50%), linear-gradient(141.27deg, rgba(0, 102, 255, 0) 50%, rgba(0, 102, 255, 0.15) 100%);'
      }
    },
  },
  plugins: [],
}

