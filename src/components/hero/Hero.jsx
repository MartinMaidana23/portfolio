import React ,{useEffect, useRef} from 'react'
import AnchorLink from '../anchorlink/AnchorLink'
import './hero.css'
import foto from '../../assets/foto.png'
import useGsap from '../hooks/useGsap'



const Hero = () => {

    const {refEl, timeline} = useGsap(
        '33% top',
        'bottom bottom',
        false,
        5, 
        [
            {
                target:'.text__container',
                params:{opacity:0, x: -300}
            },
            {
                target:'.img__container',
                params:{opacity:0,x: 300}
            }
        ])

    
  return (
    <div className={`hero box a`} ref={refEl}>


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