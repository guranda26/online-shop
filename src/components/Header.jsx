import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <section id="home" className="home-section">
      <header className="header">
        <nav className="navbar">
          <ul>
            <li className="nav-items">
              <Link to={"home"}>Home</Link>
              {/* <Link to={"about"}>About</Link> */}
              <Link to={"products"}>Products</Link>
              <Link to={"contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="home-content">
        <h1>Welcome to the Home Page</h1>
        <p>
          We are dedicated to providing the best services for our customers.
        </p>
      </div>
    </section>
  );
};

export default Header;
