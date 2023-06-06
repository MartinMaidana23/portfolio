import React from 'react'
import AnchorLink from '../anchorlink/AnchorLink'
import './hero.css'
import foto from '../../assets/foto.png'
import useObserver from '../hooks/useObserver'
import 'animate.css'



const Hero = (animationIn, duration) => {
    const [targetRef, isIntersecting] = useObserver({
        threshold: 0.9,
    })

  return (
    <div className={`hero ${isIntersecting && 'animate__animated animate__zoomIn'}`} id='aboutMe' ref={targetRef} >


        <div className={"img__container"}>
            <img src={foto} alt="" />
        </div>

        <div className="text__container">

            <div className="hello animate__fadeInDown">
                <h2>Nice to meet you!</h2>
                <h2>I´m <span>Martin Maidana</span></h2>
            </div>

            <div className="description">
                <p>Based in Argentina, I’m a full stack developer passionate about building accessible web apps that users love.</p>
            </div>
            <div className="contact-link">
                <AnchorLink
                    text='CONTACT ME'
                    whereTo='#contact'
                />
            </div>

        </div>

        
    </div>
  )
}

export default Hero