import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className="mt-48 flex justify-between items-center p-5 text-white border-t-2 border-purple-500">
        <p>©2025.All Rights Reserved</p>
        <p>Fahad Coding</p>
        <div className="flex justify-center space-x-4 text-white mt-4">
            <a className="hover:text-purple-500" href=""> <FaFacebook  className="w-6 h-6"/></a>
            <a className="hover:text-purple-500" href=""> <FaTwitter   className="w-6 h-6"/></a>
            <a className="hover:text-purple-500" href=""> <FaLinkedin  className="w-6 h-6"/></a>
            <a className="hover:text-purple-500" href=""> <FaInstagram className="w-6 h-6"/></a>
        </div>

    </div>
  )
}

export default Footer