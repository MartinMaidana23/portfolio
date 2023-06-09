/* import React from 'react' */
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useContext } from 'react'
import { LangContext } from '../../context/LangProvider'
import Log from '../../assets/Log'

const Header = () => {

  const {handleLangChange, lang} = useContext(LangContext)
  
  return (
    <>
      <div className="invisible h-5 w-screen bg-transparent">
        
      </div>
      <header className="header flex justify-center items-center flex-col w-[50vw] gap-5  md:flex-row md:my-0 md:mx-5 md:p-5 md:w-screen md:justify-between md:fixed md:top-0 md:z-50 md:bg-zinc-950/95 md:backdrop-blur-sm xl:justify-around xl:w-screen">
          
          <div className="log-cont flex items-center justify-center">
            <Log className={'h-fit pt-1.5 w-10'}/>
            <h1 className='font-normal text-2xl md:text-3xl'>{lang==='en' ?'artin Maidana' : 'artín Maidana'}</h1>
          </div>
          <div className="socialMedia flex w-full justify-between items-center md:w-4/12 ">
              <button className='text-white text-[1.5rem] border-b-2 border-[#4ee1a0] hover:-translate-y-1 active:translate-y-3 transition-all duration-500' onClick={handleLangChange} >{lang==='en' ? 'EN': 'ES'}</button>
              <a href="https://github.com/MartinMaidana23" target="_blank" rel="noreferrer" className='link-socialMedia text-white text-[2rem] p-1 rounded-xl hover:bg-[#333] transition-all' ><AiFillGithub/></a>
              <a href="https://www.linkedin.com/in/martin--maidana/" target="_blank" rel='noreferrer' className='link-socialMedia text-white text-[2rem] p-1 rounded-xl hover:bg-[#0e76a8] transition-all'><AiFillLinkedin/></a>
              <a href="https://wa.me/5493484372508" target="_blank" rel='noreferrer' className='link-socialMedia text-white text-[2rem] p-1 rounded-xl hover:bg-[#25D366] transition-all'><IoLogoWhatsapp/></a>
          </div>
      </header>
    </>
  )
}

export default Header