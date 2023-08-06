import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig.js";
import Itemlist from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemlistContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;

    let productsCollection = collection(db, "products");

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("categoria", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let arrayProductos = res.docs.map((producto) => {
        return { ...producto.data(), id: producto.id };
      });
      setItems(arrayProductos);
    });
  }, [categoryName]);

  return <Itemlist items={items} />;
};

export default ItemlistContainer;
