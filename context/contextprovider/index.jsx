"use client"

import Header from '@/components/Header'
import Nav from '@/components/Nav'
import TopLeftImg from '@/components/TopLeftImg'
import Transition from '@/components/Transition'
import { AppContext } from '@/context/appcontext'
import { AnimatePresence,motion } from 'framer-motion'
// import { useRouter } from 'next/head'
import { usePathname } from 'next/navigation'
import { useState,useEffect } from 'react'
 
 

const ContextProvider = ({ children }) => {

    
    const [is_routing, setis_routing] = useState(false);
    const path = usePathname();
    const [prev_path, setprev_path] = useState("/");
 
 
 
    useEffect(() => {
       if (path !== prev_path) {
          setis_routing(true);
       }
    }, [path, prev_path]);
 
 
    useEffect(() => {
       if (is_routing) {
          setprev_path(path);
          const timeout = setTimeout(() => {
             setis_routing(false);
          }, 1200);
          return () => clearTimeout(timeout);
       }
    }, [is_routing]);
 

    return (
        <AppContext.Provider value={path}>
            <AnimatePresence mode="wait">
                <motion.div key={path} className=" h-full">
                    {is_routing && <Transition />}
                    <Nav />
                    <Header />
                    <TopLeftImg />
                    {children}
                </motion.div>
            </AnimatePresence>
        </AppContext.Provider>
    )
}

export default ContextProvider