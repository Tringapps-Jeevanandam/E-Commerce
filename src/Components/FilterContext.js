import { createContext, useMemo, useState } from "react";

const FilterContext = createContext();

export const Filter = ({ children }) => {
  const [filter, setFilter] = useState([]);
  const value = useMemo(() => {
    return { filter, setFilter };
  }, [filter, setFilter]);
  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
