const firebase = require("firebase/firebase");
//Required for side-effects
require("firebase/firestore");

export const firebaseConfig = {
  apiKey: 'AIzaSyBUZC-i_E2PdMjmDYTnrvnqFxK7a-gWpRo',
  authDomain: 'itatools35.firebaseapp.com',
  databaseURL: 'https://itatools35.firebaseio.com',
  projectId: 'itatools35',
  storageBucket: 'itatools35.appspot.com',
  messagingSenderId: '370129293158',
  appId: '1:370129293158:web:6aadf1e773140d4b10c2a7'
};

export const collectionTypes = {
  users: 'users',
  tools: 'tools'
};

export const Firebase = firebase.initializeApp(firebaseConfig);

export const db = Firebase.firestore();
export const auth = firebase.auth();
