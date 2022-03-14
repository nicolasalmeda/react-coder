import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";

export default function EmptyCart() {
  return (
    <div className={styles.container}>
      <BsCartX size={300} />
      <h2>El carrito esta vacío</h2>
      <Link to="/">
        <button className={styles.button}>Seguir Navegando</button>
      </Link>
    </div>
  );
}
