import { initializeApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCv2kd7F_JclStMu4tsHbEDQySB33n9s8M",
  authDomain: "weatherappios-ddab4.firebaseapp.com",
  projectId: "weatherappios-ddab4",
  storageBucket: "weatherappios-ddab4.firebasestorage.app",
  messagingSenderId: "664971099305",
  appId: "1:664971099305:web:29ffc5fe70a4c277547db8",
  measurementId: "G-VHFL0BB54R",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
