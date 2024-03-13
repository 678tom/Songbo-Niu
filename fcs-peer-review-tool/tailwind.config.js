import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            screens: {
                '2xs': '416px',    // 2x extra small screens
                'xs': '475px',     // Extra small screens
                'sm': '640px',     // Small screens
                'md': '768px',     // Medium screens
                'mdlg': '800px',   // Medium large screens
                'lg': '1024px',    // Large screens
                'xl': '1280px',    // Extra large screens
                '2xl': '1536px',   // 2x large screens
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
