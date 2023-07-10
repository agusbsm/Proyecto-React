import { useEffect, useState } from "react";
import { productos } from "../../../productsMock";
import Itemlist from "./ItemList.jsx";

const ItemlistContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(productos);
    }, 3000);

    tarea.then((respuesta) => setItems(respuesta));
  }, []);

  return <Itemlist items={items} />;
};

export default ItemlistContainer;
