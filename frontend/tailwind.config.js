/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      "grey-100": "#F4F4F4",
      "grey-200": "#CFCFCF",
      "grey-300": "#474747",
      "green-100": "#63CF95",
      "green-200": "#279D5D",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
