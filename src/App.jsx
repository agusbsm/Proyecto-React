import Navbar from "./components/layout/navbar/Navbar";
import ItemlistContainer from "./components/pages/itemlist/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemlistContainer />} />
        <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
        <Route
          path="/categoria/:categoryName"
          element={<ItemlistContainer />}
        />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
