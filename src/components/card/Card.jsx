import React from 'react'
import AnchorLink from '../anchorlink/AnchorLink'
import './card.css'

const Card = (props) => {
    const {img, title, texts, btns, lang} = props
  return (
    <div className='card' >
        <div className="card__img-container">
          <img src={img} alt={title} className='card__img' />
        </div>
        <div className="card__description">
          <h3 className='card__title'>{lang==='en' ? title[0] : title[1]}</h3>
          <div className="card__subtitle">
            {
              texts.map((text, index)=>(
                <p className='card__text' key={index}>{text}</p>
              ))
            }
          </div>
          
        </div>
        <div className="card__link">
            {
              btns.map(({text, whereTo, disabled},index )=>(
                <AnchorLink text={lang==='en' ? text[0] : text[1]} whereTo={whereTo} disabled={disabled} key={index} />
              ))
            }
          </div>
    </div>
  )
}

export default Card