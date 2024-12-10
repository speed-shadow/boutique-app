import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq7UUNcB3zybypDAYJb0HkSHLGFIz0wbQ",
  authDomain: "boutique-app-6dd99.firebaseapp.com",
  projectId: "boutique-app-6dd99",
  storageBucket: "boutique-app-6dd99.firebasestorage.app",
  messagingSenderId: "992058660745",
  appId: "1:992058660745:web:15df77154b96aa13af7358"
};

// Initialize Firebase
const boutiqueApp = initializeApp(firebaseConfig);
export const auth = getAuth(boutiqueApp);
export const db = getFirestore(boutiqueApp);
export default boutiqueApp;
