import { useContext } from "react";
import CartContext from "../context/CartContext";
import CardCart from "./CardCart";

export default function Cart() {
  const { cart, clear } = useContext(CartContext);

  console.log("cart en Cart:", cart);
  let total = 0;
  return (
    <div>
      <ul>
        {cart.map((items) => {
          const subtotal = items.price * items.totalItem;

          total = total + subtotal;

          return (
            // <div key={items.id}>
            //   <h3>{items.name}</h3>
            //   <button onClick={() => removeItem(items.id)}>Remove</button>
            //   <img src={items.img} alt="img" />
            //   <p> Price: {finalPrice} </p>
            // </div>
            <div>
              <CardCart key={items.id} items={items} />
              <p>SubTotal: {subtotal} </p>
            </div>
          );
        })}
      </ul>
      <p>Precio Total:{total}</p>
      <button onClick={() => clear()}>Clear</button>
    </div>
  );
}
