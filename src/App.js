import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContent />} />
          {/* <Route path="/home" element={<MainContent />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
      {/* <Header /> */}
      {/* <MainContent /> */}
      <Footer />
    </div>
  );
}

export default App;
