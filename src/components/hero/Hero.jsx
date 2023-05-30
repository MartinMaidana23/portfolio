/* import React from 'react' */
import Button from '../button/Button'
import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>

        <div className="hello">
            <h2>Nice to meet you!</h2>
            <h2>I´m <span>Martin Maidana</span></h2>
        </div>

        <div className="description">
            <p>Based in Argentina, I’m a full stack developer passionate about building accessible web apps that users love.</p>
        </div>
        <div className="contact-btn">
            <Button
                text='CONTACT ME'
                direct='#contact'
            />
        </div>
        <hr />
    </div>
  )
}

export default Hero