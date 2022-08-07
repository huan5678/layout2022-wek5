const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{html,ejs,js}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Lato', ...fontFamily.sans],
      mono: ['Roboto Mono', ...fontFamily.mono],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#198754',
          light: '#e8f3ee',
          dark: '#13653f',
        },
        gray: {
          100: '#F8F9FA',
          400: '#CED4DA',
          600: '#6C757D',
          900: '#212529',
        },
        red: '#DC3545',
        backdrop: '#00000062',
      },
      fontSize: {
        xs: '.75rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
