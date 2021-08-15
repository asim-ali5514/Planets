import React from 'react'
import Link from "next/link"
import Image from "next/image"
import cheveron from "../../public/icon-chevron (1).svg"
interface Props {
    color : string;
    name : string;
}
export const MobNavItem:React.FC<Props> = ({color , name}) => {
    return (
        <Link href={'/' + name}>
        <a>
        <div className="w-80 border-b-2 h-16 border-darkGrey flex flex-row items-center justify-between">
            <div className="flex flex-row gap-6">
                <div className="w-5 h-5 rounded-full" style={{backgroundColor : color}}></div>
                <h1 className="font-Spartan text-white font-semibold text-base tracking-wider uppercase">{name}</h1>
            </div>
            <Image src={cheveron} height="12px" width="6px"/>
        </div>
        </a>
        </Link>
    )
}
