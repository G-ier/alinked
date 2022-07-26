// Import the functions you need from the SDKs you need

// import * as firebase from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged  } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBnzlMvSWZggdH6gn59sM6qRxAIVqBFAV0",

  authDomain: "alinked-e97d9.firebaseapp.com",

  projectId: "alinked-e97d9",

  storageBucket: "alinked-e97d9.appspot.com",

  messagingSenderId: "52004998552",

  appId: "1:52004998552:web:2a6cb7e444213a3d58afed",

  measurementId: "G-NCLQJBSXYD"

};


// Use this to initialize the firebase App
const app = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
let db = getFirestore(app);
const auth = getAuth(app);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user)  => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
};

export default { auth, db, getCurrentUser};