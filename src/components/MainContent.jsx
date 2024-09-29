import React from "react";
import "../styles/MainContent.css";
import FirstProduct from "../assets/product-1.jpg";
import SecondProduct from "../assets/product-2.jpeg";
import ThirdProduct from "../assets/product-3.jpg";
import Product from "./Product";

const MainContent = () => {
  return (
    <main className="main-content">
      <section id="products" className="section products">
        <h2>Our Products</h2>
        <p>
          We offer a wide range of products tailored to meet the needs of our
          diverse customers. From tech gadgets to everyday essentials, we have
          something for everyone.
        </p>
        <div className="product-list">
          <Product
            heading="Apple iPhone 15 (128 GB)"
            src={FirstProduct}
            alt="iPhone 15"
            description="A great gadget that enhances your daily life."
          />
          <Product
            heading="MacBook Air (M1, 2020)"
            src={SecondProduct}
            alt="MacBook Air"
            description="Innovative and reliable, perfect for work and play."
          />
          <Product
            heading="Galaxy Z Flip5"
            src={ThirdProduct}
            alt="Galaxy Z Flip5"
            description=" Charmingly compact, stylish and functional for any occasion."
          />
          <Product
            heading="Apple iPhone 15 (128 GB)"
            src={FirstProduct}
            alt="iPhone 15"
            description="A great gadget that enhances your daily life."
          />
          <Product
            heading="MacBook Air (M1, 2020)"
            src={SecondProduct}
            alt="MacBook Air"
            description="Innovative and reliable, perfect for work and play."
          />
          <Product
            heading="Galaxy Z Flip5"
            src={ThirdProduct}
            alt="Galaxy Z Flip5"
            description=" Charmingly compact, stylish and functional for any occasion."
          />
        </div>
      </section>
    </main>
  );
};

export default MainContent;
