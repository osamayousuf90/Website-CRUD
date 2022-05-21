import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBKuta_4WtFoLKxL05N9GQJAnWPpH8tSkI",
    authDomain: "fire-log-dbd4d.firebaseapp.com",
    projectId: "fire-log-dbd4d",
    storageBucket: "fire-log-dbd4d.appspot.com",
    messagingSenderId: "516081419840",
    appId: "1:516081419840:web:a1a4726b0052a064a841a5"
  };


export const app = initializeApp(firebaseConfig);


  export const auth = getAuth(app);

  export const db = getFirestore(app);

