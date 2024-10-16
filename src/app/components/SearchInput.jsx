"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash.debounce";
import "../../styles/SearchInput.css";

const SearchInput = ({ searchPath }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  const debouncedSearch = useMemo(() => {
    return debounce((term, sort, order) => {
      let query = `/${searchPath}?search=${term}`;

      if (sort && order) {
        query += `&sortBy=${sort}&order=${order}`;
      }
      router.push(query);
    }, 500);
  }, [router, searchPath]);

  const handleChange = async (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm, sortBy, order);
  };

  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
    debouncedSearch(searchTerm, newSortBy, order);
  };

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;
    setOrder(newOrder);
    debouncedSearch(searchTerm, sortBy, newOrder);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={`Search ${searchPath}...`}
        className="search-input"
      />
      <label htmlFor="sort-price" className="sort-label">
        Sort by:
      </label>
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="sort-dropdown"
      >
        <option value="">No sorting</option>
        <option value="title">Title</option>
        <option value="body">Body</option>
      </select>
      <select
        value={order}
        onChange={handleOrderChange}
        className="order-dropdown"
      >
        <option value="">Select order</option>{" "}
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SearchInput;
