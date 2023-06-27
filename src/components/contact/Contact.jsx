import React, {useEffect, useRef} from 'react'
import './contact.css'
import Form from '../form/Form'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useGsap from '../hooks/useGsap'

const Contact = (props) => {

  const {lang} = props

  const initialForm ={
    name:'',
    email:'',
    phone:'',
    message:'',
  }

  const {refEl} = useGsap(
    '-30% 40%',
    '10% 20%',
    false,
    5, 
    [],
    [],
    [
      {
        target: '.contact',
        from: {opacity:0,duration: 2, },
        to: {opacity:1,duration: 2, }
      }
    ]
)

  return (
    <div className={`contact`} id='contact' ref={refEl}>
        <div className={`title`}>
            <h2>{lang==='en'?'Contact':'Contacto'}</h2>
            <p>{lang==='en'?'I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.' :'Me encantaria escuchar sobre tu proyecto y como podria ayudar, por favor llena el formulario y te voy a contestar lo mas rapido posible' }</p>
        </div>
        {<Form initialForm={initialForm} lang={lang} />}
    </div>
  )
}

export default Contact