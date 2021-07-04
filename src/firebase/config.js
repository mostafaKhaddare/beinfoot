//* import firebase
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyASyQZMh2a1zsB4QX1Zo91TzpJUoS4oMwU",
  authDomain: "beinfoot-413c8.firebaseapp.com",
  projectId: "beinfoot-413c8",
  storageBucket: "beinfoot-413c8.appspot.com",
  messagingSenderId: "408568053460",
  appId: "1:408568053460:web:128f0cd309143166c2c541",
  measurementId: "G-WJ0CX0X1GL"
};

//?init firebase
firebase.initializeApp(firebaseConfig)
//?init firestore
const db = firebase.firestore();
//?init storage
const storage = firebase.storage()

export {storage, db}