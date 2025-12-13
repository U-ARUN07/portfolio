/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'accent-1': '#9333ea', // Purple
        'accent-2': '#0891b2', // Cyan
        'background-color': '#030409',
        'glass-bg': 'rgba(10, 12, 28, 0.6)',
        'glass-border': 'rgba(255, 255, 255, 0.07)',
        'text-primary': '#E6F1FF',
        'text-secondary': '#A1A8B3',
      },
      animation: {
        'border-glow': 'border-glow 4s ease-in-out infinite',
        'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
        'text-glow': 'text-glow 4s ease-in-out infinite',
      },
      keyframes: {
        'border-glow': {
          '0%, 100%': { boxShadow: '0 0 10px -5px #9333ea, 0 0 20px -10px #0891b2' },
          '50%': { boxShadow: '0 0 10px -5px #0891b2, 0 0 20px -10px #9333ea' },
        },
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 4px rgba(8, 145, 178, 0.5), 0 0 8px rgba(147, 51, 234, 0.3)' },
          '50%': { textShadow: '0 0 4px rgba(147, 51, 234, 0.5), 0 0 8px rgba(8, 145, 178, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
