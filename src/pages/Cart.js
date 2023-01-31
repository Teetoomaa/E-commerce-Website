import CartCard from "./CartCard";
import { CoffeeDetails } from "../Data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <>
      <header className="header-container">
        <Navbar />
        <div className="cartpage-container">
          <h1>Cart</h1>
        </div>
      </header>
      <CartCard coffee={CoffeeDetails} />
      <Footer />
    </>
  );
};

export default Cart;
