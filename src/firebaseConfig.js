// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe7VaTlNKZVBkoGYDXGF7H_jXQ6nShdtw",
  authDomain: "transporte-tijuana-4e13d.firebaseapp.com",
  projectId: "transporte-tijuana-4e13d",
  storageBucket: "transporte-tijuana-4e13d.appspot.com",
  messagingSenderId: "635851729440",
  appId: "1:635851729440:web:a926697b2623c1c8366a45",
  measurementId: "G-87V5JL4RXL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de Firestore
const firestore = getFirestore(app);

export { firestore }; // Exporta el objeto firestore para usarlo en otros archivos
