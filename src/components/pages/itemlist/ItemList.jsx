import "./Itemlist.css";
import ItemCard from "../../common/itemCard/ItemCard";
import { Link } from "react-router-dom";
import { Skeleton, Stack } from "@mui/material";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="itemlist">
      <h2 className="encabezado">Store</h2>
      <ul>
        <Link to="/" className="btn-categoria">
          Todos
        </Link>
        <Link to="/categoria/camperas" className="btn-categoria">
          Camperas
        </Link>
        <Link to="/categoria/camisetas" className="btn-categoria">
          Camisetas
        </Link>
        <Link to="/categoria/camisas" className="btn-categoria">
          Camisas
        </Link>
        <Link to="/categoria/pantalones" className="btn-categoria">
          Pantalones
        </Link>
      </ul>
      <section className="itemcards">
        {items.length > 0
          ? items.map((item) => <ItemCard key={item.id} item={item} />)
          : arr.map((elemento) => (
              <Stack spacing={1} key={elemento}>
                <Skeleton variant="rounded" width={150} height={160} />
                <Skeleton
                  variant="text"
                  width={180}
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton variant="rounded" width={150} height={40} />
              </Stack>
            ))}
      </section>
    </div>
  );
};

export default ItemList;
