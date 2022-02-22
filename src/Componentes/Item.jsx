import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export default function Item({ product }) {
  return (
    <Link to={`/detail/${product.id}`} className={styles.p}>
      <li className={styles.itemCard}>
        <img
          width={200}
          height={335}
          src={product.img}
          alt={product.name}
          className={styles.itemImage}
        />
        <p className={styles.p}>{product.name}</p>
      </li>
    </Link>
  );
}
