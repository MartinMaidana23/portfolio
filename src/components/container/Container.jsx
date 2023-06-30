/* import React from 'react' */
import { useContext, useState } from 'react'
import { LangContext } from '../../context/LangProvider'
import ClipLoader from 'react-spinners/ClipLoader'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Projects from '../projects/Projects'
import Technologies from '../technologies/Technologies'


export const Container = () => {

  const {lang, setLang} = useContext(LangContext)
 
  return (

      <div className='container w-screen flex justify-between items-center flex-col'>

          <Header
          lang={lang}
          setLang={setLang}
          />
          <Hero
            lang={lang}
          />
          <hr className='border-zinc-400' />
          <Projects
            lang={lang}
          />
          <Technologies
            lang={lang}
          />
          <hr className='border-zinc-400' />
          <Contact
            lang={lang}
          />
          <Footer
            lang={lang}
          />
      </div>
      
  )
}

export default Container
