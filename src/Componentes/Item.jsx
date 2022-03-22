import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import logocard from "../images/logofinalfinal.png";

export default function Item({ product }) {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={true}
      flipOnClick={false}
      flipDirection="horizontal"
      ref={ref}
    >
      <FrontSide className={styles.itemCard}>
        <li className={styles.itemLi}>
          <img
            width={175}
            height={330}
            src={product.img}
            alt={product.name}
            className={styles.itemImage}
          />

          <h2 className={styles.p}>{product.name}</h2>
          <h3 className={styles.p}> $ {product.price}</h3>
        </li>
      </FrontSide>
      <BackSide className={styles.BackSide}>
        <img src={logocard} alt="logocard" className={styles.imglogo} />
        <Link to={`/detail/${product.id}`} className={styles.p}>
          <button className={styles.button}>Detalles</button>
        </Link>
      </BackSide>
    </Flippy>
  );
}
