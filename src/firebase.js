import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAkUfJncotFRHMogfzdk0RYpXfuFPr0hbA",
  authDomain: "crud-64952.firebaseapp.com",
  databaseURL: "https://crud-64952-default-rtdb.firebaseio.com",
  projectId: "crud-64952",
  storageBucket: "crud-64952.appspot.com",
  messagingSenderId: "2964922203",
  appId: "1:2964922203:web:f3e15841087b86d0d2047e",
  measurementId: "G-G4RHVNC6PJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = getDatabase();



export default database;

