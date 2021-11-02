module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        bikeItem: '8.125rem 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
