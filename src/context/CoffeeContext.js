import { createContext, useState } from "react";

const CoffeeContext = createContext({});

export const CoffeeProvider = ({ children }) => {
  const [addedCoffee, setAddedCoffee] = useState([]);

  const removeFromCart = (id) =>{
    const newCart = addedCoffee.filter(coffee => {
      return coffee.id !== id
    })
    setAddedCoffee(newCart)
    console.log(newCart)
  }
  const addToCart = (coffee) => {
    setAddedCoffee((prevState) => [...prevState, coffee]);
  };
  return (
    <CoffeeContext.Provider value={{ addedCoffee, addToCart, removeFromCart }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
