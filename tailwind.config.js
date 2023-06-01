/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1 : ["32px", { lineHeight: "44px", fontWeight: 500 }],
        h2 : ["30px", { lineHeight: "40px", fontWeight: 400 }]
      }
    },
  },
  plugins: [],
}