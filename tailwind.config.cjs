/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      "monokaiYellow": "#ffd866",
      "monokaiTeal": "#78dce8",
      "monokaiGreen": "#a9dc76",
      "monokaiPurple": "#ab9df2",
      "monokaiRed": "#ff6188",
      "monokaiOrange": "#fc9867",
      "monokaiGray": "#999999",
      "monokaiBackground": "#2c292d",
    },
    extend: {},
    fontFamily: {
      "mono": ['IBM Plex Mono', "monospace"],
    },
  },
  plugins: [],
}
