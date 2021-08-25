import React from 'react'
import { useState } from 'react'
import { MobNavItem } from './MobNavItem'
import { animate, motion , AnimatePresence } from "framer-motion"
export const MobNavbar : React.FC = () => {
    const [ShowMenu, setShowMenu] = useState<boolean>(false)
    const spring = {
        duration : 0.5 , type : 'spring' , stiffness : 120
    }
    return (
        <>
            <motion.nav initial={{opacity : 0 , y : -150}} transition={spring} animate={{opacity : 1 , y: 0}}  className="w-full bg-darkBlue h-16 flex flex-row items-center justify-between p-3 border-b border-lightGrey xs:hidden">
                <h1 className="text-white font-Antonio text-MobHeading">THE PLANETS</h1>
                <div className="flex flex-col gap-1" onClick={() => setShowMenu(!ShowMenu)}>
                    <div className=" bg-darkGrey w-6 h-1"></div>
                    <div className="bg-darkGrey w-6 h-1"></div>
                    <div className="bg-darkGrey w-6 h-1"></div>
                </div>
            </motion.nav>
            <AnimatePresence key="mobNav">
                {ShowMenu &&
            <motion.div exit={{x : 450}}  initial={{x : -450}}  animate={ ShowMenu === true ? {x : 0} : {x : -450}}   className={ShowMenu === true ? "w-full bg-darkBlue h-MobNav flex flex-col items-center transition duration-75 ease-in-out" : 'hidden transition duration-75 ease-in-out'}>
                <div className="flex flex-col mt-3" onClick={() => setShowMenu(!ShowMenu)}>
                    <MobNavItem name="Mercury" color="#DEF4FC"/>
                    <MobNavItem name="Venus" color="#F7CC7F" />
                    <MobNavItem name="Earth" color="#545BFE" />
                    <MobNavItem name="Mars" color="#FF6A45" />
                    <MobNavItem name="Jupiter" color="#ECAD7A" />
                    <MobNavItem name="Saturn" color="#FCCB6B" />
                    <MobNavItem name="Uranus" color="#65F0D5" />
                    <MobNavItem name="Neptune" color="#497EFA" />
                </div>
            </motion.div>}
            </AnimatePresence>
        </>
    )
}
