module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff8322',
        secondary: '#209848',
        'secondary-light': '#2db354',
        'green-light': '#3dc862',
        light: '#f8f9fa',
        'download-blue': '#3dbcf9',
        'download-orange': '#ff8322',
      },
      fontFamily: {
        'spline-sans': ['Spline Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-once': 'pulse 350ms ease-in-out 1',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
