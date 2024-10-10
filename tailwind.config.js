/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'blue': '#45A6FF',
        'gray': '#6D6D6D',
        'green': '#00AC40',
        'lightgray': '#EDEDED',
        'orange': '#FF6600',
        'red': '#C53434',
        'white': '#FFFFFF',
      }
    },
  },
  plugins: [],
}
