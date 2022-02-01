import styles from "./App.module.css";
import { NavBar } from "./Componentes/NavBar";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.title}> 3jota-Nicolas Lagoria </h1>
    </div>
  );
}

export default App;
