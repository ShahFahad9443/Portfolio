
import React from 'react'
import project1 from '../assets/p1.jpeg'
import project2 from '../assets/p2.jpg'
import project3 from '../assets/p3.jpeg'
import { div } from 'motion/react-client'

function Work() {
    const project=[
        {
            id:1,
            title:" SmartPlant & AI Plant Disease Detector",
            description:"A web app that uses machine learning to detect plant diseases from uploaded leaf images.",
            image:project1,
            link:"#"
        },
        {
            id:2,
            title:"Taskify – Personal Task Manager",
            description:"A full-stack web app to manage daily tasks with a clean UI and user authentication.",
            image:project2,
            link:"#"
        },
        {
            id:3,
            title:"WeatherEase – Real-time Weather App",
            description:"A minimal weather application that shows current conditions based on user location.",
            image:project3 ,
            link:"#"
        },
    ]
  return (
    <div id="work" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-white underline font-bold text-center mb-12">My Work</h2>
            <p className="mb-12 text-gray-400 text-center">
                The below are  projects done by me so far
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {project.map((project)=>(
                    <div
                    key={project.id}
                    className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                    >
                 <img src={project.image} alt=""  className="w-full h-48 object-cover" />
                 <div className="p-6">
                    <h3 className="text-xl text-white font-semibold mb-2 ">{project.title}</h3>
                    <p className="text-slate-400 mb-4 first-letter:">{project.description}</p>
                    <button className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition">Details</button>
                 </div>

             </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work