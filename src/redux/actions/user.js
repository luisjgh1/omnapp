import { auth } from '../../utils/firebase'

// REGISTER
export const USER_REGISTER_STARTED = 'USER_REGISTER_STARTED'
export const USER_REGISTER_DONE = 'USER_REGISTER_DONE'
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR'

const registerStarted = () => ({
  type: USER_REGISTER_STARTED
})

const registerDone = payload => ({
  type: USER_REGISTER_DONE,
  payload
})

const registerError = error => ({
  type: USER_REGISTER_ERROR,
  error
})

export const userRegister = ({ email, password, name: displayName }) => async dispatch => {
  dispatch(registerStarted())
  try {
    await auth.createUserWithEmailAndPassword(email, password)
    dispatch(registerDone({displayName}))
    await auth.currentUser.updateProfile({ displayName })
  } catch (error) {
    dispatch(registerError(error))
  }
}

// LOGIN
export const USER_LOGIN_STARTED = 'USER_LOGIN_STARTED'
export const USER_LOGIN_DONE = 'USER_LOGIN_DONE'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

const loginStarted = () => ({
  type: USER_LOGIN_STARTED
})

const loginDone = () => ({
  type: USER_LOGIN_DONE
})

const loginError = error => ({
  type: USER_LOGIN_ERROR,
  error
})

export const userlogin = ({ email, password }) => async dispatch => {
  dispatch(loginStarted())
  try {
    await auth.signInWithEmailAndPassword(email, password)
    dispatch(loginDone())
  } catch (error) {
    dispatch(loginError(error))
  }
}

export const USER_INITIAL_DATA = 'USER_INITIAL_DATA'

export const userInitialData = payload => ({
  type: USER_INITIAL_DATA,
  payload
})
