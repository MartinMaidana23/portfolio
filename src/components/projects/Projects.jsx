import React from 'react'
import './projects.css'
import Button from '../button/Button'
import Card from '../card/card'
import projects from './projects.json'

const Projects = () => {
  return (
    <div className='projects' >
        <div className="title">
            <h2>Projects</h2>
            <Button text='CONTACT ME' whereTo='#contact' />
        </div>
        <div className="projects__container">
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