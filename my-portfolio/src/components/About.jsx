import React from 'react'

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
            </div>
        </div>
    </div>
    </>
  )
}

export default About