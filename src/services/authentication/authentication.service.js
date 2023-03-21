import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUWq6Mhg3roLvyctxPMuRgKNTFZr9HPxg",
  authDomain: "jrd-complete-react-native-2023.firebaseapp.com",
  projectId: "jrd-complete-react-native-2023",
  storageBucket: "jrd-complete-react-native-2023.appspot.com",
  messagingSenderId: "427867086723",
  appId: "1:427867086723:web:1aac39f8af6440cba5a0b6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const createUserRequest = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};
