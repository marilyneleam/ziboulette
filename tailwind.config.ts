import type { Config } from "tailwindcss";

const config: Config = {
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
                primary: "#440FA7",
                blue: "#002CDB",
                red: "#9D1021",
                green: "#105B16",
				"zib-light-gray": "#fcfcfc",
            },
        },
    },
    plugins: [],
};
export default config;
