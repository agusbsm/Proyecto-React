import { useState } from "react";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({
    name: "celular",
    precio: 87200,
    stock: 12,
  });
  return <itemDetail producto={producto} setProducto={setProducto} />;
};

export default ItemDetailContainer;
