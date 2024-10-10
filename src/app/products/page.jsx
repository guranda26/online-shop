"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`products/${product.id}`}>
                <img src={product.thumbnail} alt="" className="product-img" />
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
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
