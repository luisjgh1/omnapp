import React from 'react'

import Modal from './Modal'

const ModalSearching = props =>
  <Modal className='modal-searching' {...props}>
    <div className='modal-searching__container'>
      <h1>ESTAMOS BUSCANDO</h1>
      <h1>EL CONDUCTOR IDEAL</h1>
      <h1>PARA LLEVAR TU CARGA</h1>
      <div className='separator' />
      <h3>SI ESTE PEDIDO FUE REALIZADO ANTES</h3>
      <h3>DE LAS 8PM TE CONTACTAREMOS</h3>
      <h3>EN MENOS DE 20 MINUTOS PARA</h3>
      <h3>CONFIRMAR TU SERVICIO</h3>
    </div>
  </Modal>

export default ModalSearching
