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
        primaryColor: "#F3F4F6",       // Subtle off-white for text/icons
        secondaryColor: "#8B5CF6",     // Elegant violet for accents, hover, buttons
        bgColor: "#121212",            // True dark for backgrounds
        textColor: "#E5E7EB",          // Gentle light gray for body text
        mutedText: "#9CA3AF",          // Medium gray for secondary text
        borderColor: "#2A2A2A",        // Soft border for inputs and cards

        // Semantic feedback colors
        danger: "#EF4444",             // Red for errors
        success: "#10B981",            // Green for confirmations
        warning: "#F59E0B",            // Yellow for alerts
      },
      boxShadow: {
        btnShadow: "0 0 12px rgba(139, 92, 246, 0.25)",         // Soft violet button glow
        glowInput: "0 1px 8px rgba(255, 255, 255, 0.08)",        // Subtle white glow for input focus
      },
    },
  },
  plugins: [],
};
