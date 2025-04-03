import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                cream: "#f5f3ef",
                blackshade: "#1e1e21",
                accentcolor: "#00bec9",
            },
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                rebond: ["ES Rebond Grotesque", "sans-serif"],
            },
            animation: {
                "swipe-in": "swipeIn 0.5s ease-out",
                "swipe-out": "swipeOut 0.5s ease-out",
            },
            keyframes: {
                swipeIn: {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                swipeOut: {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "100%": { transform: "translateX(-100%)", opacity: "0" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
