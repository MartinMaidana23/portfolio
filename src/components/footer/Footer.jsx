/* import React from 'react' */
import {AiFillGithub, AiFillLinkedin, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">

        <h2> <AiOutlineCopyrightCircle/> Martin Maidana 2023</h2>

        <div className="socialMedia">
            <a href="https://github.com/MartinMaidana23" target="_blank" rel="noreferrer" className='link-socialMedia' ><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/martin--maidana/" target="_blank" rel='noreferrer' className='link-socialMedia'><AiFillLinkedin/></a>
            <a href="https://wa.me/5493484372508" target="_blank" rel='noreferrer' className='link-socialMedia'><IoLogoWhatsapp/></a>
        </div>

        
    </footer>
  )
}

export default Footer