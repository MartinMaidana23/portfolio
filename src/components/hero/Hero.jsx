/* import React from 'react' */
import AnchorLink from '../anchorlink/AnchorLink'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero' id='aboutMe' >

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
        <hr />
    </div>
  )
}

export default Hero