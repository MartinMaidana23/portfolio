import React from 'react'
import './modal.css'

const Modal = (props) => {
    const {display, message} = props
  return (
    <div className='modal' style={{display: display}}>
        <div className="modal__container">
            <h2>{message}</h2>
        </div>
    </div>
  )
}

export default Modal