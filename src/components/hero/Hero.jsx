import React, { useState } from 'react'
import AnchorLink from '../anchorlink/AnchorLink'
import ClipLoader from 'react-spinners/ClipLoader'
import foto from '../../assets/foto.webp'
import useGsap from '../hooks/useGsap'



const Hero = (props) => {

    const {lang} = props

    

    const {refEl, toContact} = useGsap(
        '33% top',
        'bottom bottom',
        false,
        3, 
        [
            {
                target:'.text__container',
                params:{opacity:0, x: -100}
            },
            {
                target:'.img__container',
                params:{opacity:0,x: 300}
            }
        ]
    )

    
  return (

    
    <div className=
     " hero p-4 flex flex-col gap-20 items-center overflow-hidden h-full md:flex-row md:flex-wrap md:relative md:min-h-[80vh] xl:m-0 xl:relative " 
     ref={refEl}>


        <div className={
            "img__container flex justify-center items-center max-w-[50%] md:absolute md:h-full md:max-w-lg top-0 right-0 -z-10 "
            }>
            <img src={foto} className='w-full grayscale' alt="" />
        </div>

        <div className="text__container md:flex md:flex-col md:items-start md:w-3/5 xl:items-center xl:justify-center xl:h-full xl:gap-5 ">

            <div className=
            "hello flex justify-center items-center flex-wrap mb-4 "
            >
                {lang==='en' ?
                
                <>
                    <h2 className='text-center font-bold text-4xl m-1 md:text-7xl md:text-left md:m-0 md:w-full xl:text-8xl' >Nice to meet you!</h2>
                    <h2 className='text-center font-bold text-4xl m-1 md:text-7xl md:text-left md:m-0 md:w-full xl:text-8xl' >I´m <span className='underline decoration-[#4ee1a0]' >Martin Maidana</span></h2>
                </>
                :
                <>
                    <h2 className='text-center font-bold text-3xl m-1 md:text-7xl md:text-left md:m-0 md:w-full xl:text-[88px]' >Un placer conocerte!</h2>
                    <h2 className='text-center font-bold text-3xl m-1 md:text-7xl md:text-left md:m-0 md:w-full xl:text-[88px]' >Soy <span className='underline decoration-[#4ee1a0]' >Martin Maidana</span></h2>
                </>
                }
                
            </div>

            <div className=
            "description flex justify-center items-center flex-wrap"
            >
                {lang==='en'
                    ?
                        <>
                            <p className='text-center text-base font-medium m-0 text-[#d9d9d9] leading-7 md:w-full md:text-lg md:text-left drop-shadow xl:text-2xl xl:leading-10 xl:tracking-wider' >Based in Argentina, I’m a <span className='underline decoration-[#4ee1a0]' >Full Stack developer</span> passionate about building accessible web apps that users love.</p>
                        </>
                    :
                        <>
                            <p className='text-center text-base font-medium m-0 text-[#d9d9d9] leading-7 md:w-full md:text-lg md:text-left drop-shadow xl:text-2xl xl:leading-10 xl:tracking-wider' >Con base en Argentina, soy un <span className='underline decoration-[#4ee1a0]' >desarrollador Full Stack</span> apasionado por construir aplicaciones web accesibles que los usuarios amen.</p>
                        </>
                    }
                
            </div>
            <div className="contact-link flex justify-center items-center">
                <AnchorLink
                    text={lang==='en' ? 'CONTACT ME': 'CONTACTAME'}
                    whereTo='#contact'
                    timeline={toContact}
                    refEl={refEl}
                    className={'ml-0 xl:text-4xl'}
                />
            </div>

        </div>

        
    </div>
  )
}

export default Hero