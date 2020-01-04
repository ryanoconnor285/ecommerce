import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;