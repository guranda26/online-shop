import "./App.css";
import MainContent from "./components/MainContent";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Layout from "./Layout";
import Contact from "./components/Contact";
import Products from "./components/Products";
import NewObject from "./components/NewObject";
import BlogItems from "./components/BlogItems";
import BlogItem from "./components/BlogItem";

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
          <Route path="/blogs" element={<BlogItems />} />
          <Route path="/blogs/posts/:id" element={<BlogItem />} />
          <Route path="/assignment-3" element={<NewObject />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
