"use client";
import { useState } from "react";
import Link from "next/link";
import "./index.css";
import { useFetchItems } from "../hooks/useFetchItems";
import LoadingSpinner from "../components/Loader";
import NotFoundPage from "../not-found";

const ProductPage = () => {
  const url = "https://dummyjson.com/products";
  const { items: products, loading, error } = useFetchItems(url, "products");

  const [sortByPrice, setSortByPrice] = useState("default");
  const [sortByName, setSortByName] = useState("default");

  const handlePriceSortChange = (e) => {
    setSortByPrice(e.target.value);
  };

  const handleNameSortChange = (e) => {
    setSortByName(e.target.value);
  };

  // Sorting logic before rendering
  let sortedProducts = [...(products || [])];

  // Apply price sorting
  if (sortByPrice !== "default") {
    sortedProducts = sortedProducts.sort((a, b) => {
      return sortByPrice === "asc" ? a.price - b.price : b.price - a.price;
    });
  }

  // Apply name sorting
  if (sortByName !== "default") {
    sortedProducts = sortedProducts.sort((a, b) => {
      return sortByName === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
  }

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;
  if (!products) {
    return <NotFoundPage />;
  }

  return (
    <section className="products-section">
      <h1>All Products</h1>
      <div className="sort-container">
        <div>
          <label htmlFor="sort-price">Sort by Price:</label>
          <select id="sort-price" onChange={handlePriceSortChange}>
            <option value="default">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <div>
          <label htmlFor="sort-name">Sort by Name:</label>
          <select id="sort-name" onChange={handleNameSortChange}>
            <option value="default">Default</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
      </div>
      <div className="product-list_wrapper">
        {sortedProducts.map((product) => (
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
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
