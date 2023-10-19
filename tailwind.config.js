/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      s: '320px',
      '1s': '360px',
      '2s': '480px',
      sm: '640px',
      md: '768px',
      '1md': '976px',
      lg: '1024px',
      xl: '1280px',
      '1xl': '1366px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
      '5xl': '2048px',
      '6xl': '2560px',
      '7xl': '3840px',
    },
    extend: {},
  },
  plugins: [],
}