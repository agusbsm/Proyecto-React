import { Card, CardActionArea, CardMedia } from "@mui/material";
import CounterContainer from "../../common/itemCounter/CounterContainer";

const ItemDetail = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <h1>{producto.titulo}</h1>
      <CardMedia component="img" height="500" image={producto.image} />
      <h3>${producto.precio}</h3>
      <CounterContainer stock={producto.stock} />
    </Card>
  );
};
export default ItemDetail;
