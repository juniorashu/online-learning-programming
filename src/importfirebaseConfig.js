// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //Your Own
  apiKey: "AIzaSyBVnzuhl6cnLn88c-fcAXSNDYY1xp_XYdo",
  authDomain: "online-education-d3ee9.firebaseapp.com",
  projectId: "online-education-d3ee9",
  storageBucket: "online-education-d3ee9.appspot.com",
  messagingSenderId: "1093535070903",
  appId: "1:1093535070903:web:21cbcafe0fcdc4fb3b2b32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);