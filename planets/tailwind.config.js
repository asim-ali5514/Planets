module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily : {
      'Antonio' : ['Antonio' , 'sans-serif'],
      'Spartan' : ['Spartan' , 'sans-serif']
    },
    extend: {    colors : {
      'darkBlue' : '#070724'
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
