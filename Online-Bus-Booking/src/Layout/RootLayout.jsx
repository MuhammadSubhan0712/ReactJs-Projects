import React, { useEffect } from 'react'

const RootLayout = ({ children , className }) => {

    // Automatically scroll to top when we navigate to another page. or new page:
    useEffect(()=>{
       window.scrollTo(0, 0)
    },[])
  return (
    <div className={`w-full lg:px-24 md:px-16 sm:px-7 px-4 ${className}`}>
        {children}
    </div>
  )
}

export default RootLayout;