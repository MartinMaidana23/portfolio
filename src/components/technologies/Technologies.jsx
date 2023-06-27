import React from 'react'
import techs from './techs'
import Technology from './Technology'
import './technologies.css'
import useGsap from '../hooks/useGsap'

const Technologies = (props) => {

  const {lang} = props

  const {refEl} = useGsap(
    '-40% 40%',
    '10% 20%',
    false,
    1, 
    [],
    [],
    [
      {
        target: '.technologies',
        from: {opacity:0,duration: 2},
        to: {opacity:1,duration: 2}
      }
    ]
  )
  
  return (
    <div className='technologies__container' ref={refEl}>
      <div className="technologies__title" >
        <h2>
          {
              lang==='en' ? 'Technologies' : 'Tecnologias'
          }
        </h2>
      </div>

      <div className={`technologies`} >
        {
          techs.map(({ technology, exp, hcolor }, index) => (
            <Technology 
              key={index}
              name={technology}
              exp={exp}
              hcolor={hcolor}
              lang={lang}
            />
          ))
        }
      </div>
    </div>

  )
}

export default Technologies