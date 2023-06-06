import React ,{useEffect} from 'react'
import AnchorLink from '../anchorlink/AnchorLink'
import './hero.css'
import foto from '../../assets/foto.png'
import 'animate.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'



const Hero = () => {

    const hero = document.querySelector('.hero')
    gsap.registerPlugin(ScrollTrigger)
    
    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: hero,
                markers: true,
                start: 'top top',
                end: '+=1000 0%',
                scrub: 3,
            },
        })
        timeline.to(hero, {opacity:0, duration: 2, y:-500,})
    }, [])
    
  return (
    <div className={`hero box a`}>


        <div className={"img__container"}>
            <img src={foto} alt="" />
        </div>

        <div className="text__container">

            <div className="hello">
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