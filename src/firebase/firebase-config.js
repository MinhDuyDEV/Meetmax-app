import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu3m-3ENN2M7D87ORbe6cpL4fdnzGZ3NU",
  authDomain: "meetmax-7037c.firebaseapp.com",
  projectId: "meetmax-7037c",
  storageBucket: "meetmax-7037c.appspot.com",
  messagingSenderId: "37491060929",
  appId: "1:37491060929:web:075c577d279e64459e6440",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
