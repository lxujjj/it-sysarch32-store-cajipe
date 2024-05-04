// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB5iPxAhwRnocCNFPEOQyNvEhAskO0x-Go",
  authDomain: "it-sysarch32-store-cajipe.firebaseapp.com",
  projectId: "it-sysarch32-store-cajipe",
  storageBucket: "it-sysarch32-store-cajipe.appspot.com",
  messagingSenderId: "492298979080",
  appId: "1:492298979080:web:edfb74b4fe9e80741b0ebd",
  measurementId: "G-6ZDZCHPE19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);
const storage = getStorage(app);