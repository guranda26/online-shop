"use client";

import { useEffect, useState } from "react";

const useFetchItems = (url, itemsKey) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data[itemsKey]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, [url, itemsKey]);

  return { items, loading, error };
};

export { useFetchItems }; // Make sure this line is present
