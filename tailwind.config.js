export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      fontFamily: {
        turret: ["'Turret Road'", "cursive"],
        f1: ["Caveat", "cursive"],
        f2: ["Edu AU VIC WA NT Arrows", "cursive"],
        f3: ["Quicksand", "sans-serif"],
      },
      screens: {
        mobile: '480px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
}
