


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI5iEHOMKfM5gR9PJCLDAZeVBGo1qbdtg",
  authDomain: "logistic-79c67.firebaseapp.com",
  databaseURL: "https://logistic-79c67-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "logistic-79c67",
  storageBucket: "logistic-79c67.firebasestorage.app",
  messagingSenderId: "829163065021",
  appId: "1:829163065021:web:83a4f9713b6a98939cf1d4",
  measurementId: "G-FYDN94CL0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);