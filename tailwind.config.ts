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
        // Primary color palette
        primary: {
          DEFAULT: "#003049", // Dark blue for primary elements
          light: "#335a77", // Lighter blue for less contrast-heavy elements
          dark: "#001d2b", // Even darker shade for dark mode or accents
        },
        secondary: {
          DEFAULT: "#d62828", // Bright red for actions or highlights
          light: "#f77f00", // Deep orange for secondary interactive elements
          lighter: "#fcbf49", // Light orange-yellow for highlights
        },
        neutral: {
          DEFAULT: "#eae2b7", // Light beige for background in light mode
          dark: "#f8f3dc", // Slightly lighter beige for softer areas
          gray: "#7c7c7c", // Neutral gray for text, borders, and backgrounds
        },
        background: {
          light: "#eae2b7", // Light beige for backgrounds in light mode
          dark: "#003049", // Dark blue for backgrounds in dark mode
        },
        text: {
          primary: "#003049", // Dark blue for headings and important text
          secondary: "#7c7c7c", // Gray for body text or subtler elements
          highlight: "#d62828", // Red for important or accent text
        },
        border: {
          light: "#eae2b7", // Light beige for subtle borders in light mode
          dark: "#335a77", // Lighter blue for dark mode borders
          accent: "#d62828", // Red for accentuated borders
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Keeping the existing font family
      },
    },
  },
  plugins: [],
};

export default config;
