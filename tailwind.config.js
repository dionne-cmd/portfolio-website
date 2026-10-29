/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        putty: {
          DEFAULT: "#dedad3",
          light: "#e8e5df",
          surface: "#d3cec6",
          card: "#e3dfd8",
        },
        ink: {
          DEFAULT: "#0a0a0a",
          secondary: "#2c2a27",
        },
        muted: "#5c5852",
        petrol: {
          DEFAULT: "#256f82",
          hover: "#1b5564",
          light: "#e5f0f3",
        },
      },
      fontFamily: {
        serif: ["Imbue", "Georgia", "serif"],
        sans: ["Albert Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
