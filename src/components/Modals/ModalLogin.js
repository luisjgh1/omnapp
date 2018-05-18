import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userlogin } from '../../redux/actions/user'
import Modal from './Modal'

class ModalLogin extends Component {
  state = {
    email: '',
    password: ''
  }
  handleInputChange = ({target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }
  render () {
    return (
      <Modal {...this.props} >
        <div className="modal__header">
          <h2>Ingresar</h2>
          <a onClick={this.props.handleClose} >x</a>
        </div>
        <div className="modal__form">
          <input
            type="text"
            name="email"
            value={this.state.user}
            onChange={this.handleInputChange}
            placeholder="EMAIL"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="CONTRASEÑA"
          />
          <button
            onClick={e => {
            const { email, password } = this.state
              this.props.dispatch(userlogin({email, password}))
            }}
          >
            INICIAR SESIÓN
          </button>
        </div>
        <div className="modal__footer">
          <p>¿OLVIDÓ SU PASSWORD?</p>
          <a
            onClick={this.props.showSignup}
          >
            CREAR CUENTA
          </a>
        </div>
      </Modal>
    )
  }
}

export default connect()(ModalLogin)