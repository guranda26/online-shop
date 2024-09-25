import React from "react";

const Product = ({ src, heading, description }) => {
  return (
    <div className="product">
      <h2>{heading}</h2>
      <img src={src} alt={heading} width="200px" />
      <p>{description}</p>
    </div>
  );
};

export default Product;
