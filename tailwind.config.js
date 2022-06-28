/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", ],
    theme: {
        extend: {
            colors: {
                menuColor: '#168fde',
                menuText: '#bfcad0',
                background: '#f2f2f2',
                title: '#168fde',
                line: '#a7a7a7',
                ye: '#ffd76b',
                br: '#cb916c',
                re: '#f17575',
                gr: '#888888'


            },
            fontSize: {
                xxs: '11px'
            }
        },
    },
    plugins: [],
}