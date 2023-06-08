import React, { useState } from 'react'

const Technology = (props) => {
  const {name, exp, hcolor} = props
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseOut = () => {
    setHover(false)
  }

  const componentStyle = {
    color: hover? hcolor : '#fff',
    transition: 'color 0.2s ease-in-out'
  }
  return (
    <div className='technology'>
      <h2 className='technology' style={componentStyle} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}>{name}</h2>
      <h4 className='exp' >{exp}</h4>      
    </div>
  )
}

export default Technology