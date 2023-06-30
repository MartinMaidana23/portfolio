/* import React from 'react' */
import {AiFillGithub, AiFillLinkedin, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import Log from '../../assets/Log'

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center py-5 flex-col-reverse w-[50vw] md:w-screen ">

        <h2 className='font-normal text-base w-full flex justify-center items-center md:pb-2' > <AiOutlineCopyrightCircle/>  Martin Maidana 2023 </h2>
         

         <div className="logo-cont my-4 flex justify-center items-center w-full pt-5">
          <Log className={'w-20  h-fit'}/>
         </div>

        <div className="socialMedia flex w-full  justify-between md:mt-4 md:max-w-md">
            <a href="https://github.com/MartinMaidana23" target="_blank" rel="noreferrer" className='link-socialMedia text-[#fff] text-4xl' ><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/martin--maidana/" target="_blank" rel='noreferrer' className='link-socialMedia text-[#fff] text-4xl'><AiFillLinkedin/></a>
            <a href="https://wa.me/5493484372508" target="_blank" rel='noreferrer' className='link-socialMedia text-[#fff] text-4xl'><IoLogoWhatsapp/></a>
        </div>

        

        
    </footer>
  )
}

export default Footer