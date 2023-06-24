import React ,{useEffect, useRef} from 'react'
import AnchorLink from '../anchorlink/AnchorLink'
import './hero.css'
import foto from '../../assets/foto.png'
import useGsap from '../hooks/useGsap'



const Hero = () => {

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
    <div className={`hero`} ref={refEl}>


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
                    timeline={toContact}
                    refEl={refEl}
                />
            </div>

        </div>

        
    </div>
  )
}

export default Hero