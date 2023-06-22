import "./Itemlist.css";

const Itemlist = () => {
  return (
    <div className="itemlist">
      <h2 className="encabezado">Store</h2>
      <ul>
        <li>
          <button id="todos" className="btn-categoria">
            Todos
          </button>
        </li>
        <li>
          <button id="camperas" className="btn-categoria ">
            Camperas
          </button>
        </li>
        <li>
          <button id="camisetas" className="btn-categoria ">
            Camisetas
          </button>
        </li>
        <li>
          <button id="camisas" className="btn-categoria">
            Camisas
          </button>
        </li>
        <li>
          <button id="pantalones" className="btn-categoria">
            Pantalones
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Itemlist;
