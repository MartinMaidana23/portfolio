import React, {useEffect, useRef} from 'react'
import './contact.css'
import Form from '../form/Form'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {

  const initialForm ={
    name:'',
    email:'',
    phone:'',
    message:'',
  }

  const contactRef = useRef(null)  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: contactRef.current,
                start: '-60% top',
                end: 'bottom bottom',
                scrub: 2,
            },
        }).fromTo(contactRef.current, 
          {
            opacity:0, 
            duration: 2, 
          }, 
          {
            opacity:1, 
            duration: 2, 
          })

        return () => {
          gsap.killTweensOf(contactRef.current)
        }
    }, [])

  return (
    <div className={`contact`} id='contact' ref={contactRef}>
        <div className={`title`}>
            <h2>Contact</h2>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        {<Form initialForm={initialForm} />}
    </div>
  )
}

export default Contact