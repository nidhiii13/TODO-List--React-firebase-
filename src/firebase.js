/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABJJQvQzRzpGjNbAL1wzgeem0GkHaSybs",
  authDomain: "todo-1616a.firebaseapp.com",
  projectId: "todo-1616a",
  storageBucket: "todo-1616a.appspot.com",
  messagingSenderId: "747071907101",
  appId: "1:747071907101:web:30c1989243f7dbc412adf4",
  measurementId: "G-Y7SHR01Y52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */
import * as firebase from 'firebase';
import 'firebase/firestore';
const firebaseApp=firebase.initializeApp({
   //add ur firebase project config details
});

const db=firebaseApp.firestore();
export default db;