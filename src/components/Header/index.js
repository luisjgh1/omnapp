import React from 'react'
import { connect } from 'react-redux'
import omniLogo from '../../assets/logo-omni-dark.svg'

const Header = props =>
  <div className='header'>
    <div className='header__blue'>
      <h3 className='back'>Volver al home</h3>
      {props.displayName
        ? <h3>{props.displayName}</h3>
        : <button
          onClick={props.handleClickLogIn}
          className='login-btn'
        >
          Iniciar Sesión
        </button>
      }
      <img src={omniLogo} />
    </div>
    <div className='header__orange'>
      <h3>Calcula la tarifa de tu servicio con Omni Cargo</h3>
    </div>
  </div>

const mapStateToProps = ({user: { displayName }}) => ({displayName})

export default connect(mapStateToProps)(Header)
