import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC_oHnT6P9S51ZZnBv0boxHb_ECGr9lBZc",
  authDomain: "react-firebasev9-4122a.firebaseapp.com",
  projectId: "react-firebasev9-4122a",
  storageBucket: "react-firebasev9-4122a.appspot.com",
  messagingSenderId: "844378590653",
  appId: "1:844378590653:web:4caa053da610e7763156d4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }