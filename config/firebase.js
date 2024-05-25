/*
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN3pCwuw6-kIYiFDFv2uyNS9MHAj7cwO4",
  authDomain: "contato-253ff.firebaseapp.com",
  databaseURL: "https://contato-253ff-default-rtdb.firebaseio.com",
  projectId: "contato-253ff",
  storageBucket: "contato-253ff.appspot.com",
  messagingSenderId: "329111083345",
  appId: "1:329111083345:web:6472b747c0eba965175b70"
};

// Initialize Firebase
console.log('Initializing Firebase...');
const app = initializeApp(firebaseConfig);
console.log('Firebase initialized:', app);

console.log('Getting database...');
const db = getDatabase(app);
console.log('Database reference:', db);

export default db;
*/

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDN3pCwuw6-kIYiFDFv2uyNS9MHAj7cwO4",
  authDomain: "contato-253ff.firebaseapp.com",
  databaseURL: "https://contato-253ff-default-rtdb.firebaseio.com",
  projectId: "contato-253ff",
  storageBucket: "contato-253ff.appspot.com",
  messagingSenderId: "329111083345",
  appId: "1:329111083345:web:6472b747c0eba965175b70"
};

console.log('Initializing Firebase...');
const app = initializeApp(firebaseConfig);
console.log('Firebase initialized:', app);

console.log('Getting database...');
const db = getDatabase(app);
console.log('Database reference:', db);

export {db};
