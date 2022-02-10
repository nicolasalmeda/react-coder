import { Search } from "../Componentes/SearchBar";
import { NavBar } from "../Componentes/NavBar";
import ItemList from "./ItemList";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Search />
      <ItemList />
    </div>
  );
}
