import { useEffect, useState } from "react";
import { productos } from "../../../productsMock";
import Itemlist from "./ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemlistContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = productos.filter(
      (producto) => producto.categoria === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : productos);
      }, 2500);
    });

    tarea.then((respuesta) => setItems(respuesta));
  }, [categoryName]);

  return <Itemlist items={items} />;
};

export default ItemlistContainer;
