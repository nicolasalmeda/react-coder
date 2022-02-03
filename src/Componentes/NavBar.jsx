import styles from "./NavBar.module.css";
import logoInicio from "../images/logoFinal.png";
import CarWidget from "./CarWidget";

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
      <button className={styles.searchButton}>
        <CarWidget />
      </button>
    </div>
  );
}
