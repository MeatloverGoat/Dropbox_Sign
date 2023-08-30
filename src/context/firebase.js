import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.PUBLIC_API_KEY,
  authDomain: process.env.PUBLIC_AUTH_DOMAIN,
  projectId: process.env.PUBLIC_PROJECT_ID,
  storageBucket: process.env.PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.UBLIC_MESSAGING_SENDER_ID,
  appId: process.env.PUBLIC_APP_ID,
  measurementId: process.env.PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const googleProvider = new GoogleAuthProvider();
