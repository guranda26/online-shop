"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./index.css";

const page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://dummyjson.com/products";
      try {
        const response = await fetch(url);
        const data = await response.json();

        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="products-section">
      <h1>All Products</h1>
      <div className="product-list_wrapper">
        {products.map((product) => {
          return (
            <div key={product.id} className="products">
              <Link href={`products/${product.id}`} className="product-list">
                <div className="image-container">
                  <img src={product.images[0]} alt="" className="product-img" />
                </div>
                <div className="product-info">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p className="price">Price: ${product.price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;
