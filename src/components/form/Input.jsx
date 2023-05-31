import React from 'react'

const Input = (props) => {
    const {type, name, placeholder} = props
  return (
    <>
        <input type={type} name={name} placeholder={placeholder} className='form__input' />
    </>
  )
}

export default Input