import './CartCard.css'
import { useContext } from 'react';
import Context from './Context';
const CartCard = (props) =>{
    const {cart,setCart} = useContext(Context);
    const removeItem = () => {
        const newCart = cart.filter((item) => item.name !== props.items.name);
        setCart(newCart);
      };
    
    return(
        <div className="CartCard">
            <img src={require("../images/"+props.items.image)}/>
            <h4>{props.items.name}</h4>
            <p>₹{props.items.price}</p>
            <button onClick={removeItem}>Remove</button>

        </div>
    )
}
export default CartCard;