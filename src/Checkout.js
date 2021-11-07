import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { UseStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{ basket }, dispatch] = UseStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.lemonlight.com/app/uploads/2018/10/Your-Complete-Guide-to-Amazon-Advertising.png"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        
        {basket.map(item =>(
          <CheckoutProduct 
          id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
        ))}
        
        
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
