const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens : {
      'mobSmall' : '320px',
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
      }],
      'MobDesc' : ['0.68rem' , {
        lineHeight : '22px',
      }],
      'MobFactBox' : ['0.6rem' , {
        lineHeight : '16px',
        letterSpacing : '0.73px'
      }]
    },
    height : {
      MobNav : '65vh',
      MainPage : '115vh'
    },
    spacing : {
      'p5' : '5%',
      'p10' : '10%',
      'p15' : '15%',
      'p20' : '20%',
      'p25' : '25%',
      'p30' : '30%',
      'p35' : '35%',
      'p40' : '40%',
      'p45' : '45%',
      'p50' : '50%',
      'p55' : '55%',
      'p60' : '60%',
      'p65' : '65%',
      'p70' : '70%',
      'p75' : '75%',
      'p80' : '80%',
      'p85' : '85%',
      'p90' : '90%',
      'p95' : '95%',
      'p100' : '100%',
      'mobDesc' : '20.4rem',
      'mobFactBox' : '327px',
      'SmallMobFactBox' : '300px'
    }
  },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
