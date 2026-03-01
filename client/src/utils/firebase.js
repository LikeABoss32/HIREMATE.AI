
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "project-5540e.firebaseapp.com",
  projectId: "project-5540e",
  storageBucket: "project-5540e.firebasestorage.app",
  messagingSenderId: "774947920974",
  appId: "1:774947920974:web:c7f16c54eee15fefc3771f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}