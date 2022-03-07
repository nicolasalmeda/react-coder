import { useContext } from "react";
import CartContext from "../context/CartContext";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clear, removeItem } = useContext(CartContext);

  let total = 0;
  return (
    <div>
      <ul>
        {cart.map((items) => {
          const subtotal = items.price * items.totalItem;

          total = total + subtotal;

          return (
            <div key={items.id}>
              <h3 className={styles.title}>{items.name}</h3>
              <div className={styles.container}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={items.img} alt="img" />
                </div>
                <div className={styles.detailsContainer}>
                  <p> Price: $ {items.price} </p>
                  <p>Total de Items: {items.totalItem}</p>
                  <p>SubTotal: $ {subtotal} </p>
                  <button
                    onClick={() => removeItem(items.id)}
                    className={styles.buttonRemove}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
      <div className={styles.finalPrice}>
        <p>Precio Total:{total}</p>
      </div>
      <div className={styles.clearButton}>
        <button onClick={() => clear()}>Clear</button>
      </div>
      <div>
        <Link to={"/"}>
          <button className={styles.navigateButton}>Seguir Navegando</button>
        </Link>
      </div>
    </div>
  );
}
