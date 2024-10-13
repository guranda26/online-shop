"use client";
import LoadingSpinner from "./Loader";
import NotFoundPage from "../not-found";
import { useFetchItems } from "../hooks/useFetchItems";

const ProductDetails = ({ id }) => {
  const url = `https://dummyjson.com/products/${id}`;
  const { items: product, loading, error } = useFetchItems(url, null);

  if (loading) return <LoadingSpinner />;
  if (!product || error) return <NotFoundPage />;

  return (
    <div className="product-list">
      <div className="image-container">
        <img
          src={product.images[0]}
          alt={product.title}
          className="product-img"
        />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
