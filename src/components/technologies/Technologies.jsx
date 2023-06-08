import React from 'react'
import technologies from './technologies.json'
import Technology from './Technology'
import './technologies.css'
import useGsap from '../hooks/useGsap'

const Technologies = () => {

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
        <h2>Technologies</h2>
      </div>

      <div className={`technologies`} >
        {
          technologies.map(({ technology, exp, hcolor }, index) => (
            <Technology 
              key={index}
              name={technology}
              exp={exp}
              hcolor={hcolor}
            />
          ))
        }
      </div>
    </div>

  )
}

export default Technologies