import './CartPage.css';
import { useContext } from 'react';
import  Context from './Context';
import CartCard from './CartCard';

const CartPage = () =>{
    const {cart,setCart} = useContext(Context);

   return (
    <div className="main">
        {(cart.length===0)?(<div className='cart-empty'>Cart is Empty</div>):(cart.map(items=> <CartCard items={items}/>))
      }

    </div>
   )
}
export default CartPage