/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'primary': '#BB63FF',
          'navy': '#112C70',
          'cyber': '#5B58EB',
          'tropic': '#56E1E9',
          'merope': '#OA2353',
      },
      rotate: {
        '17': '182deg',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      'rbrgl': ['Roboto-Regular', 'sans-serif'],
      'rbmed': ['Roboto-Medium', 'sans-serif'],
      'rbbld': ['Roboto-Bold', 'sans-serif'],
      'rbc': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

