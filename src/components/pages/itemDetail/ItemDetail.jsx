import React from "react";
import CounterConteiner from "./components/common/itemCounter/CounterConteiner";

const ItemDetail = (producto, setProducto) => {
  return <CounterConteiner stock={producto.stock} />;
};

export default ItemDetail;
