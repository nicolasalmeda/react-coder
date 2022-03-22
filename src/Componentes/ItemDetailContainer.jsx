import { useEffect, useState } from "react";
import Spinner from "../Componentes/Spinner";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { getProductById } from "../firebase/firebase";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getProductById(productId).then((response) => {
      setProduct(response);
    });
    setisLoading(false);

    return () => {
      setProduct();
    };
  }, [productId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <ItemDetail key={product.id} products={product} />
    </div>
  );
}
