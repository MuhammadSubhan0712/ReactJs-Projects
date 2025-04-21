import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Components/Footer'

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