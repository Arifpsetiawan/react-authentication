// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "mood-meter-2710c.firebaseapp.com",
  projectId: "mood-meter-2710c",
  storageBucket: "mood-meter-2710c.appspot.com",
  messagingSenderId: "231888460179",
  appId: "1:231888460179:web:4521da847a9b25f8a3f066",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
