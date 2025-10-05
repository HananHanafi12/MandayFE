/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "monday-black": "#292D32",
        "monday-blue": "#1053D5",
        "monday-gray": "#6A7686",
        "monday-gray-background": "#F3F3F3",
        "monday-background": "#F3F5F9",
        "monday-border": "#E8E8E8",
        "monday-lime-green": "#CBEE5A",
        "monday-lime-green-char": "#DEFF6E",
        "monday-red": "#FF5070",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
        slideUp: "slideUp 0.3s ease-out",
        shake: "shake 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
