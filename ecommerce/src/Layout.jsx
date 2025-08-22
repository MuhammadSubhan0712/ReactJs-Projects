import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
    <Outlet/>
    <Navbar/>
    <Footer/>
    </div>
  
  )
}

export default Layout