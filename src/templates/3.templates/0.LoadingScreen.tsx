"use client"
import FullLogo from "@/templates/0.atoms/1.FullLogo";
import { motion } from "framer-motion";

const LoadingScreen = () => {
    
    return (
        <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white gap-5 overflow-y-hidden overflow-x-hidden"
        >
            <h1 className="text-4xl">Cargando</h1>
            <FullLogo
                baseFill="#010100"
                contrasteFill="#1988ff"
                classNameGeneral="flex items-center justify-center w-[50%] overflow-y-hidden overflow-x-hidden"
            />
        </motion.div>
    );
};

export default LoadingScreen;