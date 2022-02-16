import styles from "./ItemDetail.module.css";

export default function ItemDetail({ products }) {
  return (
    <div className={styles.detailsContainer}>
      <img
        src={products.img}
        alt={products.title}
        className={`${styles.col} ${styles.productImage}`}
      />
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
  );
}
