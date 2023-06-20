/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            strong: {
              "border-radius": "0.5rem",
              "padding-top": "0.25rem",
              "padding-bottom": "0.25rem",
              "padding-right": "0.25rem",
              "padding-left": "0.25rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
