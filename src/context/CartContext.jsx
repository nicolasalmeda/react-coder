import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("productos en Context :", cart);

  const addItem = (productToAdd, totalItem) => {
    const newObj = {
      ...productToAdd,
      totalItem,
    };

    console.log("newObj en Context  :", newObj);

    if (isInCart(productToAdd.id)) {
      return alert("El producto ya esta en el carrito");
    } else {
      setCart([...cart, newObj]);
      console.log("productos en Context dentro de addItem :", newObj);
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

  const suma = () => {
    let sumador = 0;
    cart.map((item) => {
      return (sumador = sumador + item.totalItem);
    });

    return sumador;
  };

  return (
    <Context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        suma,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
