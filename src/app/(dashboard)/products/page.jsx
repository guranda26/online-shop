"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./index.css";
import { fetchProducts } from "../../components/FetchProducts";
import SearchInput from "../../components/SearchInput";
import { handleDelete } from "../../modules/handleDelete";
import { addProduct } from "../../modules/addProduct";
import { editProduct } from "../../modules/editProduct";
import "../../../styles/SearchInput.css";
import NotFoundPage from "../../not-found";

const ProductPage = ({ searchParams }) => {
  const { search, sortBy = "", order = "" } = searchParams;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  // New states for product addition form
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(search, sortBy, order);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error(error);
        setError("Error loading products");
      }
    };
    loadProducts();
  }, [search, sortBy, order]);

  if (error) {
    return <NotFoundPage />;
  }

  const onDelete = (id) => {
    handleDelete(products, "products", id, setProducts);
  };

  const onEdit = (product) => {
    setNewProduct(product);
    setEditingProduct(product);
  };

  const handleSubmit = () => {
    if (editingProduct) {
      editProduct(products, setProducts, { ...editingProduct, ...newProduct });
      setEditingProduct(null);
    } else {
      addProduct(products, setProducts, newProduct, setNewProduct);
    }
    setNewProduct({ title: "", description: "", price: "", image: "" });
  };

  return (
    <section className="products-section">
      <h1>All Products</h1>
      <div className="search-sort__wrapper">
        <SearchInput searchPath="products" supportsPriceSort="true" />
      </div>
      <div className="search-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Title"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
            className="search-input"
          />
          <input
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            className="search-input"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="search-input"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="search-input"
          />
          <button onClick={handleSubmit} className="search-btn">
            {editingProduct ? "Save Changes" : "Add Product"}
          </button>
        </div>
      </div>

      <div className="product-list_wrapper">
        {products.map(({ id, images, title, description, price }) => (
          <div key={id} className="products">
            <Link href={`products/${id}`} className="product-list">
              <div className="image-container">
                <img src={images[0]} alt={title} className="product-img" />
              </div>
              <div className="product-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="price">Price: ${price}</p>
              </div>

              <div className="flex gap-2 text-center justify-center font-semibold mt-4">
                <button className="py-2 px-3 bg-blue-600 rounded-md text-white w-[110px]">
                  Add to cart
                </button>
                <button
                  className="py-2 px-3 bg-red-600 rounded-md text-white w-[110px]"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
                <button
                  className="py-2 px-3 bg-blue-400 rounded-md text-white w-[110px]"
                  onClick={() =>
                    onEdit({ id, title, description, price, image: images[0] })
                  }
                >
                  Edit
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
