import { useEffect, useState } from "react";
import Item from "./Item";
import Spinner from "./Spinner";
import styles from "./itemList.module.css";
import { useParams } from "react-router-dom";

import { getProducts } from "../firebase/firebase";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setisLoading(true);

    getProducts(categoryId).then((response) => {
      setProducts(response);
    });
    setisLoading(false);
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
