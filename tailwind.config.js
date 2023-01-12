/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       movietheme: {
  //         primary: "#a991f7",
  //         secondary: "#f6d860",
  //         accent: "#37cdbe",
  //         neutral: "#3d4451",
  //         "base-100": "#ffffff",
  //       },
  //     },
  //     "night",
  //     "dark",
  //     "cupcake",
  //   ],
  // },
}
