import React from 'react'

interface Props {
    title : string;
    info : string;
}

export const FactBox:React.FC<Props> = ({title , info}) => {
    return (
        <div className="w-mobFactBox border border-darkGrey mobSmall:w-SmallMobFactBox flex flex-row justify-between h-12 items-center p-2 md:w-TabletFactBox md:h-TabletFactBox md:flex-col md:justify-center md:text-left md:items-baseline">
            <h1 className="text-lightGrey font-Spartan text-MobFactBox font-bold">{title}</h1>
            <h2 className="font-Antonio text-white tracking-wider text-xl font-light uppercase md:text-2xl">{info}</h2>
        </div>
    )
}
