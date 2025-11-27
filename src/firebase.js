// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyMxiqVT7XJy2fxPb7YabaauaGk4zBcrM",
  authDomain: "pearl-ceylon-tours-cbb6d.firebaseapp.com",
  projectId: "pearl-ceylon-tours-cbb6d",
  storageBucket: "pearl-ceylon-tours-cbb6d.firebasestorage.app",
  messagingSenderId: "690844050733",
  appId: "1:690844050733:web:93d77b2201c06407f21fa4",
  measurementId: "G-C70THZ2TM6"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
