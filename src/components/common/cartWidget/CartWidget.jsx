import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function SimpleBadge() {
  const { quantityById } = useContext(CartContext);

  let total = quantityById();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} color="primary" showZero>
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
}
