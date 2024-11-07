"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import NotFoundPage from "../[locale]/not-found";

const useFetchItems = (url, itemsKey) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return notFound();
        }
        const data = await response.json();
        const result = itemsKey ? data[itemsKey] : data;
        setItems(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, [url, itemsKey]);

  return { items, loading, error };
};

export { useFetchItems };
