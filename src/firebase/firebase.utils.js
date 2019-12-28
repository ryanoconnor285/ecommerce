import firebase from 'firebase/app';
import './firebase/firestore';
import './firebase/auth';

const config = {
  apiKey: "AIzaSyBXPpvGQ6a6uewzriBLUgUjNgtRM-vYMSI",
  authDomain: "crwn-db-14684.firebaseapp.com",
  databaseURL: "https://crwn-db-14684.firebaseio.com",
  projectId: "crwn-db-14684",
  storageBucket: "crwn-db-14684.appspot.com",
  messagingSenderId: "949211112096",
  appId: "1:949211112096:web:a33c0b341c00543b495fc5",
  measurementId: "G-3TZ0M75KMK"
};

firebase.initializeApp(config);