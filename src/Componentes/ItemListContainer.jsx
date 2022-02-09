import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount initial="1" stock="50" />
    </div>
  );
}
