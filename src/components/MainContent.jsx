import React from "react";
import "../styles/MainContent.css";
import FirstProduct from "../assets/product-1.jpg";
import SecondProduct from "../assets/product-2.jpeg";
import ThirdProduct from "../assets/product-3.jpg";

const MainContent = () => {
  return (
    <main className="main-content">
      <section id="home" className="section home">
        <h1>Welcome to the Home Page</h1>
        <p>
          We are dedicated to providing the best services for our customers.
        </p>
      </section>
      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>
          Our company was founded with a mission to offer high-quality products
          and services. With over 10 years of experience, we have built a
          reputation for excellence.
        </p>
      </section>
      <section id="products" className="section products">
        <h2>Our Products</h2>
        <p>
          We offer a wide range of products tailored to meet the needs of our
          diverse customers. From tech gadgets to everyday essentials, we have
          something for everyone.
        </p>
        <div className="product-list">
          <div className="product">
            <img src={FirstProduct} alt="Product 1" width="200px" />
            <p>Product 1 - A great gadget that enhances your daily life.</p>
          </div>
          <div className="product">
            <img src={SecondProduct} alt="Product 2" width="200px" />
            <p>
              Product 2 - Innovative and reliable, perfect for work and play.
            </p>
          </div>
          <div className="product">
            <img src={ThirdProduct} alt="Product 3" width="200px" />
            <p>Product 3 - Stylish and functional for any occasion.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Whether you have a question about our
          products, services, or anything else, our team is ready to answer all
          your questions.
        </p>
        <ul>
          <li>
            <span>Email:</span> contact@mail.com
          </li>
          <li>
            <span>Phone:</span> +995 595 76-39-32
          </li>
          <li>
            <span>Address:</span> Abashidze str, 32, Tbilisi, Georgia
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
