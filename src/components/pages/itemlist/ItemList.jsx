import ItemCard from "../../common/itemCard/ItemCard";

const ItemList = ({ items }) => {
  return (
    <div>
      {items?.map((item) => {
        <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
