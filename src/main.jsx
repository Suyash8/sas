import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CookiesProvider } from "react-cookie";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUs18K1qBjTZAQXe3QzptCxZgYtIzUHfo",
  authDomain: "computer-paradise-1f198.firebaseapp.com",
  projectId: "computer-paradise-1f198",
  storageBucket: "computer-paradise-1f198.appspot.com",
  messagingSenderId: "689797045979",
  appId: "1:689797045979:web:b1209cd6f406208ce1f6fe",
  measurementId: "G-FC00C97D2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById('root')
)
