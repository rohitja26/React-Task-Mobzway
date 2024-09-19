import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <h1>Here is the Counter </h1>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      </div>
      <hr />
      <Link to={"/task3"}>Click here to move on task - 3</Link>
    </>
  );
};

export default CreateCounter;
