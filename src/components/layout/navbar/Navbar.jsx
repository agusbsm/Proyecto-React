import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to="/"
        >
          Ecommerce React
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
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
