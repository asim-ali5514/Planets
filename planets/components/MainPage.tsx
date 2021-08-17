import React, { Children } from 'react'
import {MobButtons} from "../components/MobButtons"
import {useState , useContext , createContext} from 'react'
import Image from 'next/image'
import { animate, motion , AnimatePresence } from "framer-motion"

interface Props {
    data: {
        name: string;
        overview: {
            content: string;
            source: string;
        };
        structure: {
            content: string;
            source: string;
        };
        geology: {
            content: string;
            source: string;
        };
        rotation: string;
        revolution: string;
        radius: string;
        temperature: string;
        color : string;
        mobdimensions : number;
        tabletdimensions : number;
        desktopdimensions : number;
        images : {
            planet : string;
            internal : string;
            geology : string
        }
}
}

export const InfoContext = createContext<any>(null); 
export const InfoProvider:React.FC = ({children}) => {
    const [Section, setSection] = useState<any>(0)
    return (
    <InfoContext.Provider value={{Section , setSection}}>
        {children}
    </InfoContext.Provider>
    )
}

export const MainPage:React.FC<Props> = ({ data , data : {name, rotation, revolution, radius, temperature, color ,mobdimensions , tabletdimensions, desktopdimensions }}) => {
    const {Section , setSection} = useContext(InfoContext)

    const Images = [
        data.images.planet,
        data.images.internal,
        data.images.planet,
    ]
    return (
        <div className="w-full h-screen  bg-darkBlue bg-background-stars flex flex-col items-center"  >
            <div className="flex flex-row justify-evenly border-b border-lightGrey w-full">
                <MobButtons color={color} title="OVERVIEW" num={0}/>
                <MobButtons color={color} title="STRUCTURE" num={1}/>
                <MobButtons color={color} title="SURFACE" num={2}/>
            </div>
            <div className="grid place-items-center mt-7 ">
                <motion.div animate={{ opacity : 1 }} initial={{opacity : 0}} >
                <Image src={Images[Section]} alt="planet img" width={mobdimensions} height={mobdimensions} />
                </motion.div>
                <motion.div className={Section === 2 ? "flex" : "hidden"} animate={Section === 2 ? {y : 0} : {y : -100}}>
                <Image src={data.images.geology} width="163px" height="199px"/>
                </motion.div>
            </div>
        </div>
        
    )
}
