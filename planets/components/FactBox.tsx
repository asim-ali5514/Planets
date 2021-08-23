import React from 'react'

interface Props {
    title : string;
    info : string;
}

export const FactBox:React.FC<Props> = ({title , info}) => {
    return (
        <div className="w-mobFactBox border border-darkGrey mobSmall:w-SmallMobFactBox flex flex-row justify-between h-12 items-center p-2 lg:pl-5 md:w-TabletFactBox md:h-TabletFactBox md:flex-col md:justify-center md:text-left md:items-baseline lg:w-64 lg:h-32 ">
            <h1 className="text-lightGrey font-Spartan text-MobFactBox font-bold lg:text-xs lg:pb-4">{title}</h1>
            <h2 className="font-Antonio text-white tracking-wider text-xl font-light uppercase md:text-2xl lg:text-4xl">{info}</h2>
        </div>
    )
}
