import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function CardCart({ items }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div>
      <h3>{items.name}</h3>
      <button onClick={() => removeItem(items.id)}>Remove</button>
      <img src={items.img} alt="img" />
      <p> Price: {items.price} </p>
    </div>
  );
}
