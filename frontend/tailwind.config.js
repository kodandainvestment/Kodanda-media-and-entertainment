/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#060d2e",
          800: "#0a1245",
          700: "#0d1b6e",
          600: "#112280",
        },
        cyan: {
          brand: "#00c8ff",
          dark: "#0066ff",
        },
        primaryRed: '#C91111',
      },
    },
  },
  plugins: [],
}

