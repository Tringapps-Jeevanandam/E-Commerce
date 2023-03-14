import { createContext, useState } from "react";

const ManageCartBtn = createContext();

export const ManageCart = ({ children }) => {
    const [addtocart, setAddtocart] = useState(true);

  return (
    <ManageCartBtn.Provider value={{ addtocart, setAddtocart}}>
      {children}
    </ManageCartBtn.Provider>
  );
};

export default ManageCartBtn;
