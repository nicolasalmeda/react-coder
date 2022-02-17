import ItemList from "../Componentes/ItemList";

export default function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList />
    </div>
  );
}
