import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071629',
          900: '#0B1F3A',
          800: '#123052',
          700: '#1D426A',
        },
        gold: {
          500: '#C9A227',
          400: '#E0BE52',
          300: '#F0D77B',
        },
        porcelain: '#F7F9FC',
        ink: '#1A2636',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(7, 22, 41, 0.14)',
        gold: '0 14px 34px rgba(201, 162, 39, 0.28)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at 20% 20%, rgba(201, 162, 39, 0.22), transparent 30%), linear-gradient(135deg, #071629 0%, #0B1F3A 56%, #123052 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
