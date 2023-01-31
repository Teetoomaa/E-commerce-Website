import { useContext } from "react";
import CoffeeContext from "../context/CoffeeContext";

const MenuCard = ({ coffee }) => {
  const {addToCart} = useContext(CoffeeContext)

  return (
    <div className="menu-card">
      <div className="coffee-image">
        <img src={coffee.img} alt="first" />
      </div>

      <div className="coffee-details">
        <a href={`products/${coffee.coffee_name}`}><h2>{coffee.coffee_name}</h2></a>
        <button onClick={() => addToCart(coffee)}>Add to cart</button>
      </div>
      <p>${coffee.price}</p>
    </div>
  );
};

export default MenuCard;
