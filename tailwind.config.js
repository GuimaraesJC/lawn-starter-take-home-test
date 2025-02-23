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
            },
            boxShadow: ({ theme }) => ({
              'header': `0 2px 0 0 ${theme('colors.gainsboro')}`,
              'warm-grey': `0 1px 2px 0 ${theme('colors.warm-grey')}`,
              'inset-warm-grey': `inset 0 1px 3px 0 ${theme('colors.warm-grey')}`,
            }),
        },
    },
    plugins: [],
};
