import { CoffeeDetails } from "../Data";
import MenuCard from "../components/MenuCard"

const Menu = () => {
  return (
    <div className="menu-container">
      <h4>OUR MENU</h4>
      
      <div className="coffee-container">
        {
            CoffeeDetails.map((coffee) => {
              return <MenuCard coffee= {coffee}/>
            })
        }
      </div>
    </div>
  );
};

export default Menu