/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      fontFamily : {
        'f1':["Caveat", "cursive"],
        'f2':["Edu AU VIC WA NT Arrows", "cursive"],
        'f3':["Quicksand", "sans-serif"]
      },
      backgroundImage: {
        'background': "url('./src/assets/background.avif')",
        
      },
      screens: {
        'mobile': '480px',
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}