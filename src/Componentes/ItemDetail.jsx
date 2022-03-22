import ItemCount from "./ItemCount";
/*import styles from "./ItemDetail.module.css";*/
import styles from "./ItemDetail2.module.css";
import LogoCart from "../images/logofinalfinal.png";
import { useContext, useState } from "react";

import Addbutton from "./Addbutton";
import CartContext from "../context/CartContext";

export default function ItemDetail({ products }) {
  const [totalItem, settotalItems] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (newitems) => {
    settotalItems(newitems);

    const productToAdd = products;

    addItem(productToAdd, newitems);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.slider}>
            <i className={styles.slider}></i>
          </div>
          <img src={LogoCart} alt={products.title} className={styles.img1} />
        </div>
        <div className={styles.right}>
          <img
            src={products.img}
            alt={products.title}
            className={styles.img2}
          />
          <div className={styles.productInfo}>
            <h2> {products.name} </h2>
            <h3> $ {products.price}</h3>
            <div className={styles.details}>
              <div className={styles.size}>
                <p className={styles.h4}>{products.description}</p>
              </div>
              <p className={styles.h3}>Stock:</p>
              <p>{products.stock}</p>
              <div className={styles.durability}></div>
            </div>
            {totalItem === 0 ? (
              <ItemCount initial="1" stock={products.stock} onAdd={onAdd} />
            ) : (
              <Addbutton className={styles.button} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
