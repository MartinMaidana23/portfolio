import React from 'react'

const Input = (props) => {
    const {type, name, placeholder, onChange} = props
  return (
    <>
        <input type={type} name={name} placeholder={placeholder} className='form__input' onChange={onChange} />
    </>
  )
}

export default Input