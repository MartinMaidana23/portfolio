import React from 'react'
import './button.css'

const Button = (props) => {
    const {text, whereTo} = props
  return (
    <>
        <button className='btn' ><a href={whereTo}></a>{text}</button>
    </>
  )
}

export default Button