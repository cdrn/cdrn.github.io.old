/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      "monokaiYellow": "#ffd866",
      "monokaiTeal": "#78dce8",
      "monokaiTealDark": "#5FB3B2",
      "monokaiGreen": "#a9dc76",
      "monokaiPurple": "#ab9df2",
      "monokaiRed": "#ff6188",
      "monokaiOrange": "#fc9867",
      "monokaiGray": "#999999",
      "monokaiBackground": "#2c292d",
      "white": "#ffffff",
    },
    extend: {
      boxShadow: {
        'teal': '12px 12px 0px -4px #5FB3B2',
        'white': '6px 6px 0px -4px #FFFFFF'
      }
    },
    fontFamily: {
      "mono": ['IBM Plex Mono', "monospace"],
    },
  },
  plugins: [],
}
