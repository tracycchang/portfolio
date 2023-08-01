import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'


export default function Contact() {

  return (
    <div>
      <NavBar />
      <div className="w-99vh min-h-screen bg-[#686868] p-6 flex flex-row text-white">
        {/* <div className="flex-shrink-1 w-[1200px] py-[70px] pl-[200px] pr-4"> */}
          LinkedIn: <a href="https://linkedin.com/in/tracycchang/" className="font-medium text-[#cdcdcd] hover:text-[#9cb59d]">
                    @tracycchang
                  </a>
          GitHub: <a href="https://github.com/tracycchang/" className="font-medium text-[#cdcdcd] hover:text-[#9cb59d]">
                    @tracycchang
                  </a>      
          Email: tracychang@gmail.com
                      
              
        {/* </div> */}
      </div>
      <Footer />
    </div>
  )
}