import ProductCard from "./ProductCard";
import { CoffeeDetails } from "../Data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <header className="header-container">
        <Navbar />
        <div className="products-container">
          <h1>Product Details</h1>
        </div>
      </header>
      <ProductCard coffee={CoffeeDetails} />
      <Footer />
    </>
  );
};

export default Products;
