import React from 'react'

const Input = (props) => {
    const {type, name, placeholder, onChange} = props
  return (
    <>
        <input type={type} name={name} placeholder={placeholder} className='form__input w-full mb-5 text-base border-solid border-b-2 border-white p-4 bg-transparent focus:outline-none font-sans font-medium md:text-base xl:text-2xl' onChange={onChange} />
    </>
  )
}

export default Input