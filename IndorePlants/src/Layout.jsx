import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Market from './Pages/Market/Market';
import About from './Pages/About/About';
import Popular from './Pages/Popular/Popular';
import Review from './Pages/Review/Review';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Layout = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);
  return (
    <>
    <Outlet/>
    <Navbar/>
    <Home/>   
   <Market/>
    <About/>
    <Popular/>
   <Review/>
    <Footer/>
    </>
  )
}

export default Layout