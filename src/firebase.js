import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzuHw4U2_-rNbgg8DTZmCFgH-gvBNBMD4",
  authDomain: "challenge123-825db.firebaseapp.com",
  databaseURL: "https://challenge-4b2b2.firebaseio.com",
  projectId: "challenge123-825db",
  storageBucket: "challenge123-825db.appspot.com",
  messagingSenderId: "185053127051",
  appId: "1:185053127051:web:7254ba7d9ddbf124ac0f8e",
  // measurementId: "G-41K45LGE7M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
