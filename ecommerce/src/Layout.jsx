import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Outlet/>
    <Navbar/>
    <Footer/>
    </>
  
  )
}

export default Layout