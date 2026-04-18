/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'doki-black': '#111111',
        'doki-red': '#FF2D2D',
        'doki-grey': '#F5F5F5',
      },
      fontFamily: {
        'display': ["'Bebas Neue'", 'Impact', 'sans-serif'],
        'body': ["'Nunito'", 'sans-serif'],
        'sans': ["'Nunito'", 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-up-delayed': 'fadeUp 0.7s ease-out 0.3s forwards',
        'fade-up-delayed-2': 'fadeUp 0.7s ease-out 0.55s forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}