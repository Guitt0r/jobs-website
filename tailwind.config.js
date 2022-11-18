/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'main': 'Figtree , sans-serif'
            },
            textColor: {
                'title': '#3A4562',
                'desc': '#878D9D',
                'employ': '#55699E',
                'benefit': '#988B49'
            },
            backgroundColor: {
                'main-gray': '#F5F5F5',
                'darkGray': '#878D9D',
                'employ': '#a1b1db',
                'benefit': '#FFCF00',
                'backBtn': '#384564',
            },
            borderColor: {
                'employ': '#55699e',
                'benefit': '#FFCF00'
            },
            listStyleType: {
                'square': 'square'
            },
            margin: {
                'minus6': '-6rem'
            },
            width: {
                'fullScreen': '100vw',
            },
            height: {
                'fullScreen': '100vh'
            },
            animation: {
                'spinSlow': 'spin 4s linear infinite;'
            }
        },
    },
    plugins: [],
}
