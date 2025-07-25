/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Montserrat",
      },
      colors: {
        primaryColor: "#e5e7eb", // Light gray for text/icons on dark background
        secondaryColor: "#8b5cf6", // Vibrant purple for accents (hovers, buttons)
        bgColor: "#1f2937", // Dark gray for backgrounds
        textColor: "#d1d5db", // Light gray for body text
      },
      boxShadow: {
        btnShadow: "0px 0px 18px 3px rgba(139, 92, 246, 0.3)", // Purple-tinted shadow
      },
    },
  },
  plugins: [],
};