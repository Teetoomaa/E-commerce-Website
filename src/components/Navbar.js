import logo from "../images/Logo.png"
import {BsCart2} from "react-icons/bs"
import { useContext } from "react";
import CoffeeContext from "../context/CoffeeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {addedCoffee} = useContext(CoffeeContext)

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h4>Temi Coffee</h4>
      </div>

      <div className="Nav-items">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Contact</a> 
      </div>

      <Link to="/cart/" className="cart">
      <BsCart2 style={{fontSize: 30, color: "white"}} />
        <span>{addedCoffee.length}</span>
        {/* <span>0</span> */}
      </Link>
    </div>
  );
};

export default Navbar;
