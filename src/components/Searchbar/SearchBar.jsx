import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import { useFetchData } from "../../utils/CustomHooks";

export default function SearchBar({ placeHolder, setIsSearchBarFocused }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  useFetchData(axios.allTVShows, setResults);

  return (
    <>
      <input
        autoFocus
        onBlur={() => {
          setIsSearchBarFocused(false);
        }}
        className="search-input"
        type="text"
        name="search"
        placeholder={placeHolder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="search-results">
        {results.map((result) => (
          <div key={result.id}>
            {result.name ? result.name : result.title} {results.length}
          </div>
        ))}
      </div>
    </>
  );
}
