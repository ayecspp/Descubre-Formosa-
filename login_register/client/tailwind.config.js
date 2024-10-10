/** @type {import('tailwindcss').Config} */
export default {
  content: [ 'index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primarycolor: "#F9A826",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
}

