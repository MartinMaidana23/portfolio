import React from 'react'

const Technology = (props) => {
  const {name, exp} = props
  return (
    <div className='technology'>
      <h2 className='technology'>{name}</h2>
      <h4 className='exp' >{exp}</h4>      
    </div>
  )
}

export default Technology