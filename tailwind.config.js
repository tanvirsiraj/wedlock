/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#9ACCC9",
        "secondary-color": "#F4A492",
      },
      fontFamily: {
        "primary-font": "'Poppins', sans-serif",
        logo: "'Pacifico', cursive",
        banner: "'Great Vibes', cursive",
      },
    },
  },
  plugins: [require("daisyui")],
};
