/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-dark': "#0f0f0f",
        'glass-white': 'rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}