import React from 'react'
import Home from './components/Home'
import FadeInWhenVisible from './components/FadeInWhenVisible'
// import BackToTop from './components/BackToTop.tsx'

type Props = {}

function App({}: Props) {
  return (
    <div>
      {/* <BackToTop /> */}
      <Home />
      <FadeInWhenVisible>
      </FadeInWhenVisible>

    </div>
  )
}

export default App