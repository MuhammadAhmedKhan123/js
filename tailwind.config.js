/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': {'min': '1025px', 'max': '1440px'},
      'md': {'min': '920px', 'max': '1024px'},
      'sm': {'min': '600px', 'max': '920px'},
    },
    extend: {  screens: {
      's': {'min': '467px', 'max': '599px'}, 
      'xs': {'min': '200px', 'max': '468px'},
    },
      
    },
  },
  plugins: [],
}