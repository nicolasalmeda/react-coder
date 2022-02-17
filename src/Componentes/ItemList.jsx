import { useEffect, useState } from "react";
import { getProducts } from "./AsynMock";
import Item from "./Item";
import Spinner from "./Spinner";
import styles from "./itemList.module.css";
import { useParams } from "react-router-dom";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    setisLoading(true);
    getProducts(categoryId).then((products) => {
      setProducts(products);
      setisLoading(false);
    });
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
