/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#594534',
        secondary: 'rgb(164, 151, 141)',
        light: {
          DEFAULT: 'rgb(215, 204, 196)',
          dark: 'rgb(200, 189, 179)',
        },
      },
    },
  },
  plugins: [],
};
