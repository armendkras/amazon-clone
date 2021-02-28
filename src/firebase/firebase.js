import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADiiDtFwIkHM9iiYv9qfb1pIUKL2yk5bQ",
  authDomain: "fir-9ed32.firebaseapp.com",
  projectId: "fir-9ed32",
  storageBucket: "fir-9ed32.appspot.com",
  messagingSenderId: "798070008463",
  appId: "1:798070008463:web:9c720d68af934371e25efa",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
