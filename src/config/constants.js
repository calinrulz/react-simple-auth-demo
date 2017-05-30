import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCW-tHzInBve5X7KckV_8MtkRRTqIbhEjw",
  authDomain: "eugen-login-4c601.firebaseapp.com",
  databaseURL: "https://eugen-login-4c601.firebaseio.com/",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
