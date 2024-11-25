"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchProducts } from "../../../components/FetchProducts";
import SearchInput from "../../../components/SearchInput";
import { handleDelete } from "../../../modules/handleDelete";
import { addProduct } from "../../../modules/addProduct";
import { editProduct } from "../../../modules/editProduct";
import NotFoundPage from "../../not-found";
import { PostsAndProductPageType } from "@/src/app/interfaces/posts";
import "../../../../styles/SearchInput.css";
import "./index.css";
import { Product } from "@/src/app/interfaces/products";
import { useSearchParams } from "next/navigation";

const ProductPage: React.FC<PostsAndProductPageType> = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const order = searchParams.get("order") || "";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
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

  const onDelete = (id: number) => {
    handleDelete(products, "products", id, setProducts);
  };

  const onEdit = (product: Product) => {
    setNewProduct(product);
    setEditingProduct(product);
  };

  const handleSubmit = () => {
    if (editingProduct) {
      editProduct(products, setProducts, {
        ...editingProduct,
        ...newProduct,
      });
      setEditingProduct(null);
    } else {
      addProduct(products, setProducts, newProduct, setNewProduct);
    }
    setNewProduct({ title: "", description: "", price: "", image: "" });
  };

  return (
    <section className="products-section bg-background text-textColor">
      <h1>All Products</h1>
      <div className="search-sort__wrapper">
        <SearchInput searchPath="products" supportsPriceSort={true} />
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
          <div key={id} className="products product-list">
            <Link href={`products/${id}`}>
              <div className="product-info">
                <h2 className="text-blue-800 text-center font-bold text-2xl mt-3">
                  {title}
                </h2>
                <div className="image-container">
                  <img src={images[0]} alt={title} className="product-img" />
                </div>
                <p>{description}</p>
                <p className="price">Price: ${price}</p>
              </div>
            </Link>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
