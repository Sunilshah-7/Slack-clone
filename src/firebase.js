import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoKN1ZaD-ATrFADesUVX-Q473OGOgxW4M",
  authDomain: "slack-clone-a1a9a.firebaseapp.com",
  projectId: "slack-clone-a1a9a",
  storageBucket: "slack-clone-a1a9a.appspot.com",
  messagingSenderId: "119045010842",
  appId: "1:119045010842:web:a83e9aef70060eea1bf623",
  measurementId: "G-VGJLFE1NJT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
