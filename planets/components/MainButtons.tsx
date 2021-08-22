import React from 'react'
import {InfoContext} from "../components/MainPage"
import {useContext , createContext} from 'react'
import { animate, motion , AnimatePresence } from "framer-motion"

interface Props {
    name : string;
    color : string;
    num : number;
}

export const  MainButtons:React.FC<Props> = ({name , color , num}) => {
    const {Section , setSection} = useContext(InfoContext)
    return (
        <motion.button transition={{type : 'tween' , duration : 0.25}} animate={Section === num ? { backgroundColor  : color } : {backgroundColor : '#070724'}} onClick={() => setSection(num)} style={Section === num ? {backgroundColor : color , borderColor : color} : {}} className={Section === num ? "bg-darkBlue w-72 h-12 border border-lightGrey  text-white font-Spartan text-xs flex flex-row items-center hover:bg-darkGrey hover:border-darkGrey " : "w-72  h-12 border border-lightGrey  text-white font-Spartan text-xs flex flex-row items-center   hover:bg-darkGrey hover:border-darkGrey"}>
            <p className="pt-1 text-lightGrey font-bold tracking-widest pl-p10">
            {'0' + (num + 1)}
            </p>
            <p className="font-semibold = tracking-widest pt-1 pl-p10">
            {name}
            </p>
        </motion.button>
    )
}
