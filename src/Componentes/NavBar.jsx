import styles from "./NavBar.module.css";
import logoInicio from "../images/logoFinal.png";
import CarWidget from "./CarWidget";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export function NavBar() {
  const { cart } = useContext(CartContext);
  // let sumador = suma();
  // console.log("cart en nav", sumador);

  return (
    <div className={styles.NavContainer}>
      <Link to={"/"}>
        <img
          src={logoInicio}
          alt="imagen no encontrada"
          className={styles.NavImg}
        />
      </Link>

      <NavLink
        to={"/category/home"}
        activeClassName={styles.active}
        className={styles.NavLink}
      >
        Hogar
      </NavLink>
      <NavLink to={"/category/toys"} className={styles.NavLink}>
        Jugueteria
      </NavLink>
      <NavLink to={"/category/library"} className={styles.NavLink}>
        Librería
      </NavLink>

      {cart.length > 0 ? (
        <NavLink to={"/cart"} className={styles.cartButton}>
          <CarWidget className={styles.CarWidget} />
          <p className={styles.cartNumber}>{cart.length}</p>
        </NavLink>
      ) : (
        <button className={styles.searchButtonNone}>
          <NavLink to={"/cart"}>
            <CarWidget className={styles.CarWidget} />
          </NavLink>
        </button>
      )}

      {/* {sumador > 0 ? (
        <NavLink to={"/cart"} className={styles.cartButton}>
          <CarWidget className={styles.CarWidget} />
          <p className={styles.cartNumber}>{sumador}</p>
        </NavLink>
      ) : (
        <button className={styles.searchButtonNone}>
          <NavLink to={"/cart"}>
            <CarWidget className={styles.CarWidget} />
          </NavLink>
        </button>
      )} */}
    </div>
  );
}
