/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neon: {
          cyan: '#00f5ff',
          purple: '#bf5fff',
          pink: '#ff0080',
          green: '#00ff9f',
        },
        dark: {
          900: '#030712',
          800: '#0a0f1e',
          700: '#0f172a',
          600: '#1e293b',
          500: '#334155',
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
        'glitch': 'glitch 3s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #00f5ff, 0 0 20px #00f5ff, 0 0 40px #00f5ff' },
          '50%': { boxShadow: '0 0 20px #bf5fff, 0 0 60px #bf5fff, 0 0 100px #bf5fff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundSize: '200% 200%', backgroundPosition: 'left center' },
          '50%': { backgroundSize: '200% 200%', backgroundPosition: 'right center' },
        },
        glitch: {
          '0%, 100%': { clipPath: 'inset(0 0 0 0)', transform: 'translate(0)' },
          '20%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-3px, 3px)' },
          '40%': { clipPath: 'inset(60% 0 20% 0)', transform: 'translate(3px, -3px)' },
          '60%': { clipPath: 'inset(40% 0 40% 0)', transform: 'translate(-2px, 2px)' },
          '80%': { clipPath: 'inset(80% 0 5% 0)', transform: 'translate(2px, -1px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0, 245, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.05) 1px, transparent 1px)",
        'cyber-gradient': 'linear-gradient(135deg, #00f5ff 0%, #bf5fff 50%, #ff0080 100%)',
        'dark-gradient': 'linear-gradient(135deg, #030712 0%, #0a0f1e 50%, #0f172a 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
