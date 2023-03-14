import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Section from "./Components/Section";
import CartPage from "./Components/CartPage";
import { AddCart } from "./Components/Context";
import { Filter } from "./Components/FilterContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
    console.log(showCart);
  };

  return (
    <>
    <Filter>
      <AddCart>
        <Header onCartClick={handleCartClick} />
        <div className="container">
          <Sidebar />
          <Section />
          {showCart && <CartPage />}
        </div>
      </AddCart>
      </Filter>
    </>
  );
}

export default App;
