import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

// import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDDWAm5zzQwzLfPE0mj29tlozsBzhd4xB8',
  authDomain: 'blogapp3214.firebaseapp.com',
  projectId: 'blogapp3214',
  storageBucket: 'blogapp3214.appspot.com',
  messagingSenderId: '1032306352133',
  appId: '1:1032306352133:web:365cdf22f9de90756a3c6c',
  measurementId: 'G-KLQN0QLWC7'
};

const fire = initializeApp(firebaseConfig);
const db = getFirestore(fire);

export default db;

// const fire = initializeApp(firebaseConfig);
// const db = getFirestore(fire);

// try {
//   firebase.initializeApp(firebaseConfig);
// } catch (err) {
//   if (!/already exists/.test(err.message)) {
//     console.error('Firebase initialization error', err.stack);
//   }
// }
// const fire = firebase;

// export default fire;
