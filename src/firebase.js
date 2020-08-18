import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC19kLtmkPvbi5e82M3RTfcj6r_jsYEqBQ",
  authDomain: "firedux-todo-247d0.firebaseapp.com",
  databaseURL: "https://firedux-todo-247d0.firebaseio.com",
  projectId: "firedux-todo-247d0",
  storageBucket: "firedux-todo-247d0.appspot.com",
  messagingSenderId: "291042046907",
  appId: "1:291042046907:web:f00c5ed76e91d917f2ca9e",
  measurementId: "G-3Y3JM6Y300"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
