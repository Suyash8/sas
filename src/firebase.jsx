
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBUs18K1qBjTZAQXe3QzptCxZgYtIzUHfo",
  authDomain: "computer-paradise-1f198.firebaseapp.com",
  projectId: "computer-paradise-1f198",
  storageBucket: "computer-paradise-1f198.appspot.com",
  messagingSenderId: "689797045979",
  appId: "1:689797045979:web:b1209cd6f406208ce1f6fe",
  measurementId: "G-FC00C97D2N"
});

const db = getFirestore()
export default db