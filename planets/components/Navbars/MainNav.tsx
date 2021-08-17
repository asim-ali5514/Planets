import React from 'react'
import Link from 'next/dist/client/link'
import { animate, motion , AnimatePresence } from "framer-motion"
import { MainNavItems } from './MainNavItems'
export const MainNav:React.FC = () => {
    return (
        <motion.nav initial={{y : -500}} animate={{y : 0}} className="hidden lg:flex-row lg:justify-between lg:h-20 lg:items-center lg:p-7  md:flex md:w-full md:h-32 md:bg-background-stars md:gap-7 md:p-1 md:border-b md:border-lightGrey md:bg-darkBlue md:flex-col md:items-center">
            <h1 className="text-white text-NavHeading font-Antonio pt-2">THE PLANETS</h1>
            <div className="flex flex-row gap-5">
            <MainNavItems name="Mercury"/>
            <MainNavItems name="Venus"/>
            <MainNavItems name="Earth"/>
            <MainNavItems name="Mars"/>
            <MainNavItems name="Juptier"/>
            <MainNavItems name="Saturn"/>
            <MainNavItems name="Juptier"/>
            <MainNavItems name="Uranus"/>
            <MainNavItems name="Neptune"/>
            </div>
        </motion.nav>
    )
}
