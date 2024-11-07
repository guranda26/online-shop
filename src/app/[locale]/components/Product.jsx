import React from "react";
import "../../styles/Product.css";

const Product = ({ src, heading, description }) => {
  return (
    <div className="product">
      <h2>{heading}</h2>
      <img src={src} alt={heading} width="200px" />
      <p>{description}</p>
      <input type="button" value="Add to cart" className="cart-btn" />
    </div>
  );
};

export default Product;
