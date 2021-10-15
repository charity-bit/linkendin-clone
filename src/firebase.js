import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyCVK6SPtaoYoFxCwuQQXxHYA8A0pih9mk0",
    authDomain: "linkedin-clone-18480.firebaseapp.com",
    projectId: "linkedin-clone-18480",
    storageBucket: "linkedin-clone-18480.appspot.com",
    messagingSenderId: "296689940390",
    appId: "1:296689940390:web:bd5c8bee3888292d418167"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
