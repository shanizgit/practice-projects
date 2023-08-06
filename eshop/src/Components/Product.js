import React from "react";
import "../Styles/Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p className="product_title">{title}</p>
          <p className="product_price">
            <strong>{price}</strong> <small>Aed</small>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt="watch_black" className="product_image" />
        <button className="product_btn">Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
