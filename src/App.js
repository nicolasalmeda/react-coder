import styles from "./App.module.css";
import LandingPage from "./Pages/LandingPage";
import ItemListContainer from "./Pages/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <LandingPage />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="HOLA MUNDO" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="HOLA MUNDO" />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
