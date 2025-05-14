import React from 'react'
import Navbar from './conponents/Navbar'
import Hero from './conponents/Hero'
import About from './conponents/About'
import Services from './conponents/Services'
import Work from './conponents/Work'
import Contact from './conponents/Contact'
import Footer from './conponents/Footer'

const App = () => {
  return (
    <div className="bg-[#0e0c1e]">
     
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Work/>
     <Contact/>
     <Footer/>
      
    </div>
  )
}

export default App