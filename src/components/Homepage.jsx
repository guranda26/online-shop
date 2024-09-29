import { Link } from "react-router-dom";
import "../styles/Header.css";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Welcome to the Home Page</h1>
        <p>
          We are dedicated to providing the best services for our customers.
        </p>
      </div>
    </section>
  );
};

export default Homepage;
