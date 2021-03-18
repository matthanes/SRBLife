module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#003D7E", //dark blue
        secondary: "#3f4b57", //charcoal
      },
      fontFamily: {
        "rock-salt": '"Rock Salt", cursive',
        headings: '"Roboto", sans-serif',
        bodytext: '"Poppins", sans-serif',
      },

      backgroundImage: theme => ({
        'bible': "url('../img/Bible-Full-Width2.jpg')",
        'map': "url('../img/missions.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
