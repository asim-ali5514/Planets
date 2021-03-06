import React, { Children } from 'react'
import {MobButtons} from "../components/MobButtons"
import {useState , useContext , createContext} from 'react'
import Image from 'next/image'
import { animate, motion , AnimatePresence } from "framer-motion"
import SourceIcon from "../public/icon-source.svg"
import {FactBox} from "./FactBox"
import {MainButtons} from "./MainButtons"
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

    const Descriptions = [
        data.overview.content,
        data.structure.content,
        data.geology.content
    ]

    const Sources = [
        data.overview.source,
        data.structure.source,
        data.geology.source
    ]
    return (
        <div className="w-full h-full bg-darkBlue bg-background-stars flex flex-col items-center overflow-x-hidden md:h-auto  lg:min-h-screen lg:grid lg:grid-cols-2  lg:gap-10 min-h-screen"  >
            <div className="flex flex-row justify-evenly border-b border-lightGrey w-full md:hidden overflow-hidden">
                <MobButtons color={color} title="OVERVIEW" num={0}/>
                <MobButtons color={color} title="STRUCTURE" num={1}/>
                <MobButtons color={color} title="SURFACE" num={2}/>
            </div>
            <div className="grid place-items-center mt-24 w-max lg:ml-auto">
                <motion.div animate={{ opacity : 1 }} initial={{opacity : 0}} transition={{duration : 0.6}} >
                    <div className="md:hidden overflow-hidden">
                        <Image src={Images[Section]}  alt="planet img" width={mobdimensions} height={mobdimensions} />
                    </div>
                    <motion.div className="hidden md:flex overflow-hidden lg:hidden " transition={{duration : 0.6}} animate={{ opacity : 1 }} initial={{opacity : 0}}>
                        <Image className="hidden md:flex lg:hidden" src={Images[Section]} alt="planet img" width={tabletdimensions} height={tabletdimensions} />
                    </motion.div>
                    <motion.div className="hidden lg:flex overflow-hidden " transition={{duration : 0.6}} animate={{ opacity : 1 }} initial={{opacity : 0}}>
                        <Image className="hidden lg:flex" src={Images[Section]} alt="planet img" width={desktopdimensions} height={desktopdimensions} />
                    </motion.div>
                </motion.div>
                <AnimatePresence key="surface_img">
                    { Section === 2 && 
                    <motion.div exit={{y : -900}} initial={{y : -100}}  className={Section === 2 ? "flex relative lg:bottom-p100 bottom-p50 overflow-hidden " : "hidden"} animate={Section === 2 ? {y : 0} : {y : -100}}>
                    <Image src={data.images.geology} width="163px" height="199px" alt="geology"/>
                    </motion.div> }
                </AnimatePresence>
            </div>
            <AnimatePresence key="text">
            <div className="md:flex flex-col md:flex-row md:w-p90 md:justify-between md:mt-20 overflow-y-hidden lg:flex-col lg:justify-center lg:ml-auto ">
                <motion.div exit={{opacity : 0}} initial={{opacity : 0 , y : -100}} transition={{type : 'spring' , delay : 0.1}} animate={{ opacity : 1 , y : 0}} className="mt-16 flex flex-col justify-center items-center gap-6 md:mt-0 md:text-left md:items-baseline">
                    <h1 className="text-white font-Antonio text-4xl uppercase md:text-5xl">{name}</h1>
                    <p className="text-white font-Spartan text-MobDesc leading-6 w-mobDesc text-center md:text-left md:text-xs md:leading-7 md:w-p95 max-w-sm lg:text-sm lg:leading-7 lg:font-light">{Descriptions[Section]}</p>
                    <p className="text-lightGrey font-Spartan text-xs">Source: <a className="underline font-bold" href={Sources[Section]}>Wikipedia</a> <Image src={SourceIcon} alt="source-icon"/> </p>
                </motion.div>
                <motion.div initial={{opacity : 0 , y : -100}} transition={{type : 'spring' , delay : 0.2}} animate={{ opacity : 1 , y : 0}} className="md:flex flex-col gap-4 hidden mt-9">
                    <MainButtons  color={color} name="OVERVIEW" num={0}/>
                    <MainButtons  color={color} name="STRUCTURE" num={1}/>
                    <MainButtons  color={color} name="SURFACE" num={2}/>
                </motion.div>
            </div>
            <motion.div initial={{opacity : 0 , y : -100}} transition={{type : 'spring' , delay : 0.2}} animate={{opacity : 1 , y : 0}} className="flex flex-col gap-3 mt-11 mb-5 md:flex-row lg:items-center lg:justify-center lg:ml-auto lg:w-screen ">
                <FactBox title="ROTATION TIME" info={rotation} />
                <FactBox title="REVOLUTION TIME" info={revolution} />
                <FactBox title="RADIUS" info={radius} />
                <FactBox title="AVERAGE TEMP." info={temperature} />
            </motion.div>
            </AnimatePresence>
        </div>
        
    )
}
