import styles from "./Item.module.css";

export default function Item({ product }) {
  return (
    <li className={styles.itemCard}>
      <img
        width={230}
        height={345}
        src={product.img}
        alt={product.name}
        className={styles.itemImage}
      />
      {product.name}
    </li>
  );
}
