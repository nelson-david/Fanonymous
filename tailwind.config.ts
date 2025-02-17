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
        },
    },
    plugins: [],
} satisfies Config;
