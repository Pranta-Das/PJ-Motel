// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3owA6WNuop-SK2vtHryZAKosY63WGN4g",
  authDomain: "pj-motel.firebaseapp.com",
  projectId: "pj-motel",
  storageBucket: "pj-motel.appspot.com",
  messagingSenderId: "131958684172",
  appId: "1:131958684172:web:0401b0ec5b0f98a6c7cc29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);