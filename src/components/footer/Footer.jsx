/* import React from 'react' */
import {AiFillGithub, AiFillLinkedin, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center flex-col w-[50vw] md:w-screen md:flex-col-reverse">

        <h2 className='font-normal text-base w-full flex justify-center items-center md:pb-2' > <AiOutlineCopyrightCircle/> Martin Maidana 2023</h2>

        <div className="socialMedia flex w-full justify-between md:mt-4 md:w-2/6">
            <a href="https://github.com/MartinMaidana23" target="_blank" rel="noreferrer" className='link-socialMedia text-[#fff] text-4xl' ><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/martin--maidana/" target="_blank" rel='noreferrer' className='link-socialMedia text-[#fff] text-4xl'><AiFillLinkedin/></a>
            <a href="https://wa.me/5493484372508" target="_blank" rel='noreferrer' className='link-socialMedia text-[#fff] text-4xl'><IoLogoWhatsapp/></a>
        </div>

        
    </footer>
  )
}

export default Footer