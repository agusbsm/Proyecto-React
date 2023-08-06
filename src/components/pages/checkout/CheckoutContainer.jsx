import { Button } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import "./checkout.css";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  const { cart, totalPrice } = useContext(CartContext);

  const [ordenId, setOrdenId] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = totalPrice();

  let orden = {
    buyer: userData,
    items: cart,
    total,
    Date: serverTimestamp(),
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  // Orden de Compra

  let ordenCollections = collection(db, "ordenes");
  addDoc(ordenCollections, orden).then((res) => setOrdenId(res.id));

  cart.forEach((elemento) => {
    updateDoc(doc(db, "products", elemento.id), {
      stock: elemento.stock - elemento.quantity,
    });
  });

  return (
    <div>
      <h1>Checkout</h1>

      {!ordenId ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Apellido"
            name="lastName"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <Button
            style={{
              backgroundColor: "#7c063f",
              marginRight: "60px",
            }}
            variant="contained"
            type="submit"
          >
            Enviar
          </Button>
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              backgroundColor: " #7c063f",
              color: "#e3e6f3",
              padding: "8px",
              borderRadius: "3px",
              fontWeight: "bold",
            }}
            variant="contained"
            type="button"
          >
            CANCELAR
          </Link>
        </form>
      ) : (
        <h2>Nro. de compra:{ordenId}</h2>
      )}
    </div>
  );
};

export default CheckoutContainer;
