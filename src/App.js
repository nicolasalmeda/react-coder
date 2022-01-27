import { Search } from "./SearchBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> 3jota-Nicolas Lagoria </h1>
      <Search />
    </div>
  );
}

export default App;
