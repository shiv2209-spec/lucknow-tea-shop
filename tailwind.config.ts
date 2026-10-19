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
        mars: {
          50: "#FFF5F2",
          100: "#FFE6DF",
          200: "#FFC9BC",
          300: "#FFA38F",
          400: "#F87154",
          500: "#E2583E",
          600: "#C1440E",
          700: "#9A320A",
          800: "#772608",
          900: "#501A05",
          950: "#2B0C02",
        },
        kulhad: {
          50: "#FAF3EF",
          100: "#F3E3D9",
          200: "#E6C1AD",
          400: "#C86D51",
          500: "#B3541E",
          600: "#984013",
          700: "#7C320E",
          800: "#5D2409",
          900: "#3D1604",
        },
        zafran: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        nawabi: {
          50: "#F1F5F9",
          100: "#E2E8F0",
          800: "#1E293B",
          900: "#0F172A",
          950: "#070B14",
        },
        parchment: {
          50: "#FDFCF9",
          100: "#FAF7F2",
          200: "#F3EEE4",
          300: "#E8DEC8",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
