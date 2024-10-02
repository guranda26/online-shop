import "./App.css";
import MainContent from "./components/MainContent";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Layout from "./Layout";
import Contact from "./pages/Contact";
import Products from "./components/Products";
import NewObject from "./components/NewObject";
import BlogItems from "./components/BlogItems";
import BlogItem from "./components/BlogItem";
import Profile from "./pages/Profile";

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
          <Route path="/profile" element={<Profile />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
