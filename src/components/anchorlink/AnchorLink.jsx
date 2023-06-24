import React from 'react'
import './anchorlink.css'

const AnchorLink = (props) => {
    const {text, whereTo, disabled} = props

  return (
    <>
        <a className='link' target={whereTo === '#contact' ? '_self' : '_blank'} href={whereTo} aria-disabled={disabled}>{text}</a>
    </>
  )
}

export default AnchorLink