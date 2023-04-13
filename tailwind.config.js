/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        colors: {
            background: {
                DEFAULT: '#191E29',
            },
            backgroundDark: {
                DEFAULT: '#0B0E14',
            },
            white: {
                DEFAULT: '#E1E8F5',
            },
            grayLight: {
                DEFAULT: '#6f6f6f',
            },
            darkGray: {
                DEFAULT: '#262626',
            },
            blue: {
                DEFAULT: '#3F66E1',
                100: '#71A0DE',
                200: '#668EDE',
                300: '#4269EB',
                400: '#3E63DE',
                500: '#3F66E1',
                600: '#3758C4',
                700: '#344A91',
                800: '#1A2A5E',
            },
        },
    },
    plugins: [],
};
