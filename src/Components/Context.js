import { createContext, useState } from "react";

const Context = createContext();

export const AddCart = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={{ cart, setCart}}>
      {children}
    </Context.Provider>
  );
};

export default Context;
