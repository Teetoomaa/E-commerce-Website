import { createContext, useState } from "react";

const CoffeeContext = createContext({});

export const CoffeeProvider = ({ children }) => {
  const [addedCoffee, setAddedCoffee] = useState([]);

  const addToCart = (coffee) => {
    setAddedCoffee((prevState) => [...prevState, coffee]);
  };
  return (
    <CoffeeContext.Provider value={{ addedCoffee, addToCart }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
