/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
                text: "var(--text)",
                background: "var(--bg)",
            },
            fontFamily: {
                poppins: ["poppins"],
            },
        },
    },
    plugins: [],
};
/* 





*/
