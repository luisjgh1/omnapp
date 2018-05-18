import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userRegister } from '../../redux/actions/user'

import Modal from './Modal'

class ModalSignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  }
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <Modal className='modal--register' {...this.props}>
        <div className="modal__header">
          <h2>Registro</h2>
          <a onClick={this.props.handleClose} >x</a>
        </div>
        <div className="modal__form">
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="EMAIL"
          />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="NOMBRE"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="CONTRASEÑA" />
          <input
            type="password"
            name="repeatPassword"
            value={this.state.repeatPassword}
            onChange={this.handleInputChange}
            placeholder="REPETIR CONTRASEÑA" />
          <button
            onClick={e => {
              const { email, password, name } = this.state
              this.props.dispatch(userRegister({
                email, password, name
              }))
            }}
            >
            REGISTRO
          </button>
        </div>
        <div className="modal__footer">
          <a onClick={this.props.showLogin}>INICIAR SESIÓN</a>
        </div>
      </Modal>
    )
  }
}

export default connect()(ModalSignUp)