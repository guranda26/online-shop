"use client";

import React from "react";
import { useState, useMemo, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash.debounce";
import "../../styles/SearchInput.css";

const SearchInput = ({
  searchPath,
  supportsPriceSort = false,
  supportsBodySort = false,
}: {
  searchPath?: string;
  supportsPriceSort?: boolean;
  supportsBodySort?: boolean;
}) => {
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
      console.log("Navigating to query:", query);
      router.push(query);
    }, 500);
  }, [router, searchPath]);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm, sortBy, order);
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
    debouncedSearch(searchTerm, newSortBy, order);
  };

  const handleOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newOrder = event.target.value;
    setOrder(newOrder);
    debouncedSearch(searchTerm, sortBy, newOrder);
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={`Search ${searchPath}...`}
          className="search-input"
        />
      </div>
      <div className="sort-container text-formText">
        <div className="sort-option text-textBlack">
          <label htmlFor="sort" className="sort-label text-formText">
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="">No sorting</option>
            <option value="title">Title</option>
            {supportsBodySort && <option value="body">Body</option>}
            {supportsPriceSort && <option value="price">Price</option>}
          </select>
          <select
            value={order}
            onChange={handleOrderChange}
            className="sort-select"
          >
            <option value="">Select order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
