// import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'


export default function About() {
  return (
    <div>
      <NavBar />
      <div className="w-99vh min-h-screen p-6 bg-gray-700 text-white">
        <div className="py-[70px]">
          LinkedIn: <a href="https://linkedin.com/in/tracycchang/" className="font-medium text-[#FE8A95] hover:text-[#FEAD98]">
            @tracycchang </a>
          <br></br>
          GitHub: <a href="https://github.com/tracycchang/" className="font-medium text-[#FE8A95] hover:text-[#FEAD98]">
            @tracycchang </a>
          <br></br>    
          Email: hello@tracychang.io          
              
        </div>
      </div>
      <Footer />
    </div>
  )
}