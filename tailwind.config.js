/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      colors: {
        space: '#050918',
        'space-alt': '#080D24',
        'accent-blue': '#4F6EF7',
        'accent-sky': '#38BDF8',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
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
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
