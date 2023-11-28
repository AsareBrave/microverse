/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'charcole': '#2E2E2E',
        'neutral': '#344563',
        'primary': '#6070FF',
        'text-dark': '#172B4D',
        'text-light': '#344563',
        'text-text-lighter': '#7A869A',
        'tag-blue': '#EBEBFF',
        'accordion-grey': '#F7F7F9'
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}

