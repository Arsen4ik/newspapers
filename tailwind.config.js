/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000",
        "white": "#FFF",
        "dark-gray": "#2D2E2F",
        "gray": "#6C6E70",
        "gray-secondary": "#9C9EA0",
        "light-gray": "#CACCCE",
        "red": "#C34949",
      }
    },
  },
  plugins: [],
}