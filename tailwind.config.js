/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      mainFont: ['mainFont'],
      boldFont: ['boldFont']
    },
    extend: {
      colors: {
        'lightCardBg': 'hsl(227, 47%, 96%)',
        'fbBorder': 'hsl(208, 92%, 53%)',
        'twitterBorder': 'hsl(203, 89%, 53%)',
        'limeGreen': 'hsl(163, 72%, 41%)',
        'igBorder':'hsl(329, 70%, 58%)',
        'ytBorder':'hsl(348, 97%, 39%)',
        'redText':'hsl(356, 69%, 56%)',
        'darkModeBg': 'hsl(230, 17%, 14%)',
        'darkCardBg': 'hsl(228, 28%, 20%)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

