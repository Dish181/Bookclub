import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNk8WaDgbrpLaHewgmn7mDNzR10zUuvPk",
  authDomain: "bookclub-899af.firebaseapp.com",
  projectId: "bookclub-899af",
  storageBucket: "bookclub-899af.appspot.com",
  messagingSenderId: "761146729032",
  appId: "1:761146729032:web:bcc7778bf6433642e5ae7d",
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
