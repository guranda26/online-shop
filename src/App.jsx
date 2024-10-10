import React, { useEffect, useState } from "react";
import About from "./app/about/page";
import MainContent from "./app/components/MainContent";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://dummyjson.com/products";
      try {
        const response = await fetch(url);
        const data = await response.json();

        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <MainContent />
    </>
  );
};

export default App;
