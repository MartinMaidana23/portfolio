import React, {useEffect, useRef} from 'react'
import './projects.css'
import AnchorLink from '../anchorlink/AnchorLink'
import Card from '../card/Card'
import projects from './projects.json'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Projects = () => {

    const projectRef = useRef(null)  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: projectRef.current,
                markers: true,
                start: projectRef.current.scrollHeight / 3,
                end: projectRef.current.scrollHeight,
                scrub: 3,
            },
        }).fromTo(projectRef.current, {opacity:0, duration: 2, y:1000, x:1000}, {opacity:1, duration: 2, y:0,x:0})

        return () => {
          gsap.killTweensOf(projectRef.current)
        }
    }, [])

    
  return (
    <div className='projects box c' ref={projectRef}>
        <div className="title" >
            <h2>Projects</h2>
            <AnchorLink text={'CONTACT ME'} whereTo={'#contact'}/>
        </div>
        <div className={`projects__container '}`}  >
            {
                projects.map((project, index)=>(
                    <Card
                        key={index}
                        img={project.img}
                        title={project.title}
                        texts={project.texts}
                        btns={project.btns}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Projects