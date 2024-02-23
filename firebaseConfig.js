// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQSbNUNoUHf-8po8uYTjI90j5ryItm4EM",
  authDomain: "eldertomv2.firebaseapp.com",
  projectId: "eldertomv2",
  storageBucket: "eldertomv2.appspot.com",
  messagingSenderId: "193171213960",
  appId: "1:193171213960:web:710f5c901532368015d93d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 971483534411-8f2bjrhh199r53odrb5j1m5lf9o2ehf2.apps.googleusercontent.com
//971483534411-8vkthgqobqj6fdu100devj6rp3d5iqrv.apps.googleusercontent.com