
import * as firebase from "firebase/app";
import "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_PROJECT_ID + ".firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
  return app;
}

export const getFirestore = () => {
  return firebase.firestore(app);
}
