import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {
const {
    searchValue, 
    setSearchValue,
} = React.useContext(TodoContext);

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
