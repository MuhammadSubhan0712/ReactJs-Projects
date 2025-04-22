import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
    <Router>
      <main className='w-full flex flex-col bg-neutral-50 min-h-screen'>
        {/* Navbar */}
        <Navbar/>

       {/* Routing */}
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>

       {/* Footer */}
       <Footer/>

      </main>

    </Router>
    </>
  )
}

export default App