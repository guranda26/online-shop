"use client";
import Link from "next/link";
import "./index.css";
import { useFetchItems } from "../hooks/useFetchItems";

const ProdictPage = () => {
  const url = "https://dummyjson.com/products";
  const { items: products, loading, error } = useFetchItems(url, "products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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

export default ProdictPage;
