import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjJ3G8K9WbIe9imIEkPHj5K1nv9T9aqEQ",
  authDomain: "j-e-commerce.firebaseapp.com",
  projectId: "j-e-commerce",
  storageBucket: "j-e-commerce.appspot.com",
  messagingSenderId: "402999810027",
  appId: "1:402999810027:web:df65ef04f16b66da072bae",
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
