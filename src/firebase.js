// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1w1qbtAnM2lRggyqrSdN7GR7ohikvKiU",
  authDomain: "akash-portfolio-883f1.firebaseapp.com",
  projectId: "akash-portfolio-883f1",
  storageBucket: "akash-portfolio-883f1.appspot.com",
  messagingSenderId: "499172278157",
  appId: "1:499172278157:web:4b01f7de6d450682a5c7c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db =  getFirestore();