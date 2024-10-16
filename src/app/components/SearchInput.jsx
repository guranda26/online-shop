"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash.debounce";
import "../../styles/SearchInput.css";

const SearchInput = ({ searchPath }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useMemo(() => {
    return debounce((term) => {
      router.push(`/${searchPath}?search=${term}`);
    }, 500);
  }, [router, searchPath]);

  const handleChange = async (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm);
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
