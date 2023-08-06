import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  const { cart, totalPrice } = useContext(CartContext);

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = totalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    navigate("/");
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="ingrese su nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingrese su apellido"
          name="lastName"
          onChange={handleChange}
        />
        <Button type="submit">Enviar</Button>
        <Button type="button">Cancelar</Button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
