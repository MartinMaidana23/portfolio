import React from 'react'
import techs from './techs'
import Technology from './Technology'
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
    <div className='technologies__container flex flex-col items-center justify-center' ref={refEl}>
      <div className="technologies__title" >
        <h2 className='text-[40px] font-bold mt-12 md:text-7xl xl:text-[88px]' >
          {
              lang==='en' ? 'Technologies' : 'Tecnologias'
          }
        </h2>
      </div>

      <div className={`technologies flex flex-col items-center justify-center gap-5 p-4 m-4 w-full md:flex-row md:flex-wrap md:my-24 md:mx-0 md:w-4/5 md:min-h-[50vh] xl:w-[90%]`} >
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