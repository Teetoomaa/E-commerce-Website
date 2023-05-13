import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import CoffeeContext from "../context/CoffeeContext";

const CartCard = () => {
  const { addedCoffee, removeFromCart } = useContext(CoffeeContext);

  return (
    <div className="cart-container">
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Remove</td>
          </tr>
        </thead>

        {addedCoffee.map((coffee) => {
          return (
            <tbody>
              <tr>
                <td>
                  <img src={coffee.img} alt="third" />
                </td>
                <td>
                  <h3>{coffee.coffee_name}</h3>
                </td>
                <td>
                  <h3>${coffee.price}</h3>
                </td>
                <td>
                  <input value="1" type="number"></input>
                </td>
                <td>
                  <h3>${coffee.total}</h3>
                </td>
                <td>
                  <RiDeleteBin6Line onClick={()=>removeFromCart(coffee.id)} style={{ fontSize: 15, color: "red" }} />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <div className="cart-sub">
        <h3>Subtotal $100.00</h3>
      </div>

      <div className="cart-btn">
        <button>PROCEED TO CHECKOUT</button>
      </div>

    </div>
  );
};

export default CartCard;
