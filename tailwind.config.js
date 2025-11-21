/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        upi: {
          red: '#E42222',
          darkRed: '#B91C1C',
          deepRed: '#991B1B',
          yellow: '#FFC400',
          black: '#000000',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
        cardFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 20s infinite ease-in-out',
        'float-reverse': 'float 15s infinite ease-in-out reverse',
        cardFloat: 'cardFloat 6s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}