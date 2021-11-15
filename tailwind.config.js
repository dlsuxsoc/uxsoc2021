const plugin = require("tailwindcss/plugin");
module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        // colors: {
        //     green: "#41BC9C",
        //     gray: "#80858B",
        // },
        // fontSize: {
        //     body: "0.875rem",
        //     h1: "3rem",
        //     h2: "2rem",
        //     h3: "1.5rem",
        //     h4: "1.25rem",
        //     h5: "1rem",
        // },
    },
    variants: {
        extend: {},
    },
    // plugins: [
    //     plugin(({ addBase, theme }) => {
    //         addBase({
    //             h1: { fontSize: theme("fontSize.h1") },
    //             h2: { fontSize: theme("fontSize.h2") },
    //             h3: { fontSize: theme("fontSize.h3") },
    //             h4: { fontSize: theme("fontSize.h4") },
    //             h5: { fontSize: theme("fontSize.h5") },
    //         });
    //     }),
    // ],
};
