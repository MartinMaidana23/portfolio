import React from 'react'
import './button.css'

const Button = (props) => {
    const {text, direct} = props
  return (
    <>
        <button className='btn' ><a href={direct}></a>{text}</button>
    </>
  )
}

export default Button