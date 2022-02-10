import { useEffect, useState } from "react";
import { getProducts } from "../Componentes/AsynMock";
import Item from "../Componentes/Item";
import Spinner from "../Componentes/Spinner";
import styles from "./itemList.module.css";

export default function ItemList() {
  const [prodcuts, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getProducts().then((products) => {
      console.log(products);
      setProducts(products);
      setisLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <ul className={styles.itemGrid}>
        {prodcuts.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
}
