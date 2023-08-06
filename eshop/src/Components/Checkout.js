import React from "react";
import "../Styles/Checkout.css";
import CheckoutProduct from "../Components/CheckoutProduct";
import Subtotal from "../Components/Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://watchesqatar.com/cdn/shop/collections/WEB_Banner_Titan_World_Cup_BOGO_-_1920_x_800px.jpg?v=1668936801"
          alt="ad"
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_heading">Your Shopping Basket</h2>
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
