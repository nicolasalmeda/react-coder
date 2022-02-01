import { Search } from "./SearchBar";
import styles from "./NavBar.module.css";
import logoInicio from "../images/logoFinal.png";

export function NavBar() {
  return (
    <div className={styles.NavContainer}>
      <img
        src={logoInicio}
        alt="imagen no encontrada"
        className={styles.NavImg}
      />
      <p>Inicio</p>
      <p>Hogar</p>
      <p>Jugueteria</p>
      <p>Librería</p>
      <Search />
    </div>
  );
}
