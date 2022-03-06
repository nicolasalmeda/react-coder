import { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../Componentes/Cart";
import CartContext from "../context/CartContext";

export default function CartContainer() {
  const { cart } = useContext(CartContext);

  if (cart === []) {
    return (
      <Link to={"/"}>
        <button>Seguir Navegando</button>
      </Link>
    );
  } else {
    return <Cart></Cart>;
  }
}
