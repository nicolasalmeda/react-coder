import { useEffect, useState } from "react";
import { getProduct } from "../Componentes/AsynMock";
import Spinner from "../Componentes/Spinner";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getProduct().then((products) => {
      setProducts(products);
      setisLoading(false);
      console.log(products);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Detalles</h1>
      <ItemDetail key={products.id} products={products} />
    </div>
  );
}
