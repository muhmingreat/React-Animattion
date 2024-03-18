// import React from 'react'
import './app.scss'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <div>
      {/* <Test/> */}
      <section id='Homepage'> 
      <NavBar/>
      <Hero/>
      </section>
      <section id='Services'><Parallax
       type='services'/></section>
      <section ><Services/></section>
      <section id='Portfolio'><Parallax type='portfolio'/></section>
  <Portfolio/>
     <section id='Contact'><Contact/></section>
    </div>
  )
}

export default App