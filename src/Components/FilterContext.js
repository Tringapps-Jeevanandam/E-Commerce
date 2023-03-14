import { createContext, useState } from "react";

const FilterContext = createContext();

export const Filter = ({ children }) => {
  const [filter, setFilter] = useState([]);

  return (
    <FilterContext.Provider value={{ filter, setFilter}}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
