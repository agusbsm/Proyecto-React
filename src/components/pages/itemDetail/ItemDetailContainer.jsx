import { useContext, useEffect, useState } from "react";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  let { id } = useParams();

  const { addToCart, quantityById } = useContext(CartContext);

  let cantidadEnCarrito = quantityById(id);

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productoSeleccionado = productos.find(
        (producto) => producto.id === +id
      );
      resolve(productoSeleccionado);
    });
    promesa.then((res) => setProducto(res)).catch((err) => console.log(err));
  }, []);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      quantity: cantidad,
      ...producto,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agregó exitosamente al carrito.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <ItemDetail
      producto={producto}
      agregarAlCarrito={agregarAlCarrito}
      cantidadEnCarrito={cantidadEnCarrito}
    />
  );
};

export default ItemDetailContainer;
