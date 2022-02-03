import styles from "./App.module.css";
import LandingPage from "./Pages/LandingPage";
import ItemListContainer from "./Componentes/ItemListContainer";

function App() {
  return (
    <div className={styles.container}>
      <LandingPage />
      <ItemListContainer greeting="HOLA MUNDO" />
    </div>
  );
}

export default App;
