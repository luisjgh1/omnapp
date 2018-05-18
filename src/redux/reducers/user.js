import {
  USER_REGISTER_STARTED,
  USER_REGISTER_DONE,
  USER_REGISTER_ERROR,
  USER_LOGIN_STARTED,
  USER_LOGIN_DONE,
  USER_LOGIN_ERROR,
  USER_INITIAL_DATA
} from '../actions/user'
import createReducer from '../../utils/createReducer'

export default createReducer({
  uid: null,
  error: null,
  registering: false,
  logining: false,
  displayName: ''
}, {
  [USER_REGISTER_STARTED]: (state, action) => ({
    ...state,
    registering: true
  }),
  [USER_REGISTER_DONE]: (state, { payload: { displayName } }) => ({
    ...state,
    registering: false,
    displayName
  }),
  [USER_REGISTER_ERROR]: (state, { error }) => ({
    ...state,
    registering: false,
    error
  }),
  [USER_LOGIN_STARTED]: (state, action) => ({
    ...state,
    logining: true
  }),
  [USER_LOGIN_DONE]: (state, action) => ({
    ...state,
    logining: false
  }),
  [USER_LOGIN_ERROR]: (state, { error }) => ({
    ...state,
    logining: false,
    error
  }),
  [USER_INITIAL_DATA]: (state, { payload: { uid, displayName } }) => ({
    ...state,
    uid,
    displayName
  })
})
