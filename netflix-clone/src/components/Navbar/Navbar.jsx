import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import caret_icon from '../../assets/caret_icon.svg';
import profile_img from '../../assets/profile_img.png';
import { logoutUser } from '../../pages/Config/Firebase-Config/Config';
import { ToastContainer, toast } from 'react-toastify';
  
const Navbar = () => {
  const navRef = useRef();

  useEffect(() =>{
    window.addEventListener('scroll' , ()=>{
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
    <div className="navbar-left">
        <img src={logo} alt="logo" />
    <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
    </ul>
    </div>    
    <div className="navbar-right">
    <img className='icons' src={search_icon} alt="search icon" />
    <p>Children</p>
    <img className='icons' src={bell_icon} alt="bell icon" />
    <div className="navbar-profile">
    <img className='profile' src={profile_img} alt="profile image" />
    <img className='caret' src={caret_icon} alt="caret icon" />
    <div className="dropdown">
    <p onClick={logoutUser}>Sign Out Netflix</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar