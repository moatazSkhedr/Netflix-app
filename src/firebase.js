import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5S6Sq2_OifR22fiwgOTYMTkHiqGgx69w",
    authDomain: "netflix-app-c6751.firebaseapp.com",
    projectId: "netflix-app-c6751",
    storageBucket: "netflix-app-c6751.appspot.com",
    messagingSenderId: "618807163604",
    appId: "1:618807163604:web:3a3e0bf3730ee8050b1941"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {auth };

export default db ;