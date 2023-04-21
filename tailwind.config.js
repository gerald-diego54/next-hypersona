/** @type {import("tailwindcss").Config} */
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            padding: "2rem",
        },
        extend: {
            colors: {
                "floppy-disk": "#0F0246",
                "minsk": "#433564",
                "aqua": "#0AF8FF",
                "spec-purple": "#B800F0",
            },
            backgroundColor: {
                "aqua": "#0AF8FF",
            },
            animation: {
                gradating: "gradient 8s ease infinite",
            },
            keyframes: {
                gradient: {
                    "0%": { "background-position": "0% 50%" },
                    "50%": { "background-position": "100% 50%" },
                    "100%": { "background-position": "0% 50%" },
                }
            }
        },
        fontFamily: {
            "azeret-mono": ["'Azeret Mono'", "monospace"],
            "inter": ["Inter", "sans-serif"]
        }
    },

    plugins: [],
};
