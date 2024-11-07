"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import LoadingSpinner from "./Loader";
import NotFoundPage from "../../not-found";
import { useFetchItems } from "../hooks/useFetchItems";

const ProductList = () => {
  const url = "https://dummyjson.com/products";
  const { items: products, loading, error } = useFetchItems(url, "products");

  const [sortByPrice, setSortByPrice] = useState("default");
  const [sortByName, setSortByName] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const debouncedSearchProducts = useMemo(() => {
    let timeoutId;
    return (query) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        searchProducts(query);
      }, 300);
    };
  }, []);

  // Search products logic
  const searchProducts = async (query) => {
    if (query.trim() === "") {
      setFilteredProducts([]);
    } else {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await response.json();
      setFilteredProducts(data.products);
    }
  };

  // Trigger search when searchQuery changes
  useEffect(() => {
    debouncedSearchProducts(searchQuery);
  }, [searchQuery, debouncedSearchProducts]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePriceSortChange = (e) => {
    setSortByPrice(e.target.value);
  };

  const handleNameSortChange = (e) => {
    setSortByName(e.target.value);
  };

  let sortedProducts = [
    ...(filteredProducts.length ? filteredProducts : products || []),
  ];

  if (sortByPrice !== "default") {
    sortedProducts = sortedProducts.sort((a, b) => {
      return sortByPrice === "asc" ? a.price - b.price : b.price - a.price;
    });
  }

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
      <div className="search-sort__wrapper">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <div className="sort-container">
          <div className="sort-option">
            <label htmlFor="sort-price" className="sort-label">
              Sort by Price:
            </label>
            <select
              id="sort-price"
              className="sort-select"
              onChange={handlePriceSortChange}
            >
              <option value="default">Default</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
          <div className="sort-option">
            <label htmlFor="sort-name" className="sort-label">
              Sort by Name:
            </label>
            <select
              id="sort-name"
              className="sort-select"
              onChange={handleNameSortChange}
            >
              <option value="default">Default</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
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

export default ProductList;
