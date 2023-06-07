import React ,{useEffect, useRef} from 'react'
import AnchorLink from '../anchorlink/AnchorLink'
import './hero.css'
import foto from '../../assets/foto.png'
import 'animate.css'
import  gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const Hero = () => {

    const heroRef = useRef(null)

    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: heroRef.current.scrollHeight / 2,
                scrub: 3,
            },
        }).to(heroRef.current, {opacity:0, duration: 1, x:900,})

        return () => {
            gsap.killTweensOf(heroRef.current)
        }
        
    }, [])
    
  return (
    <div className={`hero box a`} ref={heroRef}>


        <div className={"img__container"}>
            <img src={foto} alt="" />
        </div>

        <div className="text__container">

            <div className="hello">
                <h2>Nice to meet you!</h2>
                <h2>I´m <span>Martin Maidana</span></h2>
            </div>

            <div className="description">
                <p>Based in Argentina, I’m a <span>full stack developer</span> passionate about building accessible web apps that users love.</p>
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