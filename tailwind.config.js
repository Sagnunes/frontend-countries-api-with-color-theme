/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'selector',
  theme: {
    screens:{
      sm:'375px',
      md:'1440px',
      lg:'1560px'
    },
    extend: {
      fontFamily:{
        'nunito':['Nunito Sans', 'sans-serif']
      },
      colors: {
        'dark-blue': 'hsl(209,23%,22%,100%)',
        'dark-mode-background':'hsl(207,26%,17%,100%)',
        'light-mode-very-dark-blue': 'hsl(200,15%,8%,100%)',
      }
    }
  },
  plugins: []
}