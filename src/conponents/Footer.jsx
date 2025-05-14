import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className="mt-48 flex justify-between items-center p-5 text-white border-t-2 border-purple-500">
        <p>©2025.All Rights Reserved</p>
        <p>Fahad Coding</p>
        <div className="flex justify-center space-x-4 text-white mt-4">
            <a className="hover:text-purple-500" href="https://www.facebook.com/share/1BxrLB8Ra9/?mibextid=wwXIfr"> <FaFacebook  className="w-6 h-6"/></a>
            <a className="hover:text-purple-500" href=""> <FaTwitter   className="w-6 h-6"/></a>
            <a className="hover:text-purple-500" href="https://www.linkedin.com/in/shah-fahad-6820912bb/"> <FaLinkedin  className="w-6 h-6"/></a>
            <a className="hover:text-purple-500" href="https://www.instagram.com/shah__fahad._/"> <FaInstagram className="w-6 h-6"/></a>
        </div>

    </div>
  )
}

export default Footer