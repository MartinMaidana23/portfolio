import React from 'react'

const Modal = (props) => {
    const {display, message} = props
  return (
    <div className='modal bg-zinc-900 ' style={{display: display}}>
        <div className="modal__container">
            <h2 className='tracking-wide' >{message}</h2>
        </div>
    </div>
  )
}

export default Modal