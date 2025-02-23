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
              'gainsboro' : '#dadada'
            },
            boxShadow: ({ theme }) => ({
              'header': `0 2px 0 0 ${theme('colors.gainsboro')}`,
            }),
        },
    },
    plugins: [],
};
