import React, {useEffect, useRef} from 'react'
import './projects.css'
import AnchorLink from '../anchorlink/AnchorLink'
import Card from '../card/Card'
import projectsDev from './projectsDev'
import useGsap from '../hooks/useGsap'


const Projects = (props) => {

    const {lang} = props

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
            <h2>{ lang==='en' ? 'Projects' : 'Proyectos'}</h2>
            <AnchorLink text={lang==='en' ? 'CONTACT ME': 'CONTACTAME'} whereTo={'#contact'}/>
        </div>
        <div className={`projects__container '}`}  >
            {
                projectsDev.map((project, index)=>(
                    <Card
                        key={index}
                        img={project.img}
                        title={project.title}
                        texts={project.texts}
                        btns={project.btns}
                        lang={lang}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Projects