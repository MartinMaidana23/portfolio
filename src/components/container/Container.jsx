/* import React from 'react' */
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
        <Technologies/>
        <Projects/> 
    </div>
  )
}

export default Container
