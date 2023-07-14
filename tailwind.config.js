/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        zep: "#5246CC"
      },
      keyframes:{
        appear:{
          '0%':{
            right: "-284px",
          },
          '100%':{
            right: "0"
          }
        },
      },
      animation:{
        'modal-appear': 'appear 0.3s linear alternate 1 both',
      }
    },
  },
  plugins: [],
}