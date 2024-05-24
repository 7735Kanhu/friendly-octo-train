import firebase from 'firebase/compat/app'; // Use compat to avoid potential issues with older versions
import 'firebase/compat/auth'; // Use compat for auth as well

const firebaseConfig = {
  apiKey: "AIzaSyA5THpt_2geodgKCzjKP0D0k8wyeAHGdZA",
  authDomain: "help-7c56d.firebaseapp.com",
  projectId: "help-7c56d",
  storageBucket: "help-7c56d.appspot.com",
  messagingSenderId: "313013637870",
  appId: "1:313013637870:web:7dcb9681483f1ba95199ff",
  measurementId: "G-EZHY8516RB"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
