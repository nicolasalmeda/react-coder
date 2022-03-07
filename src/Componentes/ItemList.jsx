import { useEffect, useState } from "react";
import Item from "./Item";
import Spinner from "./Spinner";
import styles from "./itemList.module.css";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../firebase/firebase";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setisLoading(true);

    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "products"),
          where("category", "==", categoryId)
        )
      : collection(firestoreDb, "products");

    getDocs(collectionRef).then((querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setProducts(products);
      setisLoading(false);
    });

    // getProducts(categoryId).then((products) => {
    //   setProducts(products);
    //   setisLoading(false);
    // });
  }, [categoryId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <ul className={styles.itemGrid}>
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
}
