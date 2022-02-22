import { useEffect, useState } from "react";
import { getProduct } from "../Componentes/AsynMock";
import Spinner from "../Componentes/Spinner";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getProduct(productId).then((products) => {
      setProducts(products);
      setisLoading(false);
      console.log(products);
    });
  }, [productId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Detalles</h1>
      <ItemDetail key={products.id} products={products} />
      <ItemCount initial="1" stock="50" />
    </div>
  );
}
