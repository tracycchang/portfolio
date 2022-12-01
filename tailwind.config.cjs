/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter Tight, sans-serif'],
    },
    fontWeight: {
      'extra-light': 100,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      'extra-bold': 800,
      black: 1000,
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      "2xl": '1.563rem',
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem',
      "6xl": '70px'
    },
    extend: {
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(-15%)' },
          '50%': { transform: 'rotate(3deg) translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
