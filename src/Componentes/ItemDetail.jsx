import ItemCount from "./ItemCount";
/*import styles from "./ItemDetail.module.css";*/
import styles from "./ItemDetail2.module.css";
import LogoCart from "../images/logofinalfinal.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Addbutton() {
  return (
    <div>
      <Link to={"/cart"}>
        <button>Ir al Carrito</button>
      </Link>
    </div>
  );
}

export default function ItemDetail({ products }) {
  const [totalItem, settotalItems] = useState(0);

  const onAdd = (newitems) => {
    settotalItems(newitems);
  };

  return (
    <div>
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
            <h3> {products.price}</h3>
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
              <Addbutton />
            )}
          </div>
        </div>
      </div>

      {/* <div className={`${styles.detailsContainer} ${styles.border} `}>
        <div>
          <img
            src={products.img}
            alt={products.title}
            className={`${styles.col} ${styles.productImage}`}
          />
        </div>
        <div className={`${styles.col} ${styles.productDetails}`}>
          <p className={styles.firstItem}>
            <strong>Title: </strong>
            {products.name}
          </p>
          <p>
            <strong>Description: </strong>
            {products.description}
          </p>
          <p>
            <strong>Precio: </strong>
            {products.price}
          </p>
        </div>
      </div>
      <ItemCount initial="1" stock={products.stock} /> */}
    </div>
  );
}
