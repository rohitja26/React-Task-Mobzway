import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/task1"}>Click here to go on task 1</Link>
      <hr />
      <Link to={"/task2"}>Click here to go on task 2</Link>
      <hr />
      <Link to={"/task3"}>Click here to go on task 3</Link>
    </div>
  );
};

export default Home;
