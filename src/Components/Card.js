import "./Card.css";
import { useState,useContext } from "react";
import { FaCartPlus, FaCartArrowDown } from "react-icons/fa";
import Context from "./Context";
const Card = (props) => {
  const {cart,setCart} = useContext(Context);
  const [addtocart, setAddtocart] = useState(true);
  // const handleClick = () => {

  //   setCart([...cart,props.book]);
  //   setAddtocart(!addtocart);
  // };

  const handleClick = () => {
    if (addtocart) {
      setCart([...cart, props.book]);
    } else {
      const newCart = cart.filter((item) => item.name !== props.book.id);
      setCart(newCart);
    }
    setAddtocart(!addtocart);
  };
  
  return (
    <div className="card">
      <img
        className="card-image"
        src={require("../images/" + props.book.image)}
        alt={props.book.name}
      />
      <div className="card-content">
        <h3 className="card-name">{props.book.name}</h3>
        <p className="card-price">₹{props.book.price}</p>
        <button className="card-button " onClick={handleClick}>{addtocart? <>Add to Cart<FaCartPlus/></>:<>Remove from cart<FaCartArrowDown/></>}</button>
      </div>
    </div>
  );
};
export default Card;
