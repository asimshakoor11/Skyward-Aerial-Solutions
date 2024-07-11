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
        'primarycolor': "#002038",
        'primarycolorhover': "#667988",
      },
    },
  },
  plugins: [],
}