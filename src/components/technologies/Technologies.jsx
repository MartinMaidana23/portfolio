import React, {useEffect, useRef}from 'react'
import technologies from './technologies.json'
import Technology from './Technology'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import './technologies.css'

const Technologies = () => {


  const techRef = useRef(null)  
  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: techRef.current,
                start: techRef.current.scrollHeight / 6,
                end: techRef.current.scrollHeight ,
                scrub: 2,
            },
        }).fromTo(techRef.current, {opacity:0, duration: 2, x:500,}, {opacity:1, duration: 2, x:0,})

        return () => {
          gsap.killTweensOf(techRef.current)
        }
    }, [])

  
  return (
    <div className='technologies__container box b' ref={techRef}>
      <div className="technologies__title" >
        <h2>Technologies</h2>
      </div>

      <div className={`technologies '} `} >
        {
          technologies.map(({ technology, exp }, index) => (
            <Technology 
              key={index}
              name={technology}
              exp={exp}
            />
          ))
        }
      </div>
    </div>

  )
}

export default Technologies