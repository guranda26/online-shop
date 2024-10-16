import React from "react";

const SortOptions = () => {
  return (
    <div className="sort-container">
      <div className="sort-option">
        <label htmlFor="sort-price" className="sort-label">
          Sort by Price:
        </label>
        <select
          id="sort-price"
          className="sort-select"
          onChange={handlePriceSortChange}
        >
          <option value="default">Default</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="sort-option">
        <label htmlFor="sort-name" className="sort-label">
          Sort by Name:
        </label>
        <select
          id="sort-name"
          className="sort-select"
          onChange={handleNameSortChange}
        >
          <option value="default">Default</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default SortOptions;
