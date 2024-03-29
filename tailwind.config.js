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
      },
      colors: {
        primary: {
          100: '#be1347'
        }
      },
      screens: {
        sm: '390px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1920px'
      }
    },
  },
  plugins: [],
}