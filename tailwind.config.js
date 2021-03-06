module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        ig_bg: '#fafafa',
      },
      minWidth: {
        '20': '20rem',
      },
      maxWidth: {
        '1': '20rem',
      },
      width:{
        '50': '50px'
      },
      height:{
        '50': '50px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
