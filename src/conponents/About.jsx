import React from 'react'
import about from'../assets/about.png'
import { Link } from 'react-scroll'

function About() {
  return (
    <div id="about" className="text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 underline">About Me</h2>
            <p className="mb-12 text-gray-400 text-center">AI enthusiast. Full-stack developer. Turning ideas into smart, scalable digital solutions.</p>
            <div className=" flex flex-col md:flex-row justify-center items-center">
                <div className="mb-8 md:mb-0 md:mr-8 flex justify-center">
                    <img src={about} alt="" className="w-2/3 sm:w-1/2 md:w-1/2 rounded-xl" />
                </div>
                <p className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl">Hi, I'm Shah Fahad — a passionate learner and developer currently diving deep into the world of Artificial Intelligence and Web Development. I love creating smart apps that not only solve real-world problems but also deliver great user experiences. Whether it's building a responsive website, training an AI model, or optimizing a database query, I enjoy every step of the development process.

I'm always exploring new technologies and looking for ways to grow. Let’s build something amazing together!</p>
            </div>
            < div className="flex flex-col sm:flex-row justify-around items-center space-y-6 sm:space-y-0">
                <div className="text-center">
                    <h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">2+</h3>
                    <p className="text-sm sm:text-base text-gray-300">Years of Design Experience</p>
                </div>
            

            
                <div>
                    <h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">15+</h3>
                    <p className="text-sm sm:text-base text-gray-300">Overall Global Customers</p>
                </div>
            

            
                <div>
                    <h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">10+</h3>
                    <p className="text-sm sm:text-base text-gray-300">Project I have Made</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About