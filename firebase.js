  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqARlH-PZSgNj8K7o9PDzMV5K12mtFTH4",
    authDomain: "stars-rating-66794.firebaseapp.com",
    projectId: "stars-rating-66794",
    storageBucket: "stars-rating-66794.appspot.com",
    messagingSenderId: "87366577612",
    appId: "1:87366577612:web:91ac12f9ff15dea1144169"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore()

  export const saveRate = (value)=> {
    console.log(value)
    addDoc(collection( db, 'rates' ), { cont: value })
  }

  export const getCurrentRate = ()=> getDocs(collection(db, 'rates'))
    
  