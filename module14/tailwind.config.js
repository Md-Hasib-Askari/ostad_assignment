/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          // #20B15A
            DEFAULT: "#20B15A",
            "50": "#FFFFFF",
            "100": "#FFFFFF",
            "200": "#FFFFFF",
            "300": "#E3F4E6",
            "400": "#BFE1C3",
            "500": "#9BCF9F",
            "600": "#77BD7B",
            "700": "#53AB57",
            "800": "#309933",
            "900": "#1C6F1F"
        },
        "secondary": "#D7F5DC",
        "danger": {
            DEFAULT: "#F55F1D",
            "50": "#FFFFFF",
            "100": "#FFFFFF",
            "200": "#FFEBE3",
            "300": "#FFCDBF",
            "400": "#FFB09B",
            "500": "#FF9277",
            "600": "#FF7453",
            "700": "#FF561F",
            "800": "#DB4500",
            "900": "#B83300"
        },
        "light": "#F8F9FC",
        "dark": "#374151",
        "dark-light": "#6B7280",
        "dark-lighter": "#9CA3AF",
      },
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

