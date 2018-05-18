import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyCkQJZKMfmTEx5xzYqVsh-CpSPBMWUXgak',
  authDomain: 'omni-version-1.firebaseapp.com',
  databaseURL: 'https://omni-version-1.firebaseio.com',
  projectId: 'omni-version-1',
  storageBucket: 'omni-version-1.appspot.com',
  messagingSenderId: '703818770106'
}

firebase.initializeApp(config)

export default firebase
export const auth = firebase.auth()
export const db = firebase.database()
