import React, { useState } from 'react'
import { Github, ExternalLink, Eye } from 'lucide-react';

const Cards = ({ item }) => {
    const [isHovered , setIsHovered] = useState(false);

  return (
    <>
        <div 
      className={`relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gray-900/80 backdrop-blur-sm transition-all duration-500 w-full h-full ${isHovered ? 'shadow-lg shadow-cyan-400/20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hovered Effects: */}
      <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
      
      
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={item.image} 
          alt={item.title} 
          className={`w-full h-48 object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-110' : 'brightness-90'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
      </div>

      {/* Project content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-300 mb-6">{item.desc}</p>
        
        {/* buttons */}
        <div className="flex gap-4">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-1 group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="relative w-full flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-lg text-sm font-bold tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 transition-all duration-300">
              <Eye className="w-4 h-4" />
              Live Preview
            </button>
          </a>
          
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-1 group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="relative w-full flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg text-sm font-bold tracking-wide group-hover:text-gray-300 transition-all duration-300">
              <Github className="w-4 h-4" />
              Code
            </button>
          </a>
        </div>
      </div>

      {/* Hover effects: */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'}`}></div>
    </div>
    </>
  )
}

export default Cards