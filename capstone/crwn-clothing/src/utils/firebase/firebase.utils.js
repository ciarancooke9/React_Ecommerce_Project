import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHwKjAhU34zl_TMTFOzBoiY60Cd1NPo_I",
  authDomain: "crwn-clothing-db-89ad7.firebaseapp.com",
  projectId: "crwn-clothing-db-89ad7",
  storageBucket: "crwn-clothing-db-89ad7.appspot.com",
  messagingSenderId: "926317577275",
  appId: "1:926317577275:web:26880c1585bed24203c81e",
  measurementId: "G-ZL3YDKYHGV"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const sinInWithGooglePopup = () => signInWithPopup(auth, provider);
