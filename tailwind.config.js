/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#003366',      // Main brand blue from image
          light: '#3399FF',     // Accent blue from image
        },
        secondary: {
          white: '#ffffff',     // Clean white
          gray: '#f8fafc',      // Light gray for backgrounds
        },
        accent: {
          gold: '#eab308',      // Keep gold for highlights
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

