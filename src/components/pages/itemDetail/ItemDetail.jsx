import { Card, CardMedia } from "@mui/material";
import CounterContainer from "../../common/itemCounter/CounterContainer";

const ItemDetail = ({ producto, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <h1>{producto.titulo}</h1>
      <CardMedia component="img" height="300" image={producto.image} />
      <h3>${producto.precio}</h3>
      <CounterContainer
        stock={producto.stock}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      />
    </Card>
  );
};
export default ItemDetail;
