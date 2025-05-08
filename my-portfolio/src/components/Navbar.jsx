import React from 'react'
import logo from "../assets/logo.mp4";
const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop:blur support-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
    <div className="max-w-7xl mx-auto flex h-14 items-center">
      <div className="md:mr-4 justify-between w-full">
        <a href="#" className='mr-6 flex items-center space-x-2'>
           <video autoPlay loop muted>
          <source src={logo}/>
          </video>
        </a>
        <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60'>About</a>
                <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60'>Projects</a>
                <a href="#testimonials" className='transition-colors hover:text-foreground/80 text-foreground/60'>Testimonials</a>
                <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</a>
        </nav>
      </div>
    </div>

    </header>
  )
}

export default Navbar