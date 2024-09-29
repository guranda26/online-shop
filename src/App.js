import "./App.css";
import Header from "./components/Homepage";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Layout from "./Layout";
import Contact from "./components/Contact";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContent />} />
          <Route path="/home" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
      {/* <Header /> */}
      {/* <MainContent /> */}
    </div>
  );
}

export default App;
