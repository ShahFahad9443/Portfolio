import React from 'react'
import avatar from '../assets/User.png'
import {motion} from "motion/react";

function Hero() {
  return (
    <div className="text-white py-10">
       <img className="mx-auto w-1/2  md:w-1/3 lg:w-1/5" src={avatar} alt="user" />
       <motion.div
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{delay:0.5,duration:0.5}}
        className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4" >Your Story,Your Way
        <span className="text-purple-500">Personal Portfolio</span></h1>
        <p className="text-gray-400 text-lg mb-8">Showcasing My Journey</p>
        <div className="flex justify-center space-x-4 mb-10">
        <button className="bg-purple-500 text-white px-6 py-3 rounded-full">Hire Me</button>
        <button className="text-white border border-white px-6 py-3 rounded-full">My story</button>
        </div>
       </motion.div>
   </div>
  )
}

export default Hero;