import { createContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./CartContext.css";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const MySwal = withReactContent(Swal);

  const addItem = (productToAdd, totalItem) => {
    const newObj = {
      ...productToAdd,
      totalItem,
    };

    if (isInCart(productToAdd.id)) {
      return MySwal.fire({
        icon: "warning",
        title: <p>El producto ya esta en el carrito</p>,
      });
    } else {
      setCart([...cart, newObj]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((p) => p.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((prod) => {
      total = total + prod.price * prod.totalItem;
    });
    return total;
  };

  return (
    <Context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        getTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
