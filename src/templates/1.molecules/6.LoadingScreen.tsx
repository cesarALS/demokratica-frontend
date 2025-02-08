/**
 * Esta es la pantalla de carga. Se usa en varios componentes, tanto con suspense, 
 * como con variables de estado booleanas.
 */

"use client"

import FullLogo from "@/templates/0.atoms/1.FullLogo";
import { motion } from "framer-motion";
import IconLogo from "@/templates/0.atoms/2.IconLogo";
import TitleLogo from "@/templates/0.atoms/0.TitleLogo";

interface LoadingScreenProps {
    fixed?: boolean
    text?: string
    showText?: boolean
    textStyles?: string
    scale?: number
    logo?: string
}

const LoadingScreen = ({
    fixed = true,
    text = "Cargando",
    showText = true,
    textStyles = "",
    scale = 1.2,
    logo = "Full"
}   : LoadingScreenProps) => {
    
    const fixedStyles = "fixed top-0 left-0 w-screen h-screen";
    
    return (
        <div className="relative w-full h-full overflow-hidden bg-white">
            <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: [1, scale, 1], opacity: [0.8, 1, 0.8] }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className={`${fixed? fixedStyles : "w-full h-full"} flex flex-col items-center justify-center bg-white gap-4 md:gap-[5%] overflow-y-hidden overflow-x-hidden`}
            >
                {
                    showText? (
                        <h1 className={`${textStyles} text-2xl md:text-4xl`}>{text}</h1>
                    ) : (
                        <></>
                    )
                }                
                {
                    logo === "Full" ? 
                        <FullLogo
                            baseFill="#010100"
                            contrasteFill="#1988ff"
                            classNameGeneral="flex items-center justify-center w-[75%] md:w-[50%] overflow-y-hidden overflow-x-hidden"
                        />
                    : logo === "Icon" ?
                        <IconLogo      
                            classNameGeneral="flex items-center justify-center w-[20%] overflow-y-hidden overflow-x-hidden"                                  
                        />
                    : logo === "Title" ? 
                        <TitleLogo
                            classNameGeneral="flex items-center justify-center w-[45%] overflow-y-hidden overflow-x-hidden"                                  
                            baseFill="#000000"
                        />               
                    :  
                        <FullLogo
                            baseFill="#010100"
                            contrasteFill="#1988ff"
                            classNameGeneral="flex items-center justify-center w-[50%] overflow-y-hidden overflow-x-hidden"
                        />
                }
            </motion.div>
        </div>
    );
};

export default LoadingScreen;