import React from 'react'

const Modal = ({className = '', children, showed}) =>
  <div className={`modal ${className} ${showed ? 'showed' : 'hidden'}`}>
    <div className='modal__body'>
      {children}
    </div>
  </div>

export default Modal
