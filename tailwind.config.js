/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-red': '#881836',
                'brand-gold': '#c1a16c',
                'brand-brown': '#68481b',
                'brand-beige': '#fcebc2',
                'brand-white': '#ffffff',
            }
        },
    },
    plugins: [],
}
