// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALLkTM6lca1H3A_mbSXo635WQwFBKUv20",
  authDomain: "mini-blog-4cc55.firebaseapp.com",
  projectId: "mini-blog-4cc55",
  storageBucket: "mini-blog-4cc55.appspot.com",
  messagingSenderId: "545806834447",
  appId: "1:545806834447:web:c34725ee61116ee4bcbc7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };