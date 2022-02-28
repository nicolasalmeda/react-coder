import { useContext } from "react";
import CartContext from "../context/CartContext";
// import CardCart from "./CardCart";

export default function Cart() {
  const { cart, removeItem, clear } = useContext(CartContext);
  console.log("cart en Cart:", cart);
  let sumador = 0;
  return (
    <div>
      <ul>
        {cart.map((items) => {
          const finalPrice = items.price * items.totalItem;

          sumador = sumador + finalPrice;

          return (
            <div key={items.id}>
              <h3>{items.name}</h3>
              <button onClick={() => removeItem(items.id)}>Remove</button>
              <img src={items.img} alt="img" />
              <p> Price: {finalPrice} </p>
            </div>

            //   <CardCart
            //     key={items.id}
            //     finalPrice={finalPrice}
            //     items={items}
            //     removeItem={removeItem}
            //   />
          );
        })}
      </ul>
      <p>Precio Total:{sumador}</p>
      <button onClick={() => clear()}>Clear</button>
    </div>
  );
}
