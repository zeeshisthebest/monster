/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#003585",
        "theme-blue-600": "#00255d",
        "theme-blue-300": "#335d9d"
      },
      minHeight: {
        'sect': "calc(100vh - 136px)",
      },
      maxHeight: {
        'sect': "calc(100vh - 136px)",
      }
    },
    // colors: {
    //   "bg-theme-blue": "#003585"
    // }
  },
  plugins: [],
}
