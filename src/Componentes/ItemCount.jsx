import styles from "./ItemCount.module.css";
import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(1);
  const onAddToCart = () => {
    onAdd(count);
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <div className={styles.itemCountContainer}>
      <div className={styles.childrenContainer}>
        <button onClick={decrement} className={styles.button}>
          -
        </button>
        <div className={styles.count}>{count}</div>
        <button onClick={increment} className={styles.button}>
          +
        </button>
      </div>
      <div>
        <button onClick={onAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
}
