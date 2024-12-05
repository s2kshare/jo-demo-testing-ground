import { lemonade } from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            flex: {
                2: '2 2 0%', // flex-grow: 2; flex-shrink: 2; flex-basis: 0%;
                4: '4 4 0%', // flex-grow: 4; flex-shrink: 4; flex-basis: 0%;
                8: '8 8 0%', // flex-grow: 4; flex-shrink: 4; flex-basis: 0%;
                12: '12 12 0%', // flex-grow: 4; flex-shrink: 4; flex-basis: 0%;
                16: '16 16 0%', // flex-grow: 4; flex-shrink: 4; flex-basis: 0%;
            },
        },
    },
    daisyui: {
        themes: [
            {
                lemonade: {
                    ...require('daisyui/src/theming/themes')['lemonade'],
                    primary: '#F39D68',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
