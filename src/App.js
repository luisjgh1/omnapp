import React, { Component } from 'react'
import { auth } from './utils/firebase'
import { connect } from 'react-redux'
import { userInitialData } from './redux/actions/user'

import Header from './components/Header'
import ModalSearching from './components/Modals/ModalSearching'
import Map from './components/Map'
import ModalLogin from './components/Modals/ModalLogin'
import CardList from './components/Cards/CardList'
import ModalSignUp from './components/Modals/ModalSignUp'
import './App.css'

class App extends Component {
  state = {
    showModalLogin: false,
    showModalSearching: false,
    showModalSignUp: false,
  }

  // The session on firebase will persist even if
  // the page is closed we need to load this data on redux
  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName } = user
        this.props.dispatch(userInitialData({
          uid,
          displayName
        }))
        // Because the socket is open we simply
        // unmount the modal components whenever the user log in
        this.setState({
          showModalLogin: false,
          showModalSignUp: false
        })
      }
    })
  }

  toggleModalLogin = () => {
    this.setState({
      showModalLogin: !this.state.showModalLogin
    })
  }

  toggleModalSignUp = () => {
    this.setState({
      showModalSignUp: !this.state.showModalSignUp
    })
  }

  switchModals = () => {
    this.toggleModalLogin()
    this.toggleModalSignUp()
  }

  render () {
    return (
      <div className='app'>
        <CardList
          cards={[
            {content: '50 kg', title: '¿Cuánto pesa tu envío?', color: 'blue'},
            {content: 'TUPAPA', title: 'ETC', color: 'white'},
            {content: 'TUPAPA', title: 'ETC', color: 'white'}
          ]}/>
        <Header handleClickLogIn={this.toggleModalLogin} />
        <Map />
        <ModalSearching/>
        <ModalLogin
          handleClose={this.toggleModalLogin}
          showSignup={this.switchModals}
          showed={this.state.showModalLogin}
          />
        <ModalSignUp
          handleClose={this.toggleModalSignUp}
          showLogin={this.switchModals}
          showed={this.state.showModalSignUp}
          />
      </div>
    )
  }
}

export default connect()(App)
