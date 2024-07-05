/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Julee", "sans-serif"],
        local: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}