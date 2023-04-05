/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white70: "#FFFFFFB3",
        white80: "#FFFFFFCC",
        primary: "#262626",
        primary60: "#26262699",
        secondary: "#969696",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        "ubuntu-condensed": ["Ubuntu Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
