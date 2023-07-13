import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to="/"
      >
        <h1>Ecommerce React</h1>
      </Link>
      <ul className="apartados_nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Home
        </Link>
        <li>Shop</li>
        <li>Stores</li>
        <li>Ayuda</li>
        <CartWidget />
      </ul>
    </div>
  );
};

export default Navbar;
