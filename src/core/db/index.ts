import { initializeApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_STORAGE_BUCKET>",
  messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
  appId: "<YOUR_APP_ID>",
  measurementId: "<YOUR_MEASUREMENT_ID>",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
