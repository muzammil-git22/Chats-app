import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {  getFirestore, setDoc, deleteField, updateDoc, getDocs, doc, getDoc, collection, query, where, arrayUnion, arrayRemove 
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
  const firebaseConfig = {
    
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