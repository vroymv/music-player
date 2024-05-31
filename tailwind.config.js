/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1c1c1c",
        tabBarActive: "#f92d47",
        tabBarInactive: "#818181",
      },
    },
  },
  plugins: [],
};
