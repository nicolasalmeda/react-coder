import { initializeApp } from "firebase/app";
import {
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  getDoc,
  doc,
  writeBatch,
} from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBjJ3G8K9WbIe9imIEkPHj5K1nv9T9aqEQ",
//   authDomain: "j-e-commerce.firebaseapp.com",
//   projectId: "j-e-commerce",
//   storageBucket: "j-e-commerce.appspot.com",
//   messagingSenderId: "402999810027",
//   appId: "1:402999810027:web:df65ef04f16b66da072bae",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messaginSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "products"),
          where("category", "==", categoryId)
        )
      : collection(firestoreDb, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        resolve(products);
      })
      .catch((error) => {
        reject("Error:", error);
      });
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(firestoreDb, "products", productId);

    getDoc(docRef)
      .then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        resolve(product);
      })
      .catch((error) => {
        reject("Error obteniendo producto: ", error);
      });
  });
};

const batch = writeBatch(firestoreDb);
const outOfStock = [];

export const getStock = (prod) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(firestoreDb, "products", prod.id))
      .then((response) => {
        if (response.data().stock >= prod.totalItem) {
          batch.update(doc(firestoreDb, "products", response.id), {
            stock: response.data().stock - prod.totalItem,
          });
        } else {
          resolve(outOfStock.push({ id: response.id, ...response.data() }));
        }
      })
      .catch((error) => {
        reject("Error en la actualizacion del stock", error);
      });
  });
};
