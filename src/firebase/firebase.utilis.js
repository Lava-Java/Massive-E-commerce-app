import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApwHghAGjWJFC3BCV0zc_GOWmbUdq6Eds",
    authDomain: "crown-db-84b89.firebaseapp.com",
    databaseURL: "https://crown-db-84b89.firebaseio.com",
    projectId: "crown-db-84b89",
    storageBucket: "crown-db-84b89.appspot.com",
    messagingSenderId: "544484735957",
    appId: "1:544484735957:web:0c3051f6fc22c8e9561b5c",
    measurementId: "G-JTNM4QG4HQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;

  