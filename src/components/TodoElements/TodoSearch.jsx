import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="MAKE 10K"
      className="search"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
