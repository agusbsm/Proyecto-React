import { useContext, useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  let { id } = useParams();

  const { addToCart, quantityById } = useContext(CartContext);

  let cantidadEnCarrito = quantityById(id);

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => setProducto({ ...res.data(), id: res.id }));
  }, [id]);

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
