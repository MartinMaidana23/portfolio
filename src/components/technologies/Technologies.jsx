import React, {useEffect}from 'react'
import technologies from './technologies.json'
import Technology from './Technology'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import './technologies.css'

const Technologies = () => {


  const technologiesContainer = document.querySelector('.technologies__container')
  gsap.registerPlugin(ScrollTrigger)
    
    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: technologiesContainer,
                markers: true,
                start: 'top top',
                end: '+=1000 0%',
                scrub: 2,
            },
        })
        timeline.to(technologiesContainer, {opacity:1, duration: 2, y:-500,})
    }, [])

  
  return (
    <div className='technologies__container box b'>
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