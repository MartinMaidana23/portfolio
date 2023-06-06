/* import React from 'react' */
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import useObserver from '../hooks/useObserver'
import Projects from '../projects/Projects'
import Technologies from '../technologies/Technologies'
import './container.css'
import 'animate.css'
import { Animated } from 'react-animated-css'


export const Container = () => {

  return (
      <div className='container'>
          
        
        <Header/>
        <Hero/>
        <hr />
        <Technologies/>
        <hr />
        <Projects/> 
        <Contact/>
        <Footer/>
          
      </div>
  )
}

export default Container
