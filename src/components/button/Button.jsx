import React from 'react'

const Button = (props) => {
    const {text, direct} = props
  return (
    <>
        <button className='btn' ><a href={direct}></a>{text}</button>
    </>
  )
}

export default Button