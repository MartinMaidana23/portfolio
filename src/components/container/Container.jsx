/* import React from 'react' */
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Projects from '../projects/Projects'
import Technologies from '../technologies/Technologies'
import './container.css'

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
