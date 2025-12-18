import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {  getFirestore, setDoc, deleteField, updateDoc, getDocs, doc, getDoc, collection, query, where, arrayUnion, arrayRemove 
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
  const firebaseConfig = {
    apiKey: "AIzaSyDufjkWy3sdnv4b7GWNEOGomVb10nbns0A",
    authDomain: "chat-app-14245.firebaseapp.com",
    projectId: "chat-app-14245",
    storageBucket: "chat-app-14245.firebasestorage.app",
    messagingSenderId: "869254175172",
    appId: "1:869254175172:web:9deaa647909f5f7d36ec91",
    measurementId: "G-HMLRSBW49K"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    setDoc,
    doc,
    db,
    where,
    collection,
    query,
    getDocs,
    arrayUnion,
    getDoc,
    updateDoc,
    deleteField,
    arrayRemove,
};