import React from 'react'
import Home from './components/Home'
import BackToTop from './components/BackToTop'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Footer from './components/Footer'
// import NavBar from './components/NavBar'

type Props = {}

function App({}: Props) {
  return (
    <div>
      <BackToTop />
      {/* <NavBar /> */}
      <Home />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  )
}

export default App