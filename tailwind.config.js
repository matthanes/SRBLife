const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#003D7E', //dark blue
        secondary: '#3f4b57', //charcoal
        dark: '#2D2D2D',
      },
      fontFamily: {
        'rock-salt': '"Rock Salt", cursive',
        headings: '"Roboto", sans-serif',
        bodytext: '"Poppins", sans-serif',
      },

      backgroundImage: (theme) => ({
        map: "url('../public/img/missions.jpg')",
        church: "url('../public/img/church.jpg')",
      }),
    },
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    minHeight: {
      0: '0',
      '1/4': '25vh',
      '1/3': '33vh',
      '1/2': '50vh',
      '3/4': '75vh',
      full: '100vh',
      screen: 'calc(100vh - 60px)',
      'screen-foot': 'calc(100vh - 192px)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
