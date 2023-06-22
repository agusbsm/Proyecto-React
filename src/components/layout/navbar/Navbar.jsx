import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <ul className="apartados_nav">
        <li>Home</li>
        <li>Shop</li>
        <li>Stores</li>
        <li>Ayuda</li>
        <CartWidget />
      </ul>
    </div>
  );
};

export default Navbar;
