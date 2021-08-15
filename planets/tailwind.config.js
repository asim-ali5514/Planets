module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily : {
      'Antonio' : ['Antonio' , 'sans-serif'],
      'Spartan' : ['Spartan' , 'sans-serif']
    },
    extend: {    
      colors : {
      'darkBlue' : '#070724',
      'lightGrey' : '#838391',
      'darkGrey' : '#38384F'
    },
    fontSize : {
      'MobHeading' : '1.75rem'
    },
    height : {
      MobNav : '65vh'
    },
    backgroundImage: theme => ({
      'stars': "url('/public/background-stars.svg')",
     })

  },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
