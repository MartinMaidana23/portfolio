import React from 'react'
import AnchorLink from '../anchorlink/AnchorLink'
import './card.css'

const Card = (props) => {
    const {img, title, texts, btns} = props
  return (
    <div className='card' >
        <div className="card__img-container">
          <img src={img} alt={title} className='card__img' />
        </div>
        <div className="card__description">
          <h3 className='card__title'>{title}</h3>
          <div className="card__subtitle">
            {
              texts.map((text)=>(
                <p className='card__text'>{text}</p>
              ))
            }
          </div>
          
        </div>
        <div className="card__link">
            {
              btns.map(({text, whereTo})=>(
                <AnchorLink text={text} whereTo={whereTo} />
              ))
            }
          </div>
    </div>
  )
}

export default Card