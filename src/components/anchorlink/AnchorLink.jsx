import React from 'react'

const AnchorLink = (props) => {
    const {text, whereTo, disabled, className} = props

  return (
    <>
        <a className={`link ${className} bg-none m-3.5 no-underline text-base pb-3 border-b-2 hover:cursor-pointer hover:-translate-y-1.5 active:translate-y-1.5 transition-all duration-300 `} target={whereTo === '#contact' ? '_self' : '_blank'} href={whereTo} aria-disabled={disabled}>{text}</a>
    </>
  )
}

export default AnchorLink