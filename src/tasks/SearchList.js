import React, { useState } from "react";

const people = ["David", "Honai", "Benjamin", "Usman", "Kevin", "Arjun"];

const SearchList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {people
        .filter((item) => {
          if (searchTerm == "") {
            return item;
          } else if (
            item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return item;
          }
        })
        .map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
    </div>
  );
};

export default SearchList;
