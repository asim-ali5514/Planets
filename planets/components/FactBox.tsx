import React from 'react'

interface Props {
    title : string;
    info : string;
}

export const FactBox:React.FC<Props> = ({title , info}) => {
    return (
        <div className="w-mobFactBox border border-lightGrey mobSmall:w-SmallMobFactBox flex flex-row justify-between h-12 items-center p-2">
            <h1 className="text-lightGrey font-Spartan text-MobFactBox font-bold">{title}</h1>
            <h2 className="font-Antonio text-white tracking-wider text-xl font-light uppercase">{info}</h2>
        </div>
    )
}
