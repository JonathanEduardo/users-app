/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        'primary-color': 'rgb(75,54,33)',  // Green bmw
        'primary-color-lighter': 'rgb(155,135,119)',
        'secondary-color': 'rgb(246,242,231)', // blue bmw
        'secondary-color-lighter': 'rgb(255,255,255)',
        'tertiary-color': 'rgb(166,93,58)',  // es el primary
        'tertiary-color-lighter-100': 'rgb(217,169,129)',
        'tertiary-color-lighter-200': 'rgb(210,154,107)',
        'danger-color': '#E1000F',
        'danger-color-lighter': '#f13637',
        'warning-color': '#F6E67D',
        'warning-color-lighter': '#F6E67D',
      }
    },
  },
  plugins: [],
}

