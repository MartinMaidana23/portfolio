import React from 'react'
import AnchorLink from '../anchorlink/AnchorLink'

const Card = (props) => {
    const {img, title, texts, btns, lang} = props
  return (
    <div className=
    'card w-[95vw] flex flex-col justify-between items-center my-12 mx-0 md:w-[48%] xl:w-[45%] ' 
    >
        <div className=
        "card__img-container w-full flex flex-col justify-center items-center "
        >
          <img src={img} alt={title} className=
          'card__img w-full object-fit object-center '
           />
        </div>
        <div className=
        "card__description w-full flex flex-col justify-start items-start gap-3 my-2 mx-0 "
        >
          <h3 className='card__title text-lg font-bold md:text-2xl xl:text-3xl'>{lang==='en' ? title[0] : title[1]}</h3>
          <div className=
          "card__subtitle flex flex-row gap-5 "
          >
            {
              texts.map((text, index)=>(
                <p className='card__text text-[#d9d9d9] font-medium md:text-lg xl:text-2xl' key={index}>{text}</p>
              ))
            }
          </div>
          
        </div>
        <div className=
        "card__link w-full flex flex-row gap-5 my-2 mx-0"
        >
            {
              btns.map(({text, whereTo, disabled},index )=>(
                <AnchorLink text={lang==='en' ? text[0] : text[1]} whereTo={whereTo} disabled={disabled} key={index} className={'m-0'} />
              ))
            }
          </div>
    </div>
  )
}

export default Card