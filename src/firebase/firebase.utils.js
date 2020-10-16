import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBLbKSCx4wux36yew3nvrQzyBoSULY3TDI",
  authDomain: "crwn-db-4ebb0.firebaseapp.com",
  databaseURL: "https://crwn-db-4ebb0.firebaseio.com",
  projectId: "crwn-db-4ebb0",
  storageBucket: "crwn-db-4ebb0.appspot.com",
  messagingSenderId: "365215491996",
  appId: "1:365215491996:web:d8be56a8138b45c39c4a59",
  measurementId: "G-SQX88F8HFN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
