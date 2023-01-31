import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuCard from "./components/MenuCard";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CoffeeProvider } from "./context/CoffeeContext";

function App() {
  return (
    <>
      <CoffeeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menucard/" element={<MenuCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="products/:coffeename" element={<Products />} />
        </Routes>
      </CoffeeProvider>
    </>
  );
}

export default App;
