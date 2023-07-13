import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`/ItemDetail/${item.id}`}>
          <CardMedia component="img" height="180" image={item.image} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h4" fontSize={18} component="div">
            {item.titulo}
          </Typography>
          <Typography variant="body2" color="text.primary">
            ${item.precio}
          </Typography>
          <Link to={`/ItemDetail/${item.id}`}>
            <Button style={{ backgroundColor: "#7c063f" }} variant="contained">
              Ver Producto
            </Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
