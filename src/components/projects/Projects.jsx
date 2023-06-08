import React, {useEffect, useRef} from 'react'
import './projects.css'
import AnchorLink from '../anchorlink/AnchorLink'
import Card from '../card/Card'
import projects from './projects.json'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useGsap from '../hooks/useGsap'


const Projects = () => {

    const {refEl} = useGsap(
        '-30% 40%',
        '10% 20%',
        false,
        3, 
        [],
        [],
        [
          {
            target: '.projects__container',
            from: {opacity:0,duration: 2, },
            to: {opacity:1,duration: 2, }
          }
        ]
    )

    
  return (
    <div className='projects' ref={refEl}>
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