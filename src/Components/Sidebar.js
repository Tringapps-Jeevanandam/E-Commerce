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
        <li onClick={() => langFilter("english")}>English</li>
        <li onClick={() => langFilter("tamil")}>Tamil</li>
        <li onClick={() => langFilter("french")}>French</li>
        <li onClick={() => langFilter("hindi")}>Hindi</li>
      </ul>
      <h3>Category</h3>
      <ul className="lang">
        <li onClick={()=>GenreFilter("ActionAdventure")}>Action & Adventure</li>
        <li onClick={()=>GenreFilter("biography")}>Biographies</li>
        <li onClick={()=>GenreFilter("comic")}>Comics & Mangas</li>
        <li onClick={()=>GenreFilter("children")}>children's Books</li>
      </ul>
    </div>
  );
};
export default Sidebar;
