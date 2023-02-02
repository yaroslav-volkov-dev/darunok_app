/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'light-grey': '#FAFAFA',
      'grey': '#afaeae',
      'dark-grey': '#7a7979',
      'light-blue': '#e8eef5',
      'black': '#000000',
      'blue': '#4F46E5',
      'btn-secondary': '#E0E7FF',
      'btn-red': '#E54F46',
      'btn-transparent': 'transparent',
    }
  },
  plugins: [],
};
