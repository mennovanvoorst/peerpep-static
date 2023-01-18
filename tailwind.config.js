/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundImage: {
        'gradient-blue-green':
          'linear-gradient(150deg, #2AB6E0 0%, #4FBB84 64%)',
        'gradient-red-pink':
          'linear-gradient(150deg, #DF2027 0%, #FF00BE 57.53%)'
      },
      colors: {
        black: '#181D1F',
        pink: {
          900: '#990072',
          800: '#b30085',
          700: '#cc0098',
          600: '#e600ab',
          500: '#FF00BE',
          400: '#ff1ac5',
          300: '#ff33cb',
          200: '#ff4dd2',
          100: '#ff66d8'
        },
        gray: {
          900: '#49484b',
          800: '#616064',
          700: '#79787d',
          600: '#919095',
          400: '#a9a8ae',
          300: '#c2c0c7',
          200: '#dad8e0',
          100: '#F2F0F9'
        },
        green: '#4FBB84',
        backgroundPurple: '#F2F0F9'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
