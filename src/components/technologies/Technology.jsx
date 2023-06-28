import React, { useState } from 'react'

const Technology = (props) => {
  const {name, exp, hcolor} = props
  const [hover, setHover] = useState(false)
  const {lang} = props

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
    <div className='technology flex justify-center flex-col items-center'>
      <h2 className='technology flex justify-center flex-col items-center cursor-default text-3xl font-bold md:text-5xl xl:text-7xl' style={componentStyle} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}>{name}</h2>
      <h4 className='exp text-base font-normal text-[#d9d9d9] md:text-lg ' >{lang==='en' ? exp[0] :exp[1]}</h4>      
    </div>
  )
}

export default Technology