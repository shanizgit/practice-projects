import React from "react";
import "../Styles/CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src="https://staticimg.titan.co.in/Titan/Catalog/2648WL01_1.jpg?impolicy=pqmed&imwidth=640"
        alt="basket_image"
        className="checkoutProduct_image"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">
          Workwear Watch with Grey Dial Leather Strap
        </p>
        <p className="checkoutProduct_price">
          <strong>50</strong>
          <small>Aed</small>
        </p>
        <div className="checkoutProduct_rating">⭐⭐⭐⭐⭐⭐</div>
        <button className="basket_button">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
