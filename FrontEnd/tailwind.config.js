/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custommaxmd': { 'max': '768px' },
        
      },
      colors: {
        'bggray': '#F7F7F7',
        'bggrayhover': '#E8E8E8',
        'primarycolor': "#DC2626",
        'primarycolorhover': "#B91C1C",
      },
    },
  },
  plugins: [],
}