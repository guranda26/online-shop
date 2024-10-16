"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/SearchInput.css";

const SearchInput = ({ searchPath }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = async (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    router.push(`/${searchPath}?search=${newSearchTerm}`);
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
    </div>
  );
};

export default SearchInput;
