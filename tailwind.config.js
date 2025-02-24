import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    "./resources/js/**/*.{js,ts,jsx,tsx}",
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gainsboro': '#dadada',
        'warm-grey': '#848484bf',
        'green-teal': '#0ab463',
        'pinkish-grey': '#c4c4c4',
        'emerald': '#089954'
      },
      boxShadow: ({ theme }) => ({
        'header': `0 2px 0 0 ${theme('colors.gainsboro')}`,
        'warm-grey': `0 1px 2px 0 ${theme('colors.warm-grey')}`,
        'inset-warm-grey': `inset 0 1px 3px 0 ${theme('colors.warm-grey')}`,
      }),
      spacing: {
        'sw-10': '0.625rem',
        'sw-20': '1.25rem',
        'sw-30': '1.875rem',
        'sw-40': '2.5rem',
        'sw-50': '3.125rem',
        'sw-60': '3.75rem',
        'sw-70': '4.375rem',
        'sw-80': '5rem',
        'sw-90': '5.625rem',
        'sw-100': '6.25rem',
      }
    },
  },
  plugins: [],
};
