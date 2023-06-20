import "./styles/Sidebar.css";
import FilterContext from "./FilterContext";
import { useContext, useEffect } from "react";
import { data } from "./data";

const Sidebar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const langFilter = (name) => {
    if (filter.indexOf(name) === -1) {
      setFilter([...filter, name]);
    } else {
      let lang = [...filter];
      lang.splice(filter.indexOf(name), 1);
      setFilter(lang);
    }
  };
  const GenreFilter = (genre) => {
    if (filter.indexOf(genre) === -1) {
      setFilter([...filter, genre]);
    } else {
      let catgry = [...filter];
      catgry.splice(filter.indexOf(genre), 1);
      setFilter(catgry);
  
    }
    console.log(filter);
  };

  const category = [...new Set(data.map((item) => item.genre))];
  const languages = [...new Set(data.map((item) => item.lang))];
  
  
 
  return (
    <div className="side">
      <h3>Languages</h3>
      <ul className="lang">
        {languages.map((language) => (
          <li id={language}>
            <input onClick={() => langFilter(language)} type="checkbox" />
            <label>{language.toUpperCase()}</label>
          </li>
        ))}
      </ul>
      <h3>Category</h3>
      <ul className="lang">
        {category.map((type) => (
          <li id = {type}>
            <input onClick={() => GenreFilter(type)} type="checkbox" />
            <label>{type.toUpperCase()}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
