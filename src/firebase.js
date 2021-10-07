import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDf-D5BDfEqD1CQqTntxNKNwjjfPqLU37w",
  authDomain: "tinder-clone-1-f417a.firebaseapp.com",
  projectId: "tinder-clone-1-f417a",
  storageBucket: "tinder-clone-1-f417a.appspot.com",
  messagingSenderId: "656743465929",
  appId: "1:656743465929:web:956d81e9391fc4a4c9de18",
  measurementId: "G-0T5SBKP8F8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
