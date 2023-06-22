import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Itemlist from "./components/pages/itemlist/Itemlist";

function App() {
  return (
    <div>
      <Navbar />
      <Itemlist />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
