/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'doki-black': '#000000',
        'doki-red': '#FF2D2D',
        'doki-grey': '#F2F2F2',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        fadeInDelayed: 'fadeIn 0.8s ease-out 0.4s forwards',
      },
    },
  },
  plugins: [],
}