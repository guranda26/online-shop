import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-footerBg font-semibold text-footerText">
      <nav className="footer-nav">
        <ul>
          <li>
            <p>&copy; Copyright 2024. Ourcompany.com</p>
          </li>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms of Service</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
