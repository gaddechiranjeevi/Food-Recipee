import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA8q6HQsoNjsfc-lyughbzkFLB6jRNyXss",
  authDomain: "geniobits-assesment.firebaseapp.com",
  databaseURL: "https://geniobits-assesment-default-rtdb.firebaseio.com/",
  projectId: "geniobits-assesment",
  storageBucket: "geniobits-assesment.appspot.com",
  messagingSenderId: "797041413199",
  appId: "1:797041413199:web:8c51546c75a720fe4e6e3a",
  measurementId: "G-Z3BQN6B12V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const database = getDatabase(app);

export {auth};
