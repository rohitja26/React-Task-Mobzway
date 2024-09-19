import React, { useState } from "react";
import { Link } from "react-router-dom";

const BuildSerachFilter = () => {
  const [searchItem, setSearchItem] = useState("");

  const reactFeatures = [
    "JSX",
    "Components",
    "Props",
    "State",
    "Lifecycle Methods",
    "Hooks",
    "Virtual DOM",
    "Context API",
    "React Router",
    "Higher-Order Components",
    "Error Boundaries",
    "Fragments",
    "Portals",
  ];

  const filterItem = reactFeatures.filter((feature) =>
    feature.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Search Filters</h1>
        <h3>React Features:</h3>
        <input
          type="text"
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search..."
        />
        <ul>
          {filterItem.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <hr />
      <Link to={"/task1"}>Click here to move on task-1 again</Link>
    </>
  );
};

export default BuildSerachFilter;
