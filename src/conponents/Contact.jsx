import React from 'react';
import { FaAddressBook, FaEnvelope, FaMapMarkerAlt, FaPhone, FaVoicemail } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact"  className="min-h-screen text-white p-6 flex flex-col md:flex-row items-center justify-center gap-10">
      
      {/* Left Side - Contact Info */}
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl font-bold">
          Let's Discuss Your <span className="text-purple-500">Project</span>
        </h1>
        <p className="text-gray-400">
          Let’s make something new, different, and more meaningful or make things more visual or conceptual.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-4 rounded-full">
              <FaPhone/>
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Call Me</p>
            <span>03419047053</span>
            </div>
            
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-4 rounded-full">
              <FaEnvelope/>
            </div>
            <div>
            <p className="text-lg font-medium text-purple-500">Email</p>
            <span>shahfahad9443477@gmail.com</span>
            </div>
            
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-4 rounded-full">
              <FaMapMarkerAlt/>
            </div>
            <div>
            <p className="text-lg font-medium text-purple-500">Address</p>
            <span>Pakistan,Peshawar</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <form className="w-full max-w-md space-y-4 bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="p-3 bg-gray-800 text-white rounded"
          />
          <input
            type="email"
            placeholder="Your email"
            className="p-3 bg-gray-800 text-white rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Phone number"
            className="p-3 bg-gray-800 text-white rounded"
          />
          <input
            type="text"
            placeholder="Budget"
            className="p-3 bg-gray-800 text-white rounded"
          />
        </div>

        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 bg-gray-800 text-white rounded"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-semibold"
        >
          Submit Message
        </button>
      </form>
    </div>
  );
};

export default Contact;