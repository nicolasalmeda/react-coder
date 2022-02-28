import { Link } from "react-router-dom";

export default function Addbutton() {
  return (
    <div>
      <Link to={"/cart"}>
        <button>Ir al Carrito</button>
      </Link>
    </div>
  );
}
