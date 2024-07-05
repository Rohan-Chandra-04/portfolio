import { motion } from "framer-motion"
import profile from "../assets/profilePic.png"

const container = (delay)=>({
    hidden: {x:-100, opacity: 0},
    visible:{
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

function Hero(){
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-7xl font-thin tracking-tight lg:mt-16 ">
                            Rohan Chandra R
                        </motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        bg-clip-text text-4xl tracking-tight text-transparent">
                        CSE Undergraduate from NITK
                        </motion.span>
                        <motion.p 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter text-2xl">
                            Hello, I am Rohan Chandra Regulagadda, a 2nd year student from NITK, Surathkal.
                            Along with college journey, i have also learnt full stack development using MERN
                            stack. I am also executive member of IEEE club with special interest in web technologies.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <div className="flex justify-center">
                        <img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        src={profile} alt="profile pic ckomjing soon " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero