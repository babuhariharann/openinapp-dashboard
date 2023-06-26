import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxsyCfDH60psO0pPv5s6eBidhq1ae09R4",
  authDomain: "dashboard-362c3.firebaseapp.com",
  projectId: "dashboard-362c3",
  storageBucket: "dashboard-362c3.appspot.com",
  messagingSenderId: "1080508244580",
  appId: "1:1080508244580:web:ca167ed626cb6cd321f571",
  measurementId: "G-1PTLQKVWZQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
