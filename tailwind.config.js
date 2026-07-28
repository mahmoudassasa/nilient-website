/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#EBF6FB',
          100: '#C8E8F5',
          200: '#91D0EB',
          300: '#5AB8E0',
          400: '#2E9FD0',
          500: '#1A7EA6',
          600: '#155F80',
          700: '#0F4560',
          800: '#092E40',
          900: '#041820',
        },
        copper: {
          50: '#FDF5EC',
          100: '#F7E3C8',
          200: '#EEC590',
          300: '#E5A758',
          400: '#D98A30',
          500: '#C97B35',
          600: '#A5622A',
          700: '#7E4A1F',
          800: '#573214',
          900: '#30190A',
        },
        navy: {
          50: '#E8EDF2',
          100: '#C5D0DC',
          200: '#8EA3B9',
          300: '#587696',
          400: '#2E4F6E',
          500: '#0D1E2F',
          600: '#0A1826',
          700: '#07121C',
          800: '#040C13',
          900: '#020609',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient-x': 'gradientX 6s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
