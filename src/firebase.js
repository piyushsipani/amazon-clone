import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5nAvekqoOnkvrhRJGkqLn-wWc-tOzEcs",
    authDomain: "challenge-60208.firebaseapp.com",
    databaseURL: "https://challenge-60208.firebaseio.com",
    projectId: "challenge-60208",
    storageBucket: "challenge-60208.appspot.com",
    messagingSenderId: "385289214952",
    appId: "1:385289214952:web:0721ef98fb34f65530e25d",
    measurementId: "G-YZ14F9LBYR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};