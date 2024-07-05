import { RiReactjsLine } from "react-icons/ri"
import { FaNode } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa6"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiMongodb } from "react-icons/si"
import {motion} from "framer-motion"

const iconVariants = (duration)=>({
    initial: { y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease : "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

function Technologies(){
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNode className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-yellow-700"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-blue-700"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-700"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Technologies