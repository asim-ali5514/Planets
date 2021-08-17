const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens : {
      'xs' : '680px',
      'md' : '680px',
      'lg' : '1024px'
      // ...defaultTheme.screens,
    },
    fontFamily : {
      'Antonio' : ['Antonio' , 'sans-serif'],
      'Spartan' : ['Spartan' , 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'background-stars': "url('/planet/background-stars (1).svg')",
       }),

      colors : {
      'darkBlue' : '#070724',
      'lightGrey' : '#838391',
      'darkGrey' : '#38384F'
    },
    fontSize : {
      'MobHeading' : '1.75rem',
      'MobButton' : ['0.5625rem', {
        letterSpacing : '1.93px'
      }],
      'NavHeading' : ['1.75rem' , {
        letterSpacing : '-1.05px'
      }]
    },
    height : {
      MobNav : '65vh'
    },

  },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
