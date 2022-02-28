import styles from "./NavBar.module.css";
import logoInicio from "../images/logoFinal.png";
import CarWidget from "./CarWidget";
import { Link, NavLink } from "react-router-dom";

export function NavBar() {
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
      <button className={styles.searchButton}>
        <NavLink to={"/cart"}>
          <CarWidget />
        </NavLink>
      </button>
    </div>
  );
}
