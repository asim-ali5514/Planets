# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [planets-asim-ali5514.vercel.app](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailWind.CSS](https://tailwindcss.com/) - CSS framwork
- [TypeScript](https://www.typescriptlang.org/) - JS Framework
- [Framer-Motion](https://www.framer.com/motion/) - React Library for the animations

### What I learned

I learned a lot about responsive layouts and how to use breakpoint effectively to create the desired look. I also learned a few new tricks with tailwind as this was my second project using it and I am absolutely in love with how easy it is to build projects with. Some new things I learned were some basic typesricpt, if you take a look at some of the components you can see that I used typescript to specify props, it may seem like another annoying thing to deal with but it helped prevent some really annoying errors later on. I also learned about a React library called Framer Motion which was what I used to make the animations for the website, I found the library very simple and easy to use and had a lot of fun messing around with the animations.



```js
export const InfoProvider:React.FC = ({children}) => {
    const [Section, setSection] = useState<any>(0)
    return (
    <InfoContext.Provider value={{Section , setSection}}>
        {children}
    </InfoContext.Provider>
    )
}
```


### Useful resources

- [Framer-Motion-Docs](https://www.framer.com/docs/) - The documentation for Framer Motion is really well written and very understandable
- [Tailwind-CSS-Docs](https://tailwindcss.com/docs) - The documentation is amazing for Tailwind because you can just search for what you need and there is always a detailed explanation so you don't need to go to any other websites for help



## Author

- Website - [Asim-Ali](https://planets-asim-ali5514.vercel.app/Jupiter)
- Frontend Mentor - [@asim-ali5514](https://www.frontendmentor.io/profile/asim-ali5514)
- GitHub - [@asim-ali-5514](https://github.com/asim-ali5514)


