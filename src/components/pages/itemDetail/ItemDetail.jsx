import CounterContainer from "../../common/itemCounter/CounterContainer";

const ItemDetail = (producto) => {
  return (
    <div>
      <h1>{producto.titulo}</h1>
      <h3>{producto.precio}</h3>
      <CounterContainer stock={producto.stock} />
    </div>
  );
};
export default ItemDetail;
