import React, {useEffect, useRef} from 'react'
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
    <div className='projects flex flex-col items-center justify-center my-12 mx-2 w-screen xl:w-[85%]' ref={refEl}>
        <div className="title mb-5 w-[95%] flex justify-between items-center md:w-[90%] xl:w-[85%]" >
            <h2 className='text-[40px] font-bold md:text-7xl xl:text-[88px]' >{ lang==='en' ? 'Projects' : 'Proyectos'}</h2>
            <AnchorLink className={'m-0 p-0 xl:text-3xl'} text={lang==='en' ? 'CONTACT ME': 'CONTACTAME'} whereTo={'#contact'}/>
        </div>
        <div className={`projects__container md:flex md:justify-center md:flex-row md:flex-wrap md:w-[95%] md:gap-5 xl:gap-10`}  >
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