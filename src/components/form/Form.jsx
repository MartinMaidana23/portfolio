import React from 'react'
import './form.css'
import Input from './Input'
import useForm from '../hooks/useForm'
import ClipLoader from 'react-spinners/ClipLoader'
import Modal from '../modal/Modal'

const Form = (props) => {

  const {initialForm,lang} = props 
  const {handleChange, handleSubmit, loading, modal} = useForm(initialForm)


  return (
    <div className='form__container' >
        <form className='form' onSubmit={handleSubmit}>
          {Object.entries(initialForm).map(([key], index)=>(
            <Input
              type={key==='text' ? 'text' : key==='email' ? 'email' : key==='phone' ? 'number' : 'text'}
              name={key==='message' ? `${key}` : `user_${key}`}
              placeholder={key.toUpperCase()}
              onChange={handleChange}
              key={index}
            />
          ))}
          <Modal display={modal ? 'block' : 'none'} message={lang==='en'?'Message sent successfully!':'Mensaje enviado con exito!'}/>
          
          <button className='btn'>{!loading && (lang==='en'?'SEND MESSAGE':'ENVIAR MENSAJE')} {loading && <ClipLoader color={'#4ee1a0'}/>}</button>
        </form>
    </div>
  )
}

export default Form