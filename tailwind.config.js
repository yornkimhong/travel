/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#FF5F40",
        primaryHover: "#F97258",
        btnColor:
          "linear-gradient(90deg, rgba(242,152,58,1) 0%, rgba(255,95,64,1) 57%)",
        gray: "#A5A5A5",
      },
      backgroundImage: {
        btnColor:
          "linear-gradient(90deg, rgba(242,152,58,1) 0%, rgba(255,95,64,1) 57%)",
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
