/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      brand: {
        bg: "#0B0B0F",
        card: "#14141C",
        primary: "#7C3AED", // roxo premium
        accent: "#22D3EE", // cyan elegante
        text: "#EDEDED",
        muted: "#A1A1AA",
      },
    },
  },
};
export const plugins = [];

