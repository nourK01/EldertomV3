import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_xQZWsGZr3oG3XK5wdWBlAvzseXqbjE",
  authDomain: "eldertom-a7dee.firebaseapp.com",
  projectId: "eldertom-a7dee",
  storageBucket: "eldertom-a7dee.appspot.com",
  messagingSenderId: "712558080049",
  appId: "1:712558080049:web:1b7a024253ad5eccc22510"
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

// 971483534411-8f2bjrhh199r53odrb5j1m5lf9o2ehf2.apps.googleusercontent.com
// 971483534411-8vkthgqobqj6fdu100devj6rp3d5iqrv.apps.googleusercontent.com
