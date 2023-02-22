  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD-PkK1rYHpJM0wG_pVKHEEP79zTNXZitQ",
    authDomain: "stars-afc12.firebaseapp.com",
    projectId: "stars-afc12",
    storageBucket: "stars-afc12.appspot.com",
    messagingSenderId: "26093882500",
    appId: "1:26093882500:web:6a543fd7973ee854c9c6d1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore()

  export const saveRate = (value)=> {
    console.log(value)
    addDoc(collection( db, 'rates' ), { cont: value })
  }

  export const getCurrentRate = ()=> getDocs(collection(db, 'rates'))
    
  