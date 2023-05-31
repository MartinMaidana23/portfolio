import React from 'react'
import './contact.css'
import Form from '../form/Form'

const Contact = () => {
  return (
    <div className='contact' id='contact' >
        <div className="title">
            <h2>Contact</h2>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        {<Form/>}
    </div>
  )
}

export default Contact