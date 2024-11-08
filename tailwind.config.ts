import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pink: {
          600: "#F72585",
        },
        purple: {
          600: "#7209B7",
          700: "#560BAD",
          800: "#3A0CA3",
        },
        indigo: {
          600: "#4361EE",
        },
        blue: {
          600: "#4895EF",
        },
        cyan: {
          400: "#4CC9F0",
        },
      },
    },
  },
  plugins: [],
};

export default config;
