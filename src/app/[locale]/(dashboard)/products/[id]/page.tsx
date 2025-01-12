import React from "react";
import NotFoundPage from "../../../not-found";
import ReturnBackButton from "../../../../components/ReturnBackButton";
import { Params } from "../../../../interfaces/params";
import "../../../../../index.css";
import "../index.css";

import BuyProductButton from "@/src/app/components/BuyProductButton";

const ProductPage = async ({ params }: { params: Params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!response.ok) {
    return <NotFoundPage />;
  }

  const product = await response.json();

  if (!product || !product.id) {
    return <NotFoundPage />;
  }
  return (
    <section className="products-section product">
      <h1>{product.brand} Product</h1>
      <div key={product.id} className="products">
        <div className="product-list">
          <div className="image-container">
            <img
              src={product.image_link}
              alt="product-img"
              className="product-img max-w-300px"
            />
          </div>
          <div className="product-info">
            <h2 className="text-blue-800 font-bold text-2xl">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold italic">Brand: {product.brand}</p>
            <p className="font-semibold">Category: {product.category}</p>
            <p className="price">Price: ${product.price}</p>
          </div>
        </div>
        <div className="return-back mb-5 flex gap-3">
          <ReturnBackButton />
          <BuyProductButton
            productId={product.id}
            productName={product.name}
            productDescription={product.description}
            productPrice={product.price}
            productImage={product.image_link}
          />
        </div>
      </div>
    </section>
  );
};
export default ProductPage;
