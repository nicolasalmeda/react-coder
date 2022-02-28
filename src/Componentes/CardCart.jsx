export default function CardCart({ items }, finalPrice, removeItem) {
  return (
    <div>
      <h3>{items.name}</h3>
      <button onClick={() => removeItem(items.id)}>Remove</button>
      <img src={items.img} alt="img" />
      <p> Price: {finalPrice} </p>
    </div>
  );
}
