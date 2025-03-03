import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAlrF7bCPZ8VkMFHMQeXfD0FzW8Ovn2u0",
  authDomain: "signup-firebase-5768a.firebaseapp.com",
  projectId: "signup-firebase-5768a",
  storageBucket: "signup-firebase-5768a.appspot.com",
  messagingSenderId: "1040714203005",
  appId: "1:1040714203005:web:b152bcfa0d7584e7895614"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firebase 서비스 가져오기 (사용 가능하도록 export)
export const auth = getAuth(app);
export const db = getFirestore(app);
