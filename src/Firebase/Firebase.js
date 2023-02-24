import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcnpLi56HsaQ5kSYQj1RKZcY5kblLpdmo",
    authDomain: "linkedin-project-66574.firebaseapp.com",
    projectId: "linkedin-project-66574",
    storageBucket: "linkedin-project-66574.appspot.com",
    messagingSenderId: "503651850594",
    appId: "1:503651850594:web:cf70c622dbd7e07162b43b",
    measurementId: "G-E3CHW1GZQP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) // THIS CONNECTS TO DATABASE & SET EVERYTHING UP
  const db = firebaseApp.firestore() // ACCESS TO FIRESTORE
  const auth = firebase.auth() // ACCESS TO AUTHENTICATION

  export { db, auth }