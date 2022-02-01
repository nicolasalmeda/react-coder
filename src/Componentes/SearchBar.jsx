import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

export function Search() {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" />
        <button className={styles.searchButton} type="sumbit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
