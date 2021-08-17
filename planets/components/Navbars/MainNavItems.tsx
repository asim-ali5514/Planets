import React from 'react'
import Link from 'next/dist/client/link'

interface Props {
    name : string
}

export const MainNavItems:React.FC<Props> = ({name}) => {
    return (
        <div>
            <Link href={'/' + name}>
            <a>
                <h1  className={"font-Spartan text-lightGrey font-bold uppercase text-xs tracking-wider hover:text-white"}>{name}</h1>
            </a>
            </Link>
        </div>
    )
}
