import React from 'react'
import './contact.css'
import Form from '../form/Form'
import useObserver from '../hooks/useObserver'

const Contact = () => {

  const [targetRef, isIntersecting] = useObserver({
    threshold: [.1],
    rootMargin: '0px 0px -100px 0px'
  })

  const initialForm ={
    name:'',
    email:'',
    phone:'',
    message:'',
  }

  return (
    <div className={`contact`} id='contact' ref={targetRef}>
        <div className={`title animate__animated ${isIntersecting ? ' animate__zoomIn' : 'animate__zoomOut'}`}>
            <h2>Contact</h2>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        {<Form initialForm={initialForm} />}
    </div>
  )
}

export default Contact