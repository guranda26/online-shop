"use client";

import React from "react";
import Link from "next/link";
import { handleDelete } from "../../../modules/handleDelete";
import { useProducts } from "../../../hooks/useProducts";
import "../../../../styles/SearchInput.css";
import LoadingSpinner from "../../../components/Loader";
import "./index.css";
import AddToCart from "@/src/app/components/AddToCart";

const placeholderImage = "/assets/product-placeholder.webp";

const ProductPage: React.FC = () => {
  const { products, setProducts, error, loading } = useProducts();

  const onDelete = (id: number) => {
    handleDelete(products, "products", id, setProducts);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <section className="products-section bg-background text-textColor">
      <h1>All Products</h1>

      <div className="product-list_wrapper">
        {products.map(
          ({ id, image_link, name, description, price, category }) => (
            <div key={id} className="products product-list">
              <Link href={`products/${id}`}>
                <div className="product-info">
                  <h2 className="text-blue-800 text-center font-bold text-2xl mt-3">
                    {name}
                  </h2>
                  <div className="image-container">
                    <img
                      src={image_link || placeholderImage}
                      alt={name}
                      className="product-img"
                    />
                  </div>
                  <p>{description}</p>
                  <p className="text-['#7e1d1d'] font-semibold italic">
                    Category: {category}
                  </p>
                  <p className="price">Price: ${price}</p>
                </div>
              </Link>
              <div className="flex gap-2 text-center justify-center font-semibold mt-4">
                
                
                <button
                  className="py-2 px-3 bg-red-600 rounded-md text-white w-[110px]"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProductPage;
