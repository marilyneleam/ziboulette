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
                primary: {
                    100: "#FFFFFF",
                    200: "#EAE4F5",
                    300: "#C1AFE2",
                    400: "#AC94D8",
                    500: "#977ACE",
                    600: "#825FC4",
                    700: "#6E44BB",
                    800: "#6E44BB",
                    900: "#592AB1",
					DEFAULT: "#440FA7",
                },
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
