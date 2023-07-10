import Navbar from "./components/layout/navbar/Navbar";
import ItemlistContainer from "./components/pages/itemlist/ItemListContainer";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemlistContainer />
      <Footer />
    </div>
  );
}

export default App;
