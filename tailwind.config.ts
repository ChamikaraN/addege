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
        primary: {
          DEFAULT: "#16A085", // The green shade used for buttons and highlights
          dark: "#0F766E", // Darker version of primary for dark mode
        },
        secondary: {
          DEFAULT: "#DAF7A6", // Light greenish-blue
          dark: "#A0C4B0", // Muted secondary for dark mode
        },
        background: {
          light: "#FFFFFF", // White for background in light mode
          dark: "#1C1C1C", // Darker background for dark mode
        },
        text: {
          DEFAULT: "#333333", // Dark text for headings and paragraphs
          light: "#A5A5A5", // Muted gray for lighter text in dark mode
        },
        border: {
          light: "#F3F4F6", // Light gray for borders and section dividers
          dark: "#374151", // Darker borders in dark mode
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Matches modern fonts used in IT-related sites
      },
    },
  },
  plugins: [],
};

export default config;
