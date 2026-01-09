/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4ecdc4",
          dark: "#44a39d",
        },
      },
    },
  },
  plugins: [],
};
