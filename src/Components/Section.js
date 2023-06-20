import Card from "./Card";
import "./styles/Section.css";
import { useContext } from "react";
import { data } from "./data";
import FilterContext from "./FilterContext";

const Section = () => {
  const { filter } = useContext(FilterContext);

  

  return (
    <div className="section">
      {data.map((book) => {
        if (filter.length === 0) {
          return <Card key={book.id} book={book} />;
        } else {
          if(filter.indexOf(book.lang)!==-1 || filter.indexOf(book.genre)!==-1){
            return <Card key={book.id} book={book} />;
          }
        }
      })}
    </div>
  );
};

export default Section;
