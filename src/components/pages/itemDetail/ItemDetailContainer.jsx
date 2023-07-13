import { useEffect, useState } from "react";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  let { id } = useParams();

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productoSeleccionado = productos.find(
        (producto) => producto.id === +id
      );
      resolve(productoSeleccionado);
    });
    promesa.then((res) => setProducto(res)).catch((err) => console.log(err));
  }, []);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
