import React from 'react'
import './anchorlink.css'

const AnchorLink = (props) => {
    const {text, whereTo} = props
  return (
    <>
        <a className='link' href={whereTo}>{text}</a>
    </>
  )
}

export default AnchorLink