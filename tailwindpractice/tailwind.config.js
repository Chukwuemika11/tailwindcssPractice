/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      // Define custom colors
      colors: {
        customBlue: '#3498db',
        customGreen: '#2ecc71',
        customRed: '#e74c3c',
      },
      // Define custom spacing
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      // Define custom borderRadius
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
