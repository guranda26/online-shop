import React, { Suspense } from "react";
import Product from "../components/Product";
import FirstProduct from "../../../public/assets/product-1.jpg";
import SecondProduct from "../../../public/assets/product-2.jpeg";
import ThirdProduct from "../../../public/assets/product-3.jpg";
import LoadingSpinner from "../components/Loader";
import "../../styles/MainContent.css";
import ProductList from "../components/ProductList";
import "../products/index.css";
import "./index.css";

const Products = () => {
  return (
    <section id="products" className="section digital-products">
      <h2>Our Products</h2>
      <p>
        We offer a wide range of products tailored to meet the needs of our
        diverse customers. From tech gadgets to everyday essentials, we have
        something for everyone.
      </p>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductList />
      </Suspense>
      <div className="digital-product-list">
        <Product
          heading="Apple iPhone 15 (128 GB)"
          src={FirstProduct.src}
          alt="iPhone 15"
          description="A great gadget that enhances your daily life."
        />
        <Product
          heading="MacBook Air (M1, 2020)"
          src={SecondProduct.src}
          alt="MacBook Air"
          description="Innovative and reliable, perfect for work and play."
        />
        <Product
          heading="Galaxy Z Flip5"
          src={ThirdProduct.src}
          alt="Galaxy Z Flip5"
          description=" Charmingly compact, stylish and functional for any occasion."
        />
        <Product
          heading="Apple iPhone 15 (128 GB)"
          src={FirstProduct.src}
          alt="iPhone 15"
          description="A great gadget that enhances your daily life."
        />
        <Product
          heading="MacBook Air (M1, 2020)"
          src={SecondProduct.src}
          alt="MacBook Air"
          description="Innovative and reliable, perfect for work and play."
        />
        <Product
          heading="Galaxy Z Flip5"
          src={ThirdProduct.src}
          alt="Galaxy Z Flip5"
          description=" Charmingly compact, stylish and functional for any occasion."
        />
      </div>
    </section>
  );
};

export default Products;
