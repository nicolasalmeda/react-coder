import { useEffect, useState } from "react";
import Spinner from "../Componentes/Spinner";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../firebase/firebase";

export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const docRef = doc(firestoreDb, "products", productId);

    setisLoading(true);

    getDoc(docRef).then((querySnapshot) => {
      const product = { id: querySnapshot.id, ...querySnapshot.data() };
      setProducts(product);
      setisLoading(false);
    });
  }, [productId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <ItemDetail key={products.id} products={products} />
    </div>
  );
}
