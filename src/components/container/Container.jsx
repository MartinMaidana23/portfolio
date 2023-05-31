/* import React from 'react' */
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Technologies from '../technologies/Technologies'
import './container.css'

export const Container = () => {
  return (
    <div className='container'>
        <Header/>
        <Hero/>
        <Technologies/>
    </div>
  )
}

export default Container
