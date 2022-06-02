// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYbnT9cZJ_xyJ-Vm-fbRfE4WzRkPfZdbQ",
  authDomain: "ecommerce-coderhouse-2f29a.firebaseapp.com",
  projectId: "ecommerce-coderhouse-2f29a",
  storageBucket: "ecommerce-coderhouse-2f29a.appspot.com",
  messagingSenderId: "111445803352",
  appId: "1:111445803352:web:43e192be4a576fe233e52d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirebase() {
  return app;
}