// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX_-n0KV0ayrbuR-TkmH_YzvyZoOG4hfE",
  authDomain: "agenda-e1a24.firebaseapp.com",
  projectId: "agenda-e1a24",
  storageBucket: "agenda-e1a24.appspot.com",
  messagingSenderId: "703199910766",
  appId: "1:703199910766:web:34cb5a016a6627f00bff7f",
  databaseURL: "https://agenda-e1a24-default-rtdb.firebaseio.com/",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;