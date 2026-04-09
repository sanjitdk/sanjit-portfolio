/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          cyan: "#00F5FF",
          amber: "#FFB347",
        },
        dark: "#0A0A0F",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}