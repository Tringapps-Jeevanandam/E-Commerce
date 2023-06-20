import "./styles/Card.css";
import { useState,useContext } from "react";
import { FaCartPlus, FaCartArrowDown } from "react-icons/fa";
import Context from "./Context";

const Card = (props) => {
  const {cart,setCart} = useContext(Context);
  const [isInCart, setIsInCart] = useState(true);
  const handleClick = () => {
    if (isInCart) {
      setCart([...cart, props.book]);
    } else {
      const newCart = cart.filter((item) => item.name !== props.book.name);
      setCart(newCart);
    }
    setIsInCart(!isInCart);
  };

  const checkCart = (id) =>{
    console.log(id)
    const index = cart.findIndex(item => item.id===id);
    return index >=0; 
  }
   
  
  return (
    <div className="card">
      <img
        className="card-image"
        src={require("../images/" + props.book.image)}
        alt={props.book.name}
      />
      <div className="card-content">
        <h4 className="card-name">{props.book.name}</h4>
        <p className="card-price">₹{props.book.price}</p>
        <button className="card-button " onClick={handleClick}>{checkCart(props.book.id)? <>Remove from cart<FaCartArrowDown/></>:<>Add to Cart<FaCartPlus/></>}</button>
      </div>
    </div>
  );
};
export default Card;
