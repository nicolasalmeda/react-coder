import { useContext, useEffect, useState } from "react";

import Cart from "../Componentes/Cart";
import EmptyCart from "../Componentes/EmptyCart/EmptyCart";
import CartContext from "../context/CartContext";

export default function CartContainer() {
  const { cart } = useContext(CartContext);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    if (cart.length > 0) {
      setIsCartEmpty(false);
    }
  }, [cart]);

  return <div>{isCartEmpty === true ? <EmptyCart /> : <Cart />}</div>;
}
