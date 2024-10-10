"use client";
import Link from "next/link";
import LoadingSpinner from "../../components/Loader";
import { useFetchItems } from "../../hooks/useFetchItems";
import "../index.css";
import NotFoundPage from "../../not-found";

const PostsPage = ({ params }) => {
  const { id } = params;
  const url = `https://dummyjson.com/products/${id}`;
  const { items: product, loading, error } = useFetchItems(url, null);

  if (loading) return <LoadingSpinner />;

  if (!product || error) return <NotFoundPage />;

  return (
    <section className="products-section product">
      <h1>Product</h1>
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
    </section>
  );
};
export default PostsPage;
