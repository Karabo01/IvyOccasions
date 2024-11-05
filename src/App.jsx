import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Fellowships from './Components/Fellowships/Fellowships'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Leaders from './Components/Leaders/Leaders'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Giving from './Components/Giving/Giving'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title title='Our Services'/>
        <Fellowships/>
        {/* <About/> */}
        {/* <Title title='Meet our Leaders'/>
        <Leaders/> */}
        <Title title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App