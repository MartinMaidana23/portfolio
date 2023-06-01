/* import React from 'react' */
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import './header.css'

const Header = () => {
  return (
    <>
      <div className="invisible">
        
      </div>
      <header className="header">
          <h1>Martin Maidana</h1>
          <div className="socialMedia">
              <a href="https://github.com/MartinMaidana23" target="_blank" rel="noreferrer" className='link-socialMedia' ><AiFillGithub/></a>
              <a href="https://www.linkedin.com/in/martin--maidana/" target="_blank" rel='noreferrer' className='link-socialMedia'><AiFillLinkedin/></a>
              <a href="https://wa.me/5493484372508" target="_blank" rel='noreferrer' className='link-socialMedia'><IoLogoWhatsapp/></a>
          </div>
      </header>
    </>
  )
}

export default Header