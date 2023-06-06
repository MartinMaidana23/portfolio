import React from 'react'
import technologies from './technologies.json'
import Technology from './Technology'
import './technologies.css'
import useObserver from '../hooks/useObserver'

const Technologies = () => {
  const [targetRef, isIntersecting] = useObserver({
    threshold: 1.0,
})
  return (
    <>
      <div className="technologies__title" ref={targetRef}>
        <h2>Technologies</h2>
      </div>

      <div className={`technologies ${isIntersecting && 'animate__animated animate__zoomIn animate__faster	'} `} >
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
    </>

  )
}

export default Technologies