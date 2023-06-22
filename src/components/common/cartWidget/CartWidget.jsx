import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={1} color="action">
      <ShoppingBagIcon color="action" />
    </Badge>
  );
}
