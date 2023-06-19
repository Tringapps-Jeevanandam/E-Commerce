import "./Sidebar.css";
import FilterContext from "./FilterContext";
import { useContext } from "react";
const Sidebar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const langFilter = (name) => {
    if (filter.indexOf(name) === -1) {
      setFilter([...filter, name]);
    } else {
      let temp=[...filter];
      temp.splice(filter.indexOf(name),1)
      setFilter(temp);
    }
    console.log(filter)
  };
  const GenreFilter = (genre) => {
    if (filter.indexOf(genre) === -1) {
      setFilter([...filter, genre]);
    } else {
      let temp=[...filter];
      temp.splice(filter.indexOf(genre),1)
      setFilter(temp);
    }
    console.log(filter)
  };
  return (
    <div className="side">
      <h3>Languages</h3>
      <ul className="lang">
        <li><input onClick={() => langFilter("english")} type="checkbox" /><label>English</label></li>
        <li><input onClick={() => langFilter("tamil")} type="checkbox" /><label>Tamil</label></li>
        <li><input onClick={() => langFilter("french")} type="checkbox" /><label>French</label></li>
        <li><input onClick={() => langFilter("hindi")} type="checkbox" /><label>Hindi</label></li>
      </ul>
      <h3>Category</h3>
      <ul className="lang">
        <li><input onClick={()=>GenreFilter("ActionAdventure")} type="checkbox"/><label>Action & Adventure</label></li>
        <li><input onClick={()=>GenreFilter("biography")} type="checkbox"/><label>Biography</label></li>
        <li><input onClick={()=>GenreFilter("comic")} type="checkbox"/><label>Comics</label></li>
        <li><input onClick={()=>GenreFilter("children")} type="checkbox"/><label>Kids Books</label></li>
      </ul>
    </div>
  );
};
export default Sidebar;
