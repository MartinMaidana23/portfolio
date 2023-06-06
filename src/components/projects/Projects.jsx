import React from 'react'
import './projects.css'
import AnchorLink from '../anchorlink/AnchorLink'
import Card from '../card/Card'
import projects from './projects.json'
import useObserver from '../hooks/useObserver'

const Projects = () => {
    const [targetRef, isIntersecting] = useObserver({
        threshold: 1.0,
        rootMargin: '0px 0px -100px 0px'
    })
  return (
    <div className='projects'  >
        <div className="title" ref={targetRef}>
            <h2>Projects</h2>
            <AnchorLink text={'CONTACT ME'} whereTo={'#contact'}/>
        </div>
        <div className={`projects__container ${isIntersecting && 'animate__animated animate__zoomIn'}`}  >
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