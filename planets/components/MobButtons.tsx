import React from 'react'
import {useContext , createContext} from 'react'
import {InfoContext} from "../components/MainPage"
import {InfoProvider} from "../components/MainPage"
import { animate, motion , AnimatePresence } from "framer-motion"

interface Props {
    title : string,
    color : string,
    num : number
}

export const MobButtons:React.FC<Props> = ({title, color , num}) => {
    const {Section , setSection} = useContext(InfoContext)
    return (
        <div>
            <motion.button  transition={{ duration : 0.2 }}   animate={ Section === num ? {borderColor : color , borderBottom  : '4px solid ' + color , opacity : 1} : {borderColor : 'transparent' , borderBottom : 'none' , opacity : 1}}  onClick={() => setSection(num)}  className=" text-white border-b-4 font-bold font-Spartan  text-MobButton bg-darkBlue w-20 h-16 text-center flex justify-center items-center" >
                {title}
                </motion.button>
        </div>
    )
}
