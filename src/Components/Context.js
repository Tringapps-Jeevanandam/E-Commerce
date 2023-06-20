import { createContext, useState, useMemo } from "react";

const Context = createContext();

export const AddCart = ({ children }) => {
  const [cart, setCart] = useState([]);

  const value = useMemo(() => {
    return { cart, setCart };
  }, [cart, setCart]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
