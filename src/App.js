import styles from "./App.module.css";
import LandingPage from "./Pages/LandingPage";
import ItemListContainer from "./Pages/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./Componentes/Cart";

function App() {
  return (
    <div className={styles.container}>
      <CartContextProvider>
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
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
