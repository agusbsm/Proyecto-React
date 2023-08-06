import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import "./CartContainer.css";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, deleteById, totalPrice, clearCart } = useContext(CartContext);

  let vaciar = () => {
    Swal.fire({
      icon: "warning",
      iconColor: "black",
      title: "Quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Vaciar",
      confirmButtonColor: "#7c063f",
      denyButtonText: `Cancelar`,
      denyButtonColor: "black",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          icon: "success",
          iconColor: "#7c063f",
          title: "Carrito vaciado con éxito",
          confirmButtonText: "OK",
          confirmButtonColor: "#7c063f",
        });
      }
    });
  };

  let total = totalPrice();

  return (
    <table className="cart" width="100%">
      <thead>
        <tr className="cart-details">
          <td>ELIMINAR</td>
          <td>IMAGEN</td>
          <td>PRODUCTO</td>
          <td>PRECIO</td>
          <td>CANTIDAD</td>
          <td>TOTAL</td>
        </tr>
      </thead>

      {cart.map((elemento) => {
        return (
          <tbody key={elemento.id}>
            <tr>
              <td className="cart-delete-product">
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteById(elemento.id)}
                >
                  <HighlightOffIcon />
                </IconButton>
              </td>
              <td>
                <img
                  src={elemento.image}
                  alt={elemento.titulo}
                  width={65}
                  style={{ paddingTop: 10 }}
                />
              </td>
              <td>{elemento.titulo}</td>
              <td className="cart-product-price">${elemento.precio}</td>
              <td className="cart-product-quantity">{elemento.quantity}</td>
              <td className="cart-total-price">
                ${elemento.precio * elemento.quantity}
              </td>
            </tr>
          </tbody>
        );
      })}
      {cart.lenght > 0 && (
        <>
          <Button
            className="cart-clear"
            style={{ backgroundColor: "#7c063f", margin: "170px" }}
            variant="contained"
            onClick={vaciar}
          >
            Vaciar Carrito
          </Button>
          <Link to="/checkout">Finalizar Compra</Link>
        </>
      )}
      <tfoot>
        <tr>
          <td>Total:${total}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartContainer;
