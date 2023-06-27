import React from 'react'
import Form from '../form/Form'
import useGsap from '../hooks/useGsap'

const Contact = (props) => {

  const {lang} = props

  const initialForm ={
    name:'',
    email:'',
    phone:'',
    message:'',
  }

  const {refEl} = useGsap(
    '-30% 40%',
    '10% 20%',
    false,
    5, 
    [],
    [],
    [
      {
        target: '.contact',
        from: {opacity:0,duration: 2, },
        to: {opacity:1,duration: 2, }
      }
    ]
)

  return (
    <div className=
                {`

contact bg-[#242424] w-screen h-screen flex items-center justify-center flex-col
                
                `} 
    id='contact' ref={refEl}>
        <div className=
                      {`
                      title w-[90%] mt-7 flex flex-col items-center xl:w-3/5 xl:justify-center xl:items-center
                      `}
        >
            <h2 className='text-4xl font-bold md:text-7xl xl:text-[88px]' >{lang==='en'?'Contact':'Contacto'}</h2>
            <p className='font-normal text-base text-center text-[#d9d9d9] md:text-lg xl:text-2xl w-3/5' >{lang==='en'?'I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.' :'Me encantaria escuchar sobre tu proyecto y como podria ayudar, por favor llena el formulario y te voy a contestar lo mas rapido posible' }</p>
        </div>
        {<Form initialForm={initialForm} lang={lang} />}
    </div>
  )
}

export default Contact