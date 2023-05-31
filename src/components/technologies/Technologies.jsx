import React from 'react'
import technologies from './technologies.json'
import Technology from './Technology'
import './technologies.css'

const Technologies = () => {
  return (
    <div className='technologies'>
      {
        technologies.map(({ technology, exp }, index) => (
          <Technology 
            key={index}
            name={technology}
            exp={exp}
          />
        ))
      }
    <hr/>

    </div>

  )
}

export default Technologies