import React from 'react'
import MernStack from "../assets/mernstack.png";
import HTML from "../assets/Html.png";
import CSS from "../assets/CSS.png";
import JAVASCRIPT from "../assets/JS.png";
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import NextJs from '../assets/NextJs.png'
const About = () => {
  return (
    <>
    <div className="relative" id='about'>
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
                <div className="text-center">
                <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Muhammad Subhan Khan</p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            A Full-Stack Developer with expertise in web development, WordPress, SEO, and the MERN stack.
                        </p>   
                </div>
                <div className='mt-10'>
                
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About