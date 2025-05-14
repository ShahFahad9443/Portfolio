import { div } from 'motion/react-client';
import React from 'react'
import { FaAppStore } from 'react-icons/fa';

function Services() {
    const servicesData = [
        {title:" Custom Website Development",
            description:"I build responsive, fast, and user-friendly websites tailored to your brand or business needs."
        },
        {title:"AI & Machine Learning Solutions",
            description:"AI develop intelligent applications using AI/ML models for tasks like classification, predictions, automation, and more."
        },
        {title:" Full-Stack Web Applications",
            description:"From front-end interfaces to backend logic and databases, I build complete web solutions."
        },
        {title:" Data Analysis & Visualization",
            description:"I help extract insights from raw data and visualize them for decision-making."
        },
        {title:" User Authentication & Security Integration",
            description:"I implement secure login systems and protect your app from common threats."
        },
        {title:"Bug Fixing & Code Optimization",
            description:"I debug and improve existing websites and apps for better performance and maintainability."
        },
    ];
  return (
    <div id="services" className="text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold underline mb-8">Services</h2>
            <p className="mb-12 text-gray-400">"From crafting stunning websites to building intelligent AI solutions, I offer full-stack development, secure authentication systems, insightful data analysis, and performance-driven code optimization — everything you need to bring your digital ideas to life."

</p>
            <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

             {servicesData.map((service,index)=>(
                <div key={index}
                className="bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300">
                    <FaAppStore className="text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto"/>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400">{service.description}</p>
                    
                </div>
             ))}
            </div>
        </div>
    </div>
  )
}

export default Services