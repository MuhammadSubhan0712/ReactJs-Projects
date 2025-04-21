import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
    <div>
    <Navbar/>
    </div>
    <div>
    <Outlet/>
    </div>
    {/* <Footer/> */}
    <Footer/>
    </div>
  )
}

export default Layout