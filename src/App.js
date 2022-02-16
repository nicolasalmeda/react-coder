import styles from "./App.module.css";
import LandingPage from "./Pages/LandingPage";
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";

function App() {
  return (
    <div className={styles.container}>
      <LandingPage />
      <ItemListContainer greeting="HOLA MUNDO" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
