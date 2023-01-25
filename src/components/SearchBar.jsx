import React from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ placeHolder, setIsSearchBarFocused }) {
  return (
    <input
      autoFocus
      onBlur={() => {
        setIsSearchBarFocused(false);
      }}
      className="search-input"
      type="text"
      name="search"
      placeholder={placeHolder}
    />
  );
}
