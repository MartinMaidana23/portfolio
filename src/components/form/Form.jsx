import React from 'react'
import './form.css'
import Input from './Input'

const Form = () => {
  return (
    <div className='form__container' >
        <form action="https://formspree.io/f/xnqoqjzq" method="POST" className='form'>
          <Input type='text' name='name' placeholder='NAME' />
          <Input type='email' name='email' placeholder='EMAIL' />
          <Input type='text' name='message' placeholder='MESSAGE' />
          <button className='btn'>SEND MESSAGE</button>
        </form>
    </div>
  )
}

export default Form