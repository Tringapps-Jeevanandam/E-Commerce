import "./Sidebar.css";
import FilterContext from "./FilterContext";
import { useContext } from "react";
const Sidebar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const funt = (name) => {
    if (filter.indexOf(name) === -1) {
      setFilter([...filter, name]);
    } else {
      let temp=[...filter];
      temp.splice(filter.indexOf(name),1)
      setFilter(temp);
    }
    console.log(filter)
  };
  return (
    <div className="side">
      <h3>Languages</h3>
      <ul className="lang">
        <li onClick={() => funt("english")}>English</li>
        <li>Tamil</li>
        <li>French</li>
        <li>Hindi</li>
      </ul>
      <h3>Category</h3>
      <ul className="lang">
        <li>Action & Adventure</li>
        <li>Biographies</li>
        <li>Comics & Mangas</li>
        <li>children's Books</li>
      </ul>
    </div>
  );
};
export default Sidebar;
