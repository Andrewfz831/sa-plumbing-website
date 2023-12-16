/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#01284c',
      },
      fontFamily: {
        newFont: ['Montserrat'],
        titleFont: ['Reem Kufi Fun']
      }
    },
  },
  plugins: [],
}

