import React, {useState} from "react";
import { Cart } from "./components/Cart/Cart";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartShown, setCartIsShown] = useState(false);
  const showCart = ()=>{
    setCartIsShown(true);
  }
  const hideCart = ()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
    {cartShown && <Cart onCloseCart = {hideCart}/>}
      <Header onShowCart = {showCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
