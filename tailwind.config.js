/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        card1: '#FFF7E0', // YOGA
        card2: '#E6FBF4', // BLOG
        card3: '#FFFCE5', // SUPPLEMENT
      },
      fontFamily: {
        body: ['"Noto Sans JP"', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
