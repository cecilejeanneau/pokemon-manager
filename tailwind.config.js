/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'light-gray': '#d3d3d3',
      'deep-pink': '#ff1493',
      'dark-cyan': '#008b8b',
      'light-steel-blue': '#b0c4de',
    },
    fontFamily: {
      'oswald': ['Oswald'],
    }
  },
  plugins: []
}
