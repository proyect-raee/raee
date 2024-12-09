import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-100': '#FFF0E6',
        'primary-200': '#FED1B4',
        'primary-300': '#FDB282',
        'primary-400': '#FC944F',
        'primary-500': '#F76404',
        'primary-600': '#E25B04',
        'primary-700': '#B04703',
        'primary-800': '#B04703',
        'primary-900': '#4B1E01',
      },
      fontFamily: {
        section: ['var(--font-section)'],
      },
    },
  },
  plugins: [require('tailwindcss-react-aria-components')],
};
export default config;
