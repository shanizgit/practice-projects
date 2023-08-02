import React from "react";
import "../Styles/Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p className="product_title">
            Titan Women's Rose Gold Dial Metal Band Watch - 2540WM06
          </p>
          <p className="product_price">
            <strong>59</strong> <small>Aed</small>
          </p>
          <div className="product_rating">⭐⭐⭐⭐⭐</div>
        </div>
        <img
          src="https://citizenshop.me/assets/images/7042c-citizen-eco-drive-ladies-watches.jpg"
          alt="watch_black"
          className="product_image"
        />
        <button className="product_btn">Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
