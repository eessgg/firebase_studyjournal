import firebase from 'firebase/app';
import 'firebase/auth'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDpDx7tGorVRimXptn4GU6tCw5_SPJAIDk",
    authDomain: "booking-a0056.firebaseapp.com",
    projectId: "booking-a0056",
    storageBucket: "booking-a0056.appspot.com",
    messagingSenderId: "56245701919",
    appId: "1:56245701919:web:39aeee66403d4fda39b42a"
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;