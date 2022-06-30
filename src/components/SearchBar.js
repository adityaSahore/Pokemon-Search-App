import React, { useState } from "react";

const SearchBar = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        name="text"
        placeholder="Search Pokemon"
        onChange={(event) => setSearchTerm(event.target.value)}
        id="search"
      />
      {posts.filter((post) => {
        if (searchTerm == "") {
          return post;
        } else if (post.name.includes(searchTerm)) {
          return post;
        }
      })}
    </div>
  );
};

export default SearchBar;
