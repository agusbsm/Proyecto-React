import "./Itemlist.css";
import ItemCard from "../../common/itemCard/ItemCard";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="itemlist">
      <h2 className="encabezado">Store</h2>
      <ul>
        <Link to="/">
          <button id="todos" className="btn-categoria">
            Todos
          </button>
        </Link>
        <Link to="/categoria/camperas">
          <button id="camperas" className="btn-categoria ">
            Camperas
          </button>
        </Link>
        <Link to="/categoria/camisetas">
          <button id="camisetas" className="btn-categoria ">
            Camisetas
          </button>
        </Link>
        <Link to="/categoria/camisas">
          <button id="camisas" className="btn-categoria">
            Camisas
          </button>
        </Link>
        <Link to="/categoria/pantalones">
          <button id="pantalones" className="btn-categoria">
            Pantalones
          </button>
        </Link>
      </ul>
      <section className="itemcards">
        {items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
};

export default ItemList;
